import './style.css';

const Navbar = () => {
  return (
    <div class="nav-bar">
        <div class="logo">
            <img src="./images/shop.jpeg" />
        </div>
        <div class="search">
            <input type="text" placeholder="Search item here"/>
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
            <div class="cart"><a href="cart.html">
                <img src="./images/cart.jpeg" />
                <span class="js-quantity">0</span></a>
            </div>            
        </div>
    </div>
  )
}

export default Navbar;

