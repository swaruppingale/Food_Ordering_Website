// import React from 'react'
// import Login from './pages/Login'
// import Home  from './pages/Home'



// const App = () => {
//   return (
//     <div>
      
//       <Home/>
//     </div>
//   )
// }

// export default App;

import React from "react";
import "./pages/assets/style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Products from "./Products";
import Review from "./Review";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
