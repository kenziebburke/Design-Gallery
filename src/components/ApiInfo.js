import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import axios from "axios";

const randomIndexes = [];

const randomInteger = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

const ApiInfo = () => {
  const [displayedPics, setDisplayedPics] = useState([]);
  const [userPicChange, setUserPicChange] = useState([]);

  const getRandomGalleryPic = (picNumber, picColor = "NU2mT-5c8_4") => {
    axios({
      url: `https://api.unsplash.com/collections/${picColor}/photos`,
      params: {
        per_page: 50,
        client_id: process.env.REACT_APP_API_KEY
      },
    }).then((apiData) => {
      const galleryPics = apiData.data;
      setUserPicChange(galleryPics)
    
    for (let i = 0; i < Number(picNumber); i++) {
        let randomNumber = randomInteger(galleryPics.length - 1);
        while (randomIndexes.includes(randomNumber)) {
            randomNumber = randomInteger(galleryPics.length - 1);
        } 
        randomIndexes.push(randomNumber);
    }
      const randomGalleryPics = randomIndexes.map((index) => {
        return galleryPics[index];
      });
      setDisplayedPics(randomGalleryPics)
    })
  };

  const userSelection = (event, selectedOne, selectedTwo) => {
      getRandomGalleryPic(selectedTwo, selectedOne);
  };


  // define this function give it a parameter called index
  const userRequestsImageChange = (indexToChange) => {
    let randomNumber = randomInteger(userPicChange.length - 1);
    while (randomIndexes.includes(randomNumber)) {
        randomNumber = randomInteger(userPicChange.length - 1);
    } 
    randomIndexes[indexToChange] = randomNumber;  
    const randomGalleryPics = randomIndexes.map((index) => {
      return userPicChange[index];
    });
    setDisplayedPics(randomGalleryPics)
  }
  
  return (
    <main>
      <Form handleSubmit={userSelection} />
      {/* pass the user request function down so the child can reference and run the function, data that travels in one direction is easier to follow */}
      <Gallery currentGallery={displayedPics} userRequestsImageChange={userRequestsImageChange}/>
    </main>
  );
};

export default ApiInfo;
