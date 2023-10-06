import "./BottomSectionStyles.css";

function BottomSection() {
  return (
    <div className="container bottom-section">
      <div className="row">
        <div className="col">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <h3>~ Is Foodera Bread really baked fresh each day?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="row">
            <h3>~ Can I order your products online?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <h3>~ Do you bake breads containing animal fats or products?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
          <div className="row">
            <h3>~ When are you opening a shop near me?</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language.
            </p>
          </div>
        </div>
      </div>
      <div className="row baked">
        <div className="col">
          <h3>Baked fresh daily by bakers with passion.</h3>
          <button>Learn More</button>
        </div>
      </div>
      <div className="row subscribe-section">
        <div className="col">
          <h3>Hurry up! Subscribe our newsletter and get 25% Off</h3>
          <p>Limited time offer for this month. No credit card required.</p>
          <input type="text" name="email" placeholder="Email Address here" />
          <span>
            <button>Subscribe</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
