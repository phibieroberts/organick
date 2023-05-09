import React from 'react'
import "./Shop.css"
import Product from '../Product'
import { products } from '../../products'
import { Link } from 'react-router-dom'

function Shop() {
   return (
    <section id='shop'>
        <div className="shop-banner">
          <h1>Shop</h1>
        </div>
        <div className="products-container">
        {products.map((item)=>{
          return (
            <Link to={`/shop/${item.id}`}>
            <Product item={item} />
            </Link>
          )
        })}
      </div>    
      </section>
  )
}

export default Shop