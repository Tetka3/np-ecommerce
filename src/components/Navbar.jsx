import './style.css';
import shop from '../assets/shop.jpeg';
import cart from '../assets/cart.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div class="navbar">
        <div class="logo">
            <img src={shop} onClick={() => navigate('/np-ecommerce')}/>
        </div>
        <div class="search">
            <input type="text" placeholder="Search item here..."/>
            <button>Go</button>
        </div>
        <div class="add">
            <div class="links">
                <ul>
                    <Link to={'/np-ecommerce/login'} style={{textDecoration: 'none'}}><li>My Account</li></Link>
                    <Link to={'/np-ecommerce/login'} style={{textDecoration: 'none'}}><li>Register</li></Link>                     
                    <Link to={'/np-ecommerce/login'} style={{textDecoration: 'none'}}><li>Help </li></Link> 
                </ul>
            </div>
            <div class="cart">
                <img src={cart} onClick={() => navigate('/np-ecommerce/cart')} />
                <span class="js-quantity">0</span>
            </div>            
        </div>
    </div>
  )
}

export default Navbar;

