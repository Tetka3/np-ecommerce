import './style.css';

const CartProduct = () => {
  return (    
    <div class="productDetails">
        {/* <div class="cartImage">
            <img src="" />
        </div>
        <div class="specifics">
            <p>Black suit</p>
            <p>$20.00</p>
            <p>Quantity: 10</p>
        </div> */}
          <div class="cart-product">
            <div class="left">
                <div class="item">
                    <div><p>Delivery date: Wednesday, March 10</p></div>
                    <div class="product-details">
                        <div class="cart-image">
                            <img src="./images/bag1.jpeg" />
                        </div>
                        <div class="specifics">
                            <p>Black suit</p>
                            <p>$20.00</p>
                            <p>Quantity: 1</p>
                        </div>
                    </div>       
                </div>
                <div class="delivery">
                    <p>Choose a delivery option</p>
                    <div class="delivery-date">
                        <div>
                            <input type="radio" name="order-1"/>
                        </div>
                        <div>
                            <p>Today</p>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <div class="delivery-date">
                        <div>
                            <input type="radio" name="order-1"/>
                        </div>
                        <div>
                            <p>Wednesday</p>
                            <p>$4.99 - shipping</p>
                        </div>
                    </div>
                    <div class="delivery-date">
                        <div>
                            <input type="radio" name="order-1"/>
                        </div>
                        <div>
                            <p>Friday</p>
                            <p>$3.99 - shipping</p>
                        </div>
                    </div>                    
                </div>  
            </div>
          </div>
    </div>  
  )
}

export default CartProduct;
