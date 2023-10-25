import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux_hooks";
import { getStockData } from "../../redux/slices/stock_pages";
import StockCard from "../../components/stockcard/stockCard";
import "./Home.css";
import Header from "../../components/header/Header";
import Cart from "../../assets/menu.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const stock = useAppSelector((state) => state.stock.data);
  const [isSuggestion, setIsSuggestion] = useState(true);
  const [stockdetail, setStockDetail] = useState({});

  const dispatch = useAppDispatch();

  const searchStock = (event) => {
    setIsSuggestion(true);
    let searchTerm = event.target.value.toUpperCase();
    console.log(searchTerm);
    if (searchTerm.length > 1) {
      dispatch(getStockData(searchTerm));
    }
  };

  const navigator = () => {
    navigate("/watchlist");
  };

  const updateStock = (data) => {
    setStockDetail(data);
  };

  return (
    <div className="main__container">
      <div className="header__cart">
        <Header />
      </div>

      <h1>Add Stocks</h1>
      <div className="add-search">
        <div className="search__bar">
          <input
            onChange={searchStock}
            placeholder="Enter stock...."
            className="stock_input"
          />
        </div>

        <div onClick={navigator} className="menu_div">
          <img className="cart" src={Cart} alt="Logo" />
        </div>
      </div>

      <div className="display__items">
        {isSuggestion ? (
          <div className="api__data">
            {stock.map((item, index) => (
              <div className="api__data__display" key={index}>
                <p
                  onClick={() => {
                    setIsSuggestion(false);
                    updateStock(item);
                  }}
                  className="symbol"
                >
                  {item?.company}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <span>data not found</span>
          </div>
        )}
      </div>
      {stockdetail?.company && <StockCard data={stockdetail} />}
    </div>
  );
}
