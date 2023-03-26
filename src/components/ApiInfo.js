import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import axios from "axios";


const ApiInfo = () => {
  const [displayedPics, setDisplayedPics] = useState([]);
  // error handling here
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
      // taking the pic number and making an array with the total number of indexes that equals the pic number if picnumber = 4 == array [0, 1, 2, 3]
      const numbersArray = Array.from(Array(Number(picNumber)).keys());
      // taking the numbers array and for each value in the index we are getting a random number between 0-total length -1 and returning that random number
      const randomIndexes = numbersArray.map(() => {
        const randomIndex = Math.floor(Math.random() * galleryPics.length - 1);
        return randomIndex;
      });
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
