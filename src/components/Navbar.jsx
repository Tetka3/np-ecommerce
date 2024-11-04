import './style.css';
import shop from '../assets/shop.jpeg';
import cart from '../assets/cart.jpeg';

const Navbar = () => {
  return (
    <div class="navbar">
        <div class="logo">
            <img src={shop} />
        </div>
        <div class="search">
            <input type="text" placeholder="Search item here..."/>
            <button>Go</button>
        </div>
        <div class="add">
            <div class="links">
                <ul>
                    <li>My Account</li>
                    <li>Register</li>                     
                    <li>Help </li> 
                </ul>
            </div>
            <div class="cart">
                <img src={cart} />
                <span class="js-quantity">0</span>
            </div>            
        </div>
    </div>
  )
}

export default Navbar;

