import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handleAddtoCart}=props
    const {name,img,seller,price,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller:<small> {seller} </small> </p>
                <p>Rating:<small> {ratings} Stars </small> </p>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                
            </button>
        </div>
    );
};

export default Product;