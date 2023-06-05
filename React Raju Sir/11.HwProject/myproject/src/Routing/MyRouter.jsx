import React from "react";
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Header from '../Components/Common/Header';
import Home from '../Pages/Home'
import Footer from "../Components/Common/Footer";
import ContactUs from "../Pages/Contact";
import Product from "../Pages/Products";
import Test from "../Pages/Testimonial";
import BlogArticle from "../Pages/BlogArticle";
import AboutUs from "../Pages/About";
import Stores from "../Pages/Store";
import Feature from "../Pages/Features";
import Error404 from "../Pages/Error404";


const MyRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonial" element={<Test />} />
          <Route path="/blog" element={<BlogArticle />} />
          <Route path="/store" element={<Stores />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MyRouter;
