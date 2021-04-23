import React from "react";
const Home = (props) => {
  console.log("home", props);
  return (
    <div>
      <h1>Home Component</h1>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images-eu.ssl-images-amazon.com/images/I/317JiGToz-L._SY445_SX342_QL70_FMwebp_.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
