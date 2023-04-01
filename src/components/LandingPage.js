import star from "../assets/star.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <header>
            <div className="wrapper">
            <h1>Design made easy.</h1>
          <div className="headerBottom flexContainer">
            <div className="left">
              <p>
                Hey there, welcome to the Design Gallery! The perfect solution
                for anyone who wants to create a <strong>stunning</strong> wall
                art display without the hassle.
              </p>
              <p>
                Get started today and create a gallery wall that'll make your
                friends and family envious!
              </p>
            </div>
            <figure>
              <img
                src={star}
                alt="Icon of a simple for sided star, similar to a diamond but with the sides curving in."
              />
            </figure>
            <Link to="/form">head to the form</Link>
          </div>
            </div>
        </header>
    )
}

export default LandingPage;