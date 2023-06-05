import React from 'react'
import Banner from '../Components/Core/Home/Banner'
import About from '../Components/Core/About/About'
import Product from '../Components/Core/Product/Product'
import Store from '../Components/Core/Store/Store'
import Test from '../Components/Core/Testimonial/Test'
import Contact from '../Components/Core/Contact/Contact'
import Features from '../Components/Core/Features/Feature'
import Article from '../Components/Core/Article/Article'

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Product />
      <Article/>
      <Features/>
      <Store />
      <Test />
      <Contact/>

    </>
  );
}

export default Home