import { useState } from "react";
import cloud from "../assets/cloud.png";

const Form = (props) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");
  const [renderColorError, setRenderColorError] = useState(false);
  const [renderNumberError, setRenderNumberError] = useState(false);

  const handleSelection = (event) => {
    setSelectedValueOne(event.target.value);
  };

  const handleSelectionTwo = (event) => {
    setSelectedValueTwo(event.target.value);
  };

  return (
    <section className="form">
      <div className="wrapper">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!selectedValueOne && !selectedValueTwo) {
              setRenderColorError(true);
              setRenderNumberError(true);
              return;
            }
            if (!selectedValueOne) {
              setRenderColorError(true);
              return;
            }
            if (!selectedValueTwo) {
              setRenderNumberError(true);
              return;
            }
            if(selectedValueOne && selectedValueTwo){
              setRenderColorError(false);
              setRenderNumberError(false);
              props.handleSubmit(event, selectedValueOne, selectedValueTwo);
            }
            if(selectedValueOne && selectedValueTwo){
              props.errorHandleSubmit(event)
            }
          }}
        >
          <fieldset
            className="coloursSelection"
            name="color"
            value={selectedValueOne}
            onChange={handleSelection}
          >
            <legend>Choose a colour palette.</legend>

            <div className="flexContainer">
              <div className="flexContainerGreen">
                <input
                  type="radio"
                  name="color"
                  id="green"
                  value="_u4P24KNSfI"
                />
                <label htmlFor="green">Green</label>
              </div>

              <div className="flexContainerOrange">
                <input
                  type="radio"
                  name="color"
                  id="orange"
                  value="Q5pXkRl7OWY"
                />
                <label htmlFor="orange">Orange</label>
              </div>

              <div className="flexContainerBlue">
                <input
                  type="radio"
                  name="color"
                  id="blue"
                  value="ZWUlJDNL7L8"
                />
                <label htmlFor="blue">Blue</label>
              </div>

              <div className="flexContainerRed">
                <input type="radio" name="color" id="red" value="YW1V-v78Bck" />
                <label htmlFor="red">Red</label>
              </div>

              <div className="flexContainerBeige">
                <input
                  type="radio"
                  name="color"
                  id="beige"
                  value="NU2mT-5c8_4"
                />
                <label htmlFor="beige"> Beige </label>
              </div>
            </div>
          </fieldset>
          {renderColorError && (
            <div className="colorError">
              <p>Please indicate your colour selection.</p>
              <figure>
                <img src={cloud} alt="Outline of a drawing of a cloud" />
              </figure>
            </div>
          )}

          <fieldset
            className="numberOfPics"
            value={selectedValueOne}
            onChange={handleSelectionTwo}
            required={true}
          >
            <legend>Choose the number of pieces desired for your space.</legend>
            <div className="flexContainer">
              <div className="flexContainerTwo">
                <input type="radio" name="number" value={2} id="two" />
                <label htmlFor="two">2</label>
              </div>

              <div className="flexContainerThree">
                <input type="radio" name="number" value={3} id="three" />
                <label htmlFor="three">3</label>
              </div>

              <div className="flexContainerFour">
                <input type="radio" name="number" value={4} id="four" />
                <label htmlFor="four">4</label>
              </div>

              <div className="flexContainerFive">
                <input type="radio" name="number" value={5} id="five" />
                <label htmlFor="five">5</label>
              </div>
            </div>
          </fieldset>
          {renderNumberError && (
            <div className="numberError">
              <p>Please indicate the desired number of pieces to generate</p>
              <figure>
                <img src={cloud} alt="Outline of a drawing of a cloud" />
              </figure>
            </div>
          )}

          <button type="submit">
            <span className="s">S</span> <span className="u">U</span>{" "}
            <span className="b">B</span> <span className="m">M</span>{" "}
            <span className="i">I</span> <span className="t">T</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
