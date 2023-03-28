import { useState } from "react";
import Form from "./Form";
import Gallery from "./Gallery";
import axios from "axios";


const ApiInfo = () => {
  const [displayedPics, setDisplayedPics] = useState([]);

  const getRandomGalleryPic = (picNumber, picColor = "NU2mT-5c8_4") => {
    axios({
      url: `https://api.unsplash.com/collections/${picColor}/photos`,
      params: {
        per_page: 50,
        client_id: process.env.REACT_APP_API_KEY
      },
    }).then((apiData) => {
      const galleryPics = apiData.data;

    const randomInteger = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };
    
    const randomIndexes = [];
    
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


  return (
    <main>
      <Form handleSubmit={userSelection} />
      <Gallery currentGallery={displayedPics} />
    </main>
  );
};

export default ApiInfo;
