import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux_hooks";
import { wishlistHandler } from "../../redux/slices/stock_pages";
import Header from "../../components/header/Header";
import "./watchlist.css";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.stock.wishlist);

  const removeFromWishlist = (company) => {
    const updatedWishlist = wishlist.filter((item) => item.company !== company);
    dispatch(wishlistHandler(updatedWishlist));
  };

  return (
    <div className="watchlist">
      <Header />
      <div className="title">
        <h1>Watchlist</h1>
      </div>
      <h2>Your Stocks</h2>
      <div>
        {wishlist.map((item, index) => (
          <div className="stocks" key={index}>
            <div>
              <p>{item.symbol}</p>
              <p>{item.company}</p>
              <button
                onClick={() => {
                  removeFromWishlist(item.company);
                }}
                className="button"
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
