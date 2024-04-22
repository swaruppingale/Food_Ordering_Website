import React from "react";
import { product } from "./Data.js";
const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span> Special products</span>
        </h1>cv

        <div className="box-container">
        <div className="box">
  <div className="icons">
    <a href="#" className="fas fa-shopping-cart"></a>
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-eye"></a>
  </div>
  <div className="image">
    <img src="./images/product-1.png" alt="Description of item 1" />
  </div>
  <div className="content">
    <h3>Supreme Burger</h3>
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
    <div className="price">
    ₹750 <span>₹800</span>
    </div>
  </div>
</div>

<div className="box">
  <div className="icons">
    <a href="#" className="fas fa-shopping-cart"></a>
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-eye"></a>
  </div>
  <div className="image">
    <img src="./images/product-2.png" alt="Description of item 2" />
  </div>
  <div className="content">
    <h3>Farmhouse Pizza</h3>
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
    <div className="price">
    ₹1000 <span>₹1100</span>
    </div>
  </div>
</div>

<div className="box">
  <div className="icons">
    <a href="#" className="fas fa-shopping-cart"></a>
    <a href="#" className="fas fa-heart"></a>
    <a href="#" className="fas fa-eye"></a>
  </div>
  <div className="image">
    <img src="./images/product-3.png" alt="Description of item 2" />
  </div>
  <div className="content">
    <h3>Mud Pie</h3>
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
    <div className="price">
    ₹800 <span>₹900</span>
    </div>
  </div>
</div>



        </div>
      </section>
    </>
  );
};

export default Products;
