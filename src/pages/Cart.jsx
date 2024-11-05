import './styles.css'
import Navbar from '../components/Navbar'
import CartProduct from '../components/CartProduct'
import Footer from '../components/Footer'
import RightCart from '../components/RightCart'

const Cart = () => {
  return (
    <div className='itemsInCart'>
        <Navbar />
        <div className="cartBody">
          <CartProduct />
          <RightCart />
        </div>        
        <Footer />
    </div>
  )
}

export default Cart
