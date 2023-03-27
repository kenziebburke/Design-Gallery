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
          {/* could have it as radio buttons and style them in a certain way rather than input type img ... or the img could live in the label with sr only class for accessibiliy*/}
          <fieldset
            className="coloursSelection"
            name="color"
            value={selectedValueOne}
            onChange={handleSelection}
          >
            <legend>Choose a colour palette.</legend>

            <div className="flexContainer">
              <div className="flexContainerGreen">
                <label htmlFor="green">Green</label>
                <input
                  type="radio"
                  name="color"
                  id="green"
                  value="_u4P24KNSfI"
                />
              </div>

              <div className="flexContainerOrange">
                <label htmlFor="orange">Orange</label>
                <input
                  type="radio"
                  name="color"
                  id="orange"
                  value="Q5pXkRl7OWY"
                />
              </div>

              <div className="flexContainerBlue">
                <label htmlFor="blue">Blue</label>
                <input
                  type="radio"
                  name="color"
                  id="blue"
                  value="ZWUlJDNL7L8"
                />
              </div>

              <div className="flexContainerRed">
                <label htmlFor="red">Red</label>
                <input 
                type="radio" 
                name="color" 
                id="red" 
                value="YW1V-v78Bck" />
              </div>

              <div className="flexContainerBeige">
                <label htmlFor="beige"> Beige </label>
                <input 
                type="radio" 
                name="color" 
                id="beige" 
                value="NU2mT-5c8_4" />
              </div>
            </div>
          </fieldset>

          <fieldset
            className="numberOfPics"
            value={selectedValueOne}
            onChange={handleSelectionTwo}
          >
            <legend>
              Choose the number of pieces of desired for your space.
            </legend>

            <label htmlFor="two">2</label>
            <input type="radio" name="number" value={2} id="two" />

            <label htmlFor="three">3</label>
            <input type="radio" name="number" value={3} id="three" />

            <label htmlFor="four">4</label>
            <input type="radio" name="number" value={4} id="four" />

            <label htmlFor="five">5</label>
            <input type="radio" name="number" value={5} id="five" />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
