import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <div className="logo">
            <span className="designLogo">Design</span> <span>Gallery</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
