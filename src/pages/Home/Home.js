import React, { useState, useEffect } from "react";
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
  const [stockInfo, setStockInfo] = useState({});
  const [selectedStock, setSelectedStock] = useState({});
  const [isSuggestion, setIsSuggestion] = useState(true);

  useEffect(() => {
    setStockInfo(stock);
  }, [stock]);

  const dispatch = useAppDispatch();

  const searchStock = (event) => {
    setIsSuggestion(true);
    let searchTerm = event.target.value;
    console.log(searchTerm.toUpperCase());
    if (event.target.value.length > 1) {
      dispatch(getStockData(searchTerm.toUpperCase()));
    }
  };

  const navigator = () => {
    navigate("/watchlist");
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
        <div
          onClick={() => {
            setSelectedStock(stock);
            setIsSuggestion(false);
          }}
          className="details__div"
        >
          {isSuggestion && (
            <div>
              {Object.keys(stockInfo).includes("Meta Data") ? (
                <div className="api__data">
                  <div className="api__data__display">
                    <p className="symbol">
                      {stockInfo["Meta Data"]["2. Symbol"]}
                    </p>
                    <p>{stockInfo["Meta Data"]["1. Information"]}</p>
                  </div>
                </div>
              ) : (
                <div>
                  {(Object.keys(stockInfo).includes("Error Message") ||
                    Object.keys(stockInfo).includes("Note")) && (
                    <span>Not Found</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {Object.keys(selectedStock).includes("Time Series (5min)") && (
        <StockCard
          selectedStock={
            Object.keys(selectedStock).includes("Time Series (5min)")
              ? selectedStock["Time Series (5min)"]
              : {}
          }
          stockName={
            stockInfo["Meta Data"] &&
            (stockInfo["Meta Data"]["2. Symbol"]
              ? stockInfo["Meta Data"]["2. Symbol"]
              : [])
          }
        />
      )}
    </div>
  );
}
