import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {

    const {cartItems, addToCart, removeFromCart, updateCartItems} = useContext(ShopContext)

    const {id, productName, productPrice, productImg} = props.data

  return (
    <div className='cartItem'>
        <img src={productImg} alt=' '/>
        <div className='description'>
            <p><strong>{productName}</strong></p>
            <p>${productPrice}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input type='number' value={cartItems[id]} onChange={({target}) => updateCartItems(target.value, id) }/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>

        </div>
    </div>
  )
}
