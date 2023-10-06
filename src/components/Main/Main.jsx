import "./MainStyles.css";
import Header from "./Header";
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import BottomSection from "../BottomSection/BottomSection";
import MenuItems from "../../MenuItems";
import salad from "./../../assets/images/salad.png";
import tick from "./../../assets/images/mark.jpg";
import sideImg from "./../../assets/images/image.png";

function Main() {
  const menuItems = MenuItems.map((item) => {
    return (
      <>
        <div className="col-md-4">
          <img src={item.image} />
          <div className="menuInfo">
            <h5>{item.title}</h5>
            <p>{item.time}</p>
            <h6>{item.price}</h6>
            <button>Order Now</button>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <Header />
      <main>
        <section className="firstSection">
          <div className="container">
            <div className="row ">
              <div className="col-3 items">
                <h2>1287+</h2>
                <p>SAVINGS</p>
              </div>
              <div className="col-3 items">
                <h2>5786+</h2>
                <p>PHOTOS</p>
              </div>
              <div className="col-3 items">
                <h2>1440+</h2>
                <p>ROCKETS</p>
              </div>
              <div className="col-3 items">
                <h2>7110+</h2>
                <p>GLOBES</p>
              </div>
            </div>
          </div>
        </section>
        <section className="secondSection">
          <div className="container">
            <div className="row">
              <div className="col">
                <img className="salad-img" src={salad} alt="salad" />
              </div>
              <div className="col side-text">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="lastSection">
          <div className="container">
            <div className="row">
              <div className="col-md-6 left-section">
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>

                <div className="list">
                  <p>
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    Etiam sed dolor ac diam volutpat.
                  </p>
                  <p>
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    Erat volutpat aliquet imperdiet.
                  </p>
                  <p>
                    <span>
                      <img src={tick} alt="tick" />
                    </span>
                    purus a odio finibus bibendum.
                  </p>
                </div>
                <button>Learn More</button>
              </div>
              <div className="col-md-6">
                <img className="sideImg" src={sideImg} alt="food" />
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-9 bottom-text">
                <h2>
                  When a man stomach is full it makes no difference whether he
                  is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Menu menuItems={menuItems} />
        <Slider />
        <BottomSection />
      </main>
    </>
  );
}

export default Main;
