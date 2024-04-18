import React from 'react'

const Home = () => {
  let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let  cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index*100}%`;
})


const myFood  = ( ) =>{
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count === trends.length){
        count=0
    }
    myFood()
},4000)

// cart
button.forEach((curBtn)=>{
    curBtn.addEventListener("click", function(){
        alert("Added To Cart")
    })
})



cards.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        
        

        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
  return (
    <div>
     
    
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="index.css" />
        <script src="food.js" script/>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Catamaran:wght@200&family=Courgette&family=Dancing+Script:wght@700&family=Edu+TAS+Beginner:wght@700&family=Lato:wght@300;900&family=Mukta:wght@700&family=Mulish:wght@300&family=Open+Sans&family=PT+Sans:ital,wght@1,700&family=Poppins:wght@300&family=Raleway:wght@100&family=Roboto&family=Roboto+Condensed:wght@700&family=Roboto+Slab&display=swap" rel="stylesheet" />
        <div className="container">
          <nav>
            <div className="logo">
              <img src="good.svg" width={100} height={60} alt="Logo" />
            </div>
            <ul>
              <li><a href>Home</a></li>
              <li><a href="#food">Foods</a></li>
              <li><a href="#trend">Trends</a></li>
              <li><a href="#review">Reviews</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#customer support">Customer Support</a></li>
              <i id="bar" className="fa-solid fa-bars" />
            </ul>
          </nav>
          <div className="main">
            <div className="mainText">
              <h1>Discover the Best Food </h1>
              <button>Explore Foods</button>
            </div>
            <img src="p.jpg" alt="pizza" />
          </div>
          <div id="food">
            <div className="head">
              <h1>Our Foods</h1>
            </div>
            <div className="foods">
              <div className="card">
                <img src="1.png" height={200} alt="" />
                <p>Slow-cooked Italian Chicken</p>
                <button className="cart">Add To Cart</button>
              </div>
              <div className="card">
                <img src="2.jpg" height={200} alt="" />
                <p>Noodles</p>
                <button className="cart">Add To Cart</button>
              </div>
              <div className="card">
                <img src="food5.webp" alt="" />
                <p>Ramen</p>
                <button className="cart">Add To Cart</button>
              </div>
              <div className="card">
                <img src="food3.webp" alt="" />
                <p>Kastana Stifado</p>
                <button className="cart">Add To Cart</button>
              </div>
              <div className="card">
                <img src="food6.webp" alt="" />
                <p>Catrachas (Honduran Bean Tostadas).</p>
                <button className="cart">Add To Cart</button>
              </div>
              <div className="card">
                <img src="food4.webp" alt="" />
                <p>Salad</p>
                <button className="cart">Add To Cart</button>
              </div>
            </div>
          </div>
          <div id="review">
            <div className="head">
              <h1>Customer Review's</h1>
            </div>
            <div className="reviews">
              <div className="reviewCard">
                <img src="user.jpg" alt="" />
                <p>Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well</p>
              </div>
              <div className="reviewCard">
                <img src="user.jpg" alt="" />
                <p>This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.</p>
              </div>
              <div className="reviewCard">
                <img src="user.jpg" alt="" />
                <p>The absolute best red sauce. Weather on Pizza or Pasta, it’s honestly delicious. Portions are huge and the staff is extremely friendly and courteous.</p>
              </div>
            </div>
          </div>
          <div id="trend">
            <div className="head">
              <h1>Trending Foods</h1>
            </div>
            <div className="trendFood">
              <div className="trends">
                <img src="c1.jpg" alt="" />
                <img src="c2.jpg" alt="" />
                <img src="blg3.webp" alt="" />
              </div>
              <div className="trends">
                <img src="food5.webp" alt="" />
                <img src="food3.webp" alt="" />
                <img src="food4.webp" alt="" />
              </div>
              <div className="trends">
                <img src="food3.webp" alt="" />
                <img src="food6.webp" alt="" />
                <img src="food4.webp" alt="" />
              </div>
            </div>
          </div>
          <div id="blog">
            <div className="head">
              <h1>Read Food Blogs</h1>
            </div>
            <div className="blogs">
              <div className="blogCard">
                <img src="3.jpg" height={200} alt="" />
                <p>Latest Food Blogs</p>
                <a href="https://iamafoodblog.com/">Read Blog</a>
              </div>
              <div className="blogCard">
                <img src="blg4.jpg" alt="" />
                <p>Latest Food Blogs</p>
                <a href="https://iamafoodblog.com/">Read Blog</a>
              </div>
              <div className="blogCard">
                <img src="blg3.webp" alt="" />
                <p>Latest Food Blogs</p>
                <a href="https://iamafoodblog.com/">Read Blog</a>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="text">
              <h3>About Us</h3>
            </div>
            <div className="text">
              <h3>Our Food</h3>
              <p>Quality</p>
              <p>Affordable</p>
              <p>Best Price</p>
              <p>Low Cost</p>
            </div>
            <div className="text">
              <h3>Offers</h3>
              <p>20% OFF</p>
              <p>Free 1st meal</p>
              <p>quality</p>
              <p>Affordable</p>
            </div>
            <div className="text">
              <h3>Connect Us</h3>
              <p>Linked In</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    );
  

    </div>
  )
}

export default Home
