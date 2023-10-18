import React from "react";
import "./stockCard.css";
import { setWhislist } from "../../redux/slices/stocks";
import { useAppDispatch } from "../../redux/hooks";

export default function StockCard({ selectedStock, stockName }) {
  const dispatch = useAppDispatch();
  const addDataToCart = (stockInfo, stockHistory) => {
    let data = {
      stockinfo: stockInfo,
      stockhistory: stockHistory,
    };
    dispatch(setWhislist(data));
  };

  const firstItem = Object.keys(selectedStock)[0];
  const firstStockData = selectedStock[firstItem];
  return (
    <div>
      <div className="stockCard__button">
        <button
          className="button"
          onClick={() => {
            addDataToCart(stockName, selectedStock);
          }}
        >
          Add
        </button>
      </div>
      <div className="card">
        <div key={firstItem} className="stockCard">
          <p className="card__item">{firstItem}</p>
          <div className="card__details">
            <p className="card__open">Open : {firstStockData["1. open"]}</p>
            <p className="card__volume">
              Volume : {firstStockData["5. volume"]}
            </p>
          </div>

          <div className="card__details">
            <p className="card__high">High: {firstStockData["2. high"]}</p>
            <p className="card__low">Low: {firstStockData["3. low"]}</p>
          </div>
          <div className="card__details">
            <p className="card__close">Close: {firstStockData["4. close"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
