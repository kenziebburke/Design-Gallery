import "./index.scss";
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      {/* <>
      <p className="logo">
            <span className="designLogo">Design</span> <span>Gallery</span>
          </p>
      </> */}
      <Footer/>
    </div>
  );
}

export default App;
