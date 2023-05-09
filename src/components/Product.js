import React from 'react'

function Product({item}) {
  return (
    <>
            <div className="product">
              <img src={item.imgUrl} alt={item.name} />
              <div className="category">
                <div>{item.category}</div>
              </div>
              <div className="other-details">
                <h5 className="name">{item.name}</h5>
                <div className="pricestar">
                  <div className="price">
                    <p className="slash">${item.slashPrice}.00</p>
                    <b>${item.price}.00</b>
                  </div>
                  <div className="stars">
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Product