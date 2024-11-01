import './style.css';

const Footer = () => {
  return (
    <footer class="footer-div">
        <div class="top">
            <div class="top-left">
                <p>Information</p>
                <ul>
                    <li>Shop Pay</li>
                    <li>Help Center</li>
                    <li>For Brands</li>
                </ul>
            </div>
            <div class="top-center">
                <p>Social</p>
                <ul>
                    <li>Facebook</li>
                    <li>X (Twitter)</li>
                    <li>Instagram</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div class="top-right">
                <p>Legal</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Data Privacy</p> 
            </div>
        </div>
        <div class="bottom">
            <h3>We Accept</h3>
            <img src="./images/bank.jpeg" />
            <img src="./images/master.png" />
            <img src="./images/visa.jpeg" />
            <img src="./images/paypal.png" />
            <img src="./images/skrill.png" />            
        </div>         
    </footer>       
  )
}

export default Footer
