// import { getStockData, wishlistdata } from  "../../redux/slices/stocks";
import { useAppDispatch, useAppSelector } from "../../redux/redux_hooks";
import { wishlistHandler } from "../../redux/slices/stock_pages";
import Header from "../../components/header/Header";
import "./watchlist.css";
export default function Wishlist() {
  const dispatch = useAppDispatch();

  const wishlist = useAppSelector((state) => state.stock.wishlist);

  return (
    <div className="watchlist">
      <Header />
      <div className="title">
        <h1>Watchlist</h1>
      </div>
      <h2>Your - Stocks</h2>
      <div>
        {wishlist.map((item, index) => {
          return (
            <div className="stocks" key={index}>
              <div>
                {Object.keys(item?.stockhistory).map((stock, stockIndex) => {
                  return (
                    <div>
                      {stockIndex < 1 && (
                        <div className="stocks__div">
                          <div>
                            <strong>{item?.stockinfo}</strong>
                          </div>

                          <div>
                            <div className="stocks__card">
                              <p className="bold">Open:</p>
                              <p style={{ color: "white" }}>
                                {item?.stockhistory[`${stock}`]["1. open"]}
                              </p>
                            </div>

                            <div className="stocks__card">
                              <p className="bold">High:</p>
                              <p style={{ color: "white" }}>
                                {item?.stockhistory[`${stock}`]["2. high"]}
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="stocks__card">
                              <p className="bold">Low:</p>
                              <p style={{ color: "white" }}>
                                {item?.stockhistory[`${stock}`]["3. low"]}
                              </p>
                            </div>
                            <div className="stocks__card">
                              <p sclassName="bold">Close:</p>
                              <p style={{ color: "white" }}>
                                {item?.stockhistory[`${stock}`]["4. close"]}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              dispatch(
                                wishlistHandler(wishlist, item?.stockinfo)
                              );
                            }}
                            className="button"
                          >
                            REMOVE
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
