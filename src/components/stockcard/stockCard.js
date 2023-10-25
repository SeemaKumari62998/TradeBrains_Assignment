import React from "react";
import "./stockCard.css";
import { setWhislist } from "../../redux/slices/stock_pages";
import { useAppDispatch } from "../../redux/redux_hooks";

export default function StockCard({ data }) {
  const dispatch = useAppDispatch();

  const addDataToCart = (data) => {
    dispatch(setWhislist(data));
  };

  return (
    <div className="card">
      <div className="stockCard">
        <p>{data?.symbol}</p>
        <p>{data?.company}</p>

        <div className="stockcard__button">
          <button
            className="button"
            onClick={() => {
              addDataToCart(data);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
