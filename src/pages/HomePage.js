import React from 'react'
import Intro from '../components/Intro'
import OfferBanner from "../components/OfferBanner"
import About from '../components/About'
import OurProducts from '../components/OurProducts'
import TestimonialOffer from '../components/TestimonialOffer'
import OfferProduct from '../components/OfferProduct'
import Ecofriendly from '../components/Ecofriendly'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'

function HomePage() {
  return (
    <>
    <Intro />
     <OfferBanner />
    <About />
    <OurProducts />
    <TestimonialOffer />
    <OfferProduct />
    <Ecofriendly />
    <Gallery />
    <Blog />

    
    </>
  )
}

export default HomePage