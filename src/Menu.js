import React from "react";
import { menu } from "./Data.js";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
        <div className="box">
  <img src="./images/menu-1.png" alt="Description of item 1" />
  <h3>Burger</h3>
  <div className="price">
  ₹500 <span>  ₹750</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>

<div className="box">
  <img src="./images/menu-2.png" alt="Description of item 2" />
  <h3>Fries + Nuggets</h3>
  <div className="price">
  ₹350 <span>₹500</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>
<div className="box">
  <img src="./images/menu-3.png" alt="Description of item 2" />
  <h3>Nuggets</h3>
  <div className="price">
  ₹200 <span>₹350</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>
<div className="box">
  <img src="./images/menu-4.png" alt="Description of item 2" />
  <h3>Pizza</h3>
  <div className="price">
  ₹700 <span>₹850</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>
<div className="box">
  <img src="./images/menu-5.png" alt="Description of item 2" />
  <h3>Salad</h3>
  <div className="price">
  ₹1000 <span>₹1200</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>
<div className="box">
  <img src="./images/menu-6.png" alt="Description of item 2" />
  <h3>Coffee</h3>
  <div className="price">
  ₹250 <span>₹300</span>
  </div>
  <a href="#" className="btn">
    Add to cart
  </a>
</div>



          
        </div>
      </section>
    </>
  );
};

export default Menu;
