import './index.scss'
import ApiInfo from './components/ApiInfo';
import top from './assets/top.jpg'
import middle from './assets/middle.jpg'


function App() {
  return (
    <div className="App">
      <header>
        <div className="flexContainer headerTop">
            <div className="design">
            <h1>Design</h1>
            </div>
            <figure>
              <img src={top} alt="" />
            </figure>
        </div>
        <div className="flexContainer headerMiddle">
          <figure>
            <img src={middle} alt="" />
          </figure>
          <div className="made">
            <h2>Made</h2>
          </div>
        </div>
        <div className="headerBottom">
          <div className="easy">
            <h2>Easy</h2>
          </div>
        </div>
      </header>
      <ApiInfo />
    </div>
  );
}

export default App