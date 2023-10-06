/* eslint-disable react/prop-types */
import "./MenuStyles.css";
function Menu({ menuItems }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 menuText">
            <h2>Explore Our Foods</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>
        <div className="row menuItems">{menuItems}</div>
      </div>
    </>
  );
}

export default Menu;
