import React, { useState, useContext } from "react"; // Add useContext
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => { //buyWindow is handle by two different components ... watchList ka component + dashboard ... whatever we made changes in watchlist it afffect dashboard
    
    const [stockQty, setStockQty] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    
    // ✅ USE the context here!
    const { closeBuyWindow } = useContext(GeneralContext);

    const handleBuyClick = () => {
        axios.post('http://localhost:3002/newOrder', {
            name: uid,
            qty: stockQty,
            price: stockPrice,
            mode: "Buy",
        })
        .then((response) => {
            console.log("Order placed successfully:", response.data);
            closeBuyWindow(); // ✅ Close window after successful order
        })
        .catch((error) => {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        });
    };

    const handleCancelClick = () => {
        closeBuyWindow(); // ✅ Now using context properly
    };

    return (
        <div className="containerClass" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input 
                            type="number" 
                            name="qty" 
                            id="qty" 
                            onChange={(e) => setStockQty(e.target.value)}
                            value={stockQty}
                        /> 
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input 
                            type="number" 
                            name="Price" 
                            id="price" 
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required &#8377;140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;