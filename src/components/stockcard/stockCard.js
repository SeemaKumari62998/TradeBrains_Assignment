import React from "react";
import "./stockCard.css";
import { useAppDispatch } from "../../redux/redux_hooks";
import { setWishlist } from "../../redux/redux_hooks";
export default function StockCard({ data }) {
  const dispatch = useAppDispatch();

  const addDataToCart = (data) => {
    dispatch(setWishlist(data));
  };

  return (
    <div className="card">
      <div className="stockCard">
        <p>{data?.symbol}</p>
        <p>{data?.company}</p>
        <div className="stockCard__button">
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
