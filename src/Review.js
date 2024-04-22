import React from "react";
import { review } from "./Data.js";
// import qouteImg from "./pages/assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
        <div className="box">
  <img src="./images/quote-img.png" alt="Quote image" className="quote" />
  <p>
  Very good menu … not overly extensive. Food was very good quality all around. They know how to prepare home fries and their Pizza are top-notch. Prices were reasonable.
  </p>
  <img src="./images/pic-1.png" className="user" alt="User 1" />
  <h3>John Doe</h3>
  <div className="stars">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star-half-alt"></i>
  </div>
</div>

<div className="box">
  <img src="./images/quote-img.png" alt="Quote image" className="quote" />
  <p>
    I was so impressed with my breakfast this morning! I tried the Supreme Burger, finished my whole plate and was so impressed with the quality of the food and the service too.
  </p>
  <img src="./images/pic-2.png" className="user" alt="User 2" />
  <h3>Zendaya</h3>
  <div className="stars">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star-half-alt"></i>
    <i className="fas fa-star-half-alt"></i>
  </div>
</div>

<div className="box">
  <img src="./images/quote-img.png" alt="Quote image" className="quote" />
  <p>
  Coffee was fresh, even the Fries was good! Oh, and the Pizza! Everything we ordered was fresh and delicious and service was superb. Highly recommend! Definitely coming back.
  </p>
  <img src="./images/pic-3.png" className="user" alt="User 2" />
  <h3>Jane Smith</h3>
  <div className="stars">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star-half-alt"></i>
    <i className="fas fa-star-half-alt"></i>
  </div>
</div>


        </div>
      </section>
    </>
  );
};

export default Review;
