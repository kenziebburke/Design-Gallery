import star from "../assets/star.svg";
import { Link } from "react-router-dom";
import { useApi } from "./ApiInfo.js";

const LandingPage = () => {
  const { handleHomeReload } = useApi();
  return (
    <section className="landingPage">
      <div className="wrapper">
        <h1>Design made easy.</h1>
        <div className="headerBottom flexContainer">
          <div className="left">
            <p>
              Hey there, welcome to the Design Gallery! The perfect solution for
              anyone who wants to create a <strong>stunning</strong> wall art
              display without the hassle.
            </p>
            <p>
              Get started today and create a gallery wall that'll make your
              friends and family envious!
            </p>
          </div>
          <div className="right">
            <figure>
              <img
                src={star}
                alt="Icon of a simple for sided star, similar to a diamond but with the sides curving in."
              />
            </figure>
            <Link to="/next" onClick={handleHomeReload}>
                <div className="linkToForm">
                    <span className="s">S</span><span className="t">T</span><span className="a">A</span><span className="r">R</span><span className="t">T</span> <span className="g">G</span><span className="a">A</span><span className="l">L</span><span className="ll">L</span><span className="e">E</span><span className="r">R</span><span className="y">Y</span>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
