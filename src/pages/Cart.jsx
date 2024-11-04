import './styles.css';
import Navbar from '../components/Navbar';
import CartProduct from '../components/CartProduct';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <div className='cart'>
        <Navbar />
        <CartProduct />
        <Footer />
    </div>
  )
}

export default Cart
