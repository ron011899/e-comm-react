import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const Product = (props) => {
    const {id, productName, productPrice, productImg} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImg} alt=''/>
        <div className='description'>
            <p><strong>{productName}</strong></p>
            <p>${productPrice}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
     
    </div>
  )
}
