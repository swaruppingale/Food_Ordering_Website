import React from "react";
import { menu, cart, product, review, blog } from "./Data.js";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="https://pinchofyum.com/incredible-gochujang-sauce" target="main" class="title">
                Incredible Gochujang Sauce
                </a>
                <span>by Lindsay / 10th April</span>
                <p>
                Gochujang is a red chile paste that has its roots in Korean cooking! 
                </p>
                <a href="https://pinchofyum.com/incredible-gochujang-sauce" target="main" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
