import "./index.scss";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Next from "./components/Next";
import { ApiInfo } from "./components/ApiInfo";
import { Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <ApiInfo>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/next" element={<Next />} />
        </Routes>
      </ApiInfo>
    </div>
  );
}

export default App;