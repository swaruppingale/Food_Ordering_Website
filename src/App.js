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

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Menu from './Menu';
import Products from './Products';
import Review from './Review';
import Contact from './Contact';
import Blog from './Blog';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />
        
        {/* Routes for other pages */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Blog/>
              <Menu/>
              <Products/>
              <Contact/>
              <Review/>
              <Footer />
              

            </>
          }
        />
        {/* Add routes for other pages as needed */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
