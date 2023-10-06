/* eslint-disable react/prop-types */
import "./HeaderStyles.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6 heading">
            <h1>Good food choices are good investments.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>

            <button className="order">Order Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
