// import React, { useRef } from "react";
// import { cart } from "./Data.js";
// import React, { useState } from 'react';


// const Navbar = () => {
  
  
  
//   const navbarRef = useRef();
//   const searchRef = useRef();
//   const cartRef = useRef();
//   const navbarHandler = () => {
//     navbarRef.current.classList.toggle("active");
//     searchRef.current.classList.remove("active");
//     cartRef.current.classList.remove("active");
//   };

//   const searchHandler = () => {
//     searchRef.current.classList.toggle("active");
//     navbarRef.current.classList.remove("active");
//     cartRef.current.classList.remove("active");
//   };
//   const cartHandler = () => {
//     cartRef.current.classList.toggle("active");
//     searchRef.current.classList.remove("active");
//     navbarRef.current.classList.remove("active");
//   };

//   return (
//     <>
//       <header className="header">
//         <a href="#" className="logo">
//           <img src="./images/logo.png" alt="" />
//         </a>
//         <nav className="navbar" ref={navbarRef}>
//           <a href="#home">home</a>
//           <a href="#about">about</a>
//           <a href="#menu">menu</a>
//           <a href="#products">products</a>
//           <a href="#review">review</a>
//           <a href="#contact">contact</a>
//           <a href="#blogs">blogs</a>
//           <a className="cart" href="#cart">cart</a>
//           <div className="icons">
//           <div
//             className="fas fa-search"
//             id="search-btn"
//             onClick={searchHandler}
//           ></div>
//           <div
//             className="fas fa-shopping-cart"
//             id="cart-btn"
//             onClick={cartHandler}
//           >
//             {/* <img src="./images/bro.jpg" alt="Cart" style={{width: "10%",height
//             : "10%"}}/> */}
//           </div>
//           <div
//             className="fas fa-bars"
//             id="menu-btn"
//             onClick={navbarHandler}
//           ></div>
//         </div>
//         </nav>
//         <div className="search-form" ref={searchRef}>
//           <input type="search" id="search-box" placeholder="search here..." />
//           <label htmlFor="search-box" className="fas fa-search"></label>
//         </div>
//         <div className="cart-items-container" ref={cartRef}>
//           {cart.map((item, index) => (
//             <div className="cart-item" key={index * Math.random()}>
//               <span className="fas fa-times"></span>
//               <img src={item.img} alt="" />
//               <div className="content">
//                 <h3>cart item 01</h3>
//                 <div className="price">$15.99/-</div>
//               </div>
//             </div>
//           ))}
//           <a href="#" className="btn">
//             checkout now
//           </a>
//         </div>
//       </header>
//       <addtocart/>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useRef } from "react";
import { cart } from "./Data.js";


const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src="./images/logo.png" alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">Products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
          <a href="">Log out</a>
          

          {/* Dropdown menu for cart */}
          <div className="dropdown" onClick={toggleDropdown}>
            <a href="#cart">cart</a>
            {isDropdownVisible && (
              
              <div className="dropdown-content">
              <img src="./images/cart-item-1.png" height="50px" />
              <p>Burger</p>
              <p>₹500</p>
              <img src="./images/cart-item-2.png" />
              <p>Nuggets</p>
              <p>₹300</p>
              <img src="./images/cart-item-3.png" />
              <p>Fries + Nuggets</p>
              <p>₹700</p>
              <img src="./images/cart-item-4.png" />
              <p>Salad</p>
              <p>₹1000</p>
              <button className="btnchk" onClick={()=> <a href="./pay.js"></a>}>Check Out</button>
              
              {/* Navbar{" "}
              <button className="btnchk" onClick={()=> navigate("payment.js")}>Check Out</button> */}
              </div>
              
            )}
          </div>

                 
          <div className="icons">
            <div
              className="fas fa-search"
              id="search-btn"
              onClick={searchHandler}
            ></div>
            <div
              className="fas fa-shopping-cart"
              id="cart-btn"
              onClick={cartHandler}
            ></div>
            <div
              className="fas fa-bars"
              id="menu-btn"
              onClick={navbarHandler}
            ></div>
          </div>
        </nav>

        {/* Search Form */}
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        {/* Cart Items Container */}
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              {/* <img src={item.img} alt="" /> */}
              <div className="content">
                {/* <h3>{item.name}</h3> */}
                {/* <div className="price">{item.price}</div> */}
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
