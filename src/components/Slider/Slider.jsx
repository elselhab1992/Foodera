import "./SliderStyles.css";
import Carousel from "react-bootstrap/Carousel";
import firstPic from "./../../assets/images/pic1.jpg";
import secondPic from "./../../assets/images/pic2.jpg";
import thirdPic from "./../../assets/images/pic3.jpg";

function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="row testimonials">
          <div className="col">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img src={firstPic} alt="tom" />
                <Carousel.Caption className="caption">
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum,
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum,
                  </p>
                  <h3>Angela Lachman</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={secondPic} alt="mike" />
                <Carousel.Caption>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                    Nulla vitae elit libero, a pharetra augue mollis interdum,
                  </p>
                  <h3>Andy Web</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={thirdPic} alt="angela" />
                <Carousel.Caption className="caption">
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur, Nulla vitae elit libero, a pharetra augue
                    mollis interdum. Nulla vitae elit libero, a pharetra augue
                  </p>
                  <h3>Anna Nash</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
