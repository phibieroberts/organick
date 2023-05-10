import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Subscribe from './components/Subscribe';
import Shoppage from "./pages/Shoppage"
import ShopSingle from './components/shoppage/ShopSingle';
import Contact from './components/contactpage/Contact';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
<Route path='/about' element={<AboutPage />}/>
<Route path='/shop' element={<Shoppage />}/>
<Route path='/shop/:shopId' element={<ShopSingle/>}/>
<Route path='/contact' element={<Contact/>}/>

    </Routes>
    {/* <Subscribe /> */}
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
