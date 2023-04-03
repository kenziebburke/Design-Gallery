import { createContext, useContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

let randomIndexes = [];

const randomInteger = function (num) {
  return Math.floor(Math.random() * num) + 1;
};


export function ApiInfo({ children }) {

  const [displayedPics, setDisplayedPics] = useState([]);
  const [userPicChange, setUserPicChange] = useState([]);

  const [showGallery, setShowGallery] = useState(false);

  const handleSubmit = (event, selectedOne, selectedTwo) => {
    event.preventDefault();
    getRandomGalleryPic(selectedTwo, selectedOne);
    setShowGallery(true);
  };

  const handleHomeReload = () => {
    randomIndexes = []
    setShowGallery(false);
  }

    const getRandomGalleryPic = (picNumber, picColor = "NU2mT-5c8_4") => {
      axios({
        url: `https://api.unsplash.com/collections/${picColor}/photos`,
        params: {
          per_page: 50,
          client_id: process.env.REACT_APP_API_KEY
        },
      }).then((apiData) => {
        const galleryPics = apiData.data;
        setUserPicChange(galleryPics);

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
        setDisplayedPics(randomGalleryPics);
      });
    };

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
    <ApiContext.Provider
      value={{
        displayedPics,
        handleSubmit,
        userRequestsImageChange,
        showGallery,
        handleHomeReload
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export function useApi() {
  return useContext(ApiContext);
}