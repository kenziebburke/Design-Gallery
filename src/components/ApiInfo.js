import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import axios from "axios";


const ApiInfo = () => {
  const [displayedPics, setDisplayedPics] = useState([]);
  // ERROR HANDLE
  // bonus also call useState to initialize state to track whether the asyncronous API call was sucessful AKA was the promise rejected or fulfilled
  // if it was rejected we need to show the user an error

  const getRandomGalleryPic = (picNumber, picColor = "NU2mT-5c8_4") => {
    axios({
      url: `https://api.unsplash.com/collections/${picColor}/photos`,
      params: {
        per_page: 50,
        client_id: "0R-BwJbX2U3_rYCsZ73Z3AGoMIPcM4MatxTtGbulFeA",
      },
    }).then((apiData) => {
      const galleryPics = apiData.data;


// setting a variable with a function that completes the randomizer, adding in the parameter of "num" which represents our limit aka galleryPic.length (the entire info from the api call)
    const randomInteger = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };
    
    const randomIndexes = [];
    
    for (let i = 0; i < Number(picNumber); i++) {
        // setting a variable to to hold the random number 
        let randomNumber = randomInteger(galleryPics.length - 1);
        // check if random indexes contains the same random number we just generated
        while (randomIndexes.includes(randomNumber)) {
            // reroll the dice generate a new number until it is unique at which point the while loop is exited because its conditions is no longer met 
            randomNumber = randomInteger(galleryPics.length - 1);
        }
        // putting the indexes into the array 
        randomIndexes.push(randomNumber);
    }

      // mapping through the randomIndex array and at each index of the randomGalleryPics array we are assigning the galleryPic object at that index value
      const randomGalleryPics = randomIndexes.map((index) => {
        return galleryPics[index];
      });
      setDisplayedPics(randomGalleryPics)
    });
  };

  const userSelection = (event, selectedOne, selectedTwo) => {
      getRandomGalleryPic(selectedTwo, selectedOne);
  };


  return (
    <main>
      <Form handleSubmit={userSelection} />
      <Gallery currentGallery={displayedPics} />
    </main>
  );
};

export default ApiInfo;
