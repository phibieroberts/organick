import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Subscribe from './components/Subscribe';
import Shop from "./pages/Shop"
function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
<Route path='/about' element={<AboutPage />}/>
<Route path='/shop' element={<Shop />}/>
    </Routes>
    <Subscribe />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
