import './style.css';
import bank from '../assets/bank.jpeg';
import master from '../assets/master.jpeg';
import paypal from '../assets/paypal.jpeg';
import skrill from '../assets/skrill.jpeg';
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
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Data Privacy</p> 
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
