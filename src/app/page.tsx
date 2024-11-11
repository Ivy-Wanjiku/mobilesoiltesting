
import React from 'react';
import Footer from './Footer';
import Product from "./Product"
import About from "./About";
import Team from "./Team";

import Navbar from './Navbar';
import Homepage from './Homepage';
import Podcast from './WhyUs';
import GallerySection from './Gallery';
import SignUp from './Form';


export default function Home(){
  return(
    <main>
      <Navbar/>
      <Homepage/>
      <About/>
      <Podcast/>
   
      <GallerySection/>
    <Product/>
    <Team/>
    <SignUp/>
    <Footer/> 

    </main>
  )
}
