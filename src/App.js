import "./index.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import ApiInfo from "./components/ApiInfo";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Error from "./components/Error";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div className="wrapper appTop">
        <Link to="/" className="logo">
            <span className="designLogo">Design</span> <span>Gallery</span>
        </Link>
      </div>

      <Routes>
        {/* aka landing page w/form*/}
        <Route path="/" element={<Home/>}/>
        {/* route to api info */}
        {/* <Route path="/Info" element={<ApiInfo/>}> */}
          {/* <Route path="/form" element={<Form/>}/>
          <Route path="/gallery" element={<Gallery/>}/>  */}
        {/* </Route> */}
        {/* route to error pages */}
        <Route path="*" element={<Error/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
