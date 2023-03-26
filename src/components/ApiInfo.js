import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import axios from "axios";


const ApiInfo = () => {
  const [displayedPics, setDisplayedPics] = useState([]);
  // ERROR HANDLE
  // bonus also call useState to initialize state to track whether the asyncronous API call was sucessful AKA was the promise rejected or fulfilled
  // if it was rejected we need to show the user an error
//   stop two of the same photos from being able to be displayed as it will mess up the key situation
  const getRandomGalleryPic = (picNumber, picColor = "NU2mT-5c8_4") => {
    axios({
      url: `https://api.unsplash.com/collections/${picColor}/photos`,
      params: {
        per_page: 50,
        client_id: "0R-BwJbX2U3_rYCsZ73Z3AGoMIPcM4MatxTtGbulFeA",
      },
    }).then((apiData) => {
      const galleryPics = apiData.data;

    // VERSION ONE!!!!!
      // taking the pic number and making an array with the total number of indexes that equals the pic number if picnumber = 4 == array [0, 1, 2, 3]
    //   the keys method when invoked on an object returns an array containing all of the objects keys and none of its values 
    //   const numbersArray = Array.from(Array(Number(picNumber)).keys());
    //   // taking the numbers array and for each value in the index we are getting a random number between 0-total length -1 and returning that random number
    //   const randomIndexes = numbersArray.map(() => {
    //     const randomIndex = Math.floor(Math.random() * galleryPics.length - 1);
    //     return randomIndex;
    //   });


// setting a variable with a function that completes the randomizer, adding in the parameter of "num" wich represents out limit aka gallerypicc.legth (the entire info from the api call)
    const randIntBetween0And = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };
    
    // empty array to push info to 
    const randomIndexes = [];
    
    // for loop that loops the picnumber ex user selects 4 it iterates 0 1 2 3 then exits the loop 
    for (let i = 0; i < Number(picNumber); i++) {
        // setting a variable to to hold the random number 
        let random_number = randIntBetween0And(galleryPics.length - 1);
        // check if random indexes contains the same random number we just generated
        while (randomIndexes.includes(random_number)) {
            // reroll the dice generate a new number until it is unique at which point the while loop is exited because its conditons is no longer met 
            random_number = randIntBetween0And(galleryPics.length - 1);
        }
        // putting the indexes into the array 
        randomIndexes.push(random_number);
    }

      // mapping through the randomindex array and at each index of the randomgallerypics array we are assigning the gallerypic object at that index value
      const randomGalleryPics = randomIndexes.map((index) => {
        return galleryPics[index];
      });
    //   console.log(randomGalleryPics);
      setDisplayedPics(randomGalleryPics)
    });
  };

  const userSelection = (event, selectedOne, selectedTwo) => {
    event.preventDefault();
    getRandomGalleryPic(selectedTwo, selectedOne);
  };

console.log(displayedPics)

  return (
    <main>
      <Form handleSubmit={userSelection} />
      <Gallery currentGallery={displayedPics} />
    </main>
  );
};

export default ApiInfo;
