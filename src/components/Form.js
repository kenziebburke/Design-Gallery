import { useState } from "react";

const Form = (props) => {
  const [selectedValueOne, setSelectedValueOne] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");

  const handleSelection = (event) => {
    setSelectedValueOne(event.target.value);
  };

  const handleSelectionTwo = (event) => {
    setSelectedValueTwo(event.target.value);
  };

  // add error handeling here

  return (
    <section className="form">
      <div className="wrapper">
        <form
          onSubmit={(event) => {
            props.handleSubmit(event, selectedValueOne, selectedValueTwo);
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
                <input 
                type="radio" 
                name="color" 
                id="red" 
                value="YW1V-v78Bck" 
                />
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

          <fieldset
            className="numberOfPics"
            value={selectedValueOne}
            onChange={handleSelectionTwo}
          >
            <legend>
              Choose the number of pieces desired for your space.
            </legend>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
