import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import OfferBanner from './components/OfferBanner';
import About from './components/About';
import OurProducts from './components/OurProducts';
import TestimonialOffer from './components/TestimonialOffer';
import OfferProduct from './components/OfferProduct';
import Ecofriendly from './components/Ecofriendly';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import ReducerSample from "./components/ReducerSample"
function App() {
  return (
    <div className="App">
    <Header />
    <Intro /> 
     <OfferBanner />
    <About />
    <OurProducts />
    <TestimonialOffer />
    <OfferProduct />
    <Ecofriendly />
    <Gallery />
    <Blog />
    <Subscribe />
    <Footer />
    {/* <ReducerSample /> */}
    </div>
  );
}

export default App;
