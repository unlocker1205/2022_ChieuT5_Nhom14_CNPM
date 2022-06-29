import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Tutorial from "./page/tutorial";
import HomePage from "./page/home-page";
import AboutUs from "./page/about-us";
import ProductPage from "./page/product-page";
import Cart from "./page/cart";
import Header from "./component/Header";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
