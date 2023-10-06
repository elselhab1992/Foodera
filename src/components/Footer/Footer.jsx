import "./FooterStyles.css";
import facebook from "./../../assets/images/facebook.png";
import twitter from "./../../assets/images/twitter.png";
import instagram from "./../../assets/images/insta.avif";
import youtube from "./../../assets/images/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <ul className="footer-links">
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="row social-media">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </div>
            <div className="row">
              <p>© 2021. Foodera. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
