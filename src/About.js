import React from "react";
// import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src="./images/about-img.jpeg"/>
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            At our restaurant, we take pride in creating dishes that are truly exceptional. What makes our food special? 
            It's our commitment to using only the finest, freshest ingredients sourced locally and seasonally whenever possible. 
            Our talented chefs craft each dish with passion and creativity, combining innovative techniques with time-honored traditions to bring out the best in every flavor.
            </p>
            <p>
            Our menus are carefully curated to offer a diverse range of culinary experiences, from classic favorites to exciting new tastes.
            </p>
            <a href="https://www.entrepreneur.com/en-in/growth-strategies/what-makes-your-food-menu-unique/328227" target="main" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
