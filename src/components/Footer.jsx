import './style.css';
import bank from '../assets/bank.jpeg';
import master from '../assets/master.png';
import paypal from '../assets/paypal.png';
import skrill from '../assets/skrill.png';
import visa from '../assets/visa.jpeg';

const Footer = () => {
  return (
    <footer class="footerDiv">
        <div class="top">
            <div class="topLeft">
                <p>Information</p>
                <ul>
                    <li>Shop Pay</li>
                    <li>Help Center</li>
                    <li>For Brands</li>
                </ul>
            </div>
            <div class="topCenter">
                <p>Social</p>
                <ul>
                    <li>Facebook</li>
                    <li>X (Twitter)</li>
                    <li>Instagram</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div class="topRight">
                <p>Legal</p>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Data Privacy</li> 
                </ul>                
            </div>
        </div>
        <div class="bottom">
            <h3>We Accept</h3>
            <img src={bank} />
            <img src={master} />
            <img src={visa} />
            <img src={paypal} />
            <img src={skrill} />            
        </div>         
    </footer>       
  )
}

export default Footer
