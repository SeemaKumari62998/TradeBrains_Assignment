import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const stockSlicer = createSlice({
  initialState: {
    data: [],
    wishlist: [],
  },

  name: "stock",
  reducers: {
    stockdata: (state, action) => {
      state.data = action.payload;
    },
    wishlistdata: (state, action) => {
      let temp = [...state.wishlist];
      temp.push(action.payload);
      state.wishlist = temp;
    },

    wishlistFilter: (state, action) => {
      state.wishlist = [...action.payload];
    },
  },
});

export const { stockdata, wishlistdata, wishlistFilter } = stockSlicer.actions;

export const getStockData = (symbol) => async (dispatch) => {
  // const apiKey = "Y4KPDJET3EDVC856";
  // const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  const url = `https://dev.portal.tradebrains.in/api/search?keyword=$(symbol)`;
  const response = await axios.get(url);
  console.log(response, "after call");
  dispatch(stockdata(response.data));
};

export const setWhislist = (data) => async (dispatch) => {
  dispatch(wishlistdata(data));
};

export const wishlistHandler = (data, type) => async (dispatch) => {
  let stock = data?.filter((item) => {
    return item.stockinfo !== type;
  });
  console.log(stock, "hey");
  dispatch(wishlistFilter(stock));
};

export default stockSlicer.reducer;
