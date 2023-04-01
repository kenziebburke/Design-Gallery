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
  const [showGallery, setShowGallery] = useState(false);

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
      showGallery(true)
      console.log(selectedTwo, selectedOne)
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

  const errorUserSelection = () => {
    if (displayedPics !== null || displayedPics !== undefined){
      userSelection((event)=>{
        event.preventDefault();
        return false;
      })
    }
    return(
      <div className="errorUserSelection">
        <p>If you wish to re-enter your preferences please refresh the page and resubmit the form!</p>
      </div>
    )
  }



  // add auto scroll react library npm auto scroll or usereff or add it to the css 
  // refactre the code so that api info 
  // rather than return we 
  
  return (
    <main>
      {showGallery
      ? <Gallery currentGallery={displayedPics} userRequestsImageChange={userRequestsImageChange}/>
      : null
      }
      <Form handleSubmit={userSelection} errorHandleSubmit={errorUserSelection}/>
    </main>
  );
};

export default ApiInfo;
