import React from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        
      <div className="image">
            <img src="./images/about-img.png"/>
          </div>
        
        <div className="content">
          <h3>
            <span>Where flavor and </span>passion unite.
          </h3>
          
          <p>
          Welcome to our food website!Explore a wide range of mouthwatering dishes 
          crafted with fresh ingredients and bursting with flavor
          </p>
            <a href="#" className="btn">
            get yours now
          </a>
          
        </div>
      </section>
    </>
  );
};

export default Home;
