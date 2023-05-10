import React, {useRef} from "react";
import "./ShopSingle.css";
import { Link, useParams } from "react-router-dom";
import arrowRight from "../../images/arrowright.svg"
import { products } from "../../products";
import Product from "../Product";

function ShopSingle() {
  const { shopId } = useParams();
  const singleProduct = products.find(
    (product) => product.id === parseInt(shopId)
  );
// to display random products in the related product section
  const randomProducts=[];
  //filtering to remove the clicked product from the related items
  const filtered=products.filter((product)=>product.id !== parseInt(shopId))
  while(randomProducts.length < 4){
    const randomIndex=Math.floor(Math.random()* filtered.length)
    const randomProduct=filtered[randomIndex]
    if(!randomProducts.includes(randomProduct)){
      randomProducts.push(randomProduct)
    }
}
//to scroll back to the details page once i click on the product in the related products section
const shopDetailsRef=useRef(null)
const handleRelatedProductClick=(product)=>{
  shopDetailsRef.current.scrollIntoView({behavior:'smooth'});
  
  }
  return (
    <section id="shopSingle">
      <div className="shop-banner">
        <h1>Shop Single</h1>
      </div>
      <div className="single_shop" ref={shopDetailsRef}>
        <div className="left">
          <img src={singleProduct.imgUrl} alt="product" />
          <div className="category">{singleProduct.category}</div>
        </div>
        <div className="right">
          <h2>{singleProduct.name}</h2><br></br>
          <div className="stars">
            <img src={singleProduct.star} alt="" />
            <img src={singleProduct.star} alt="" />
            <img src={singleProduct.star} alt="" />
            <img src={singleProduct.star} alt="" />
            <img src={singleProduct.star} alt="" />
          </div>
          <p>${singleProduct.slashPrice}.00 <span>
            $<b>{singleProduct.price}.00</b>
          </span></p>
          
          <p className="description">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="form">
            <div>
            <label htmlFor="Quantity">Quantity: </label>
            <input type="number" id="quantity" />
            </div>
            <button className="atc">Add to Cart <img src={arrowRight} alt="" /></button>
          </div>
        </div>
      </div>

      <div id="description">
<div className="description-cta">
       <button className="prod-decription">Product Information</button>
       <button className="add-info">Additional Information</button>
       </div>
<p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. 
  We have grown on the principles of health, ecology, and care. We aim to give our customers a 
  healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. 
  Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
      </div>
<div className="related">
  <h1>Related Products</h1>
  
      <div className="products-container">
{randomProducts.map((item)=>{
  return(
    <Link to={`/shop/${item.id}`} onClick={()=>handleRelatedProductClick(item)}><Product item={item} key={item.id} /></Link>
  )
  // if(item.id>=1 && item.id<=4){
    
  // }
})}
      </div>
      </div>
    </section>
  );
}

export default ShopSingle;
