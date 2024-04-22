import React from 'react'

const addtocart=()=> {
    
    // function addToCart(element) {
    //     var productParent = $(element).closest('div.product-item');
    
    //     var price = $(productParent).find('.price span').text();
    //     var productName = $(productParent).find('.productname').text();
    //     var quantity = $(productParent).find('.product-quantity').val();
    
    //     var cartItem = {
    //         productName: productName,
    //         price: price,
    //         quantity: quantity
    //     };
    //     var cartItemJSON = JSON.stringify(cartItem);
    
    //     var cartArray = new Array();
    //     // If javascript shopping cart session is not empty
    //     if (sessionStorage.getItem('shopping-cart')) {
    //         cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
    //     }
    //     cartArray.push(cartItemJSON);
    
    //     var cartJSON = JSON.stringify(cartArray);
    //     sessionStorage.setItem('shopping-cart', cartJSON);
    //     showCartTable();
    // }
    return (
      <div className='flex flex-col addtocart'>
      
           <ul className='flex flex-col gap-4'>
            <li>add</li>
            <li>hgg</li>
           </ul>
      </div>
    )
  }
export default addtocart
