import Pic from "./Pic.js";
import { useState } from "react";

const Gallery = (props) => {


  if (props.currentGallery.length <= 0 || props.currentGallery === undefined) {
    return (
      <section className="gallery">
        <div className="emptyGallery">
          <p>Your gallery awaits.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery">
      <div className="wrapper">
        <ul
          className={`galleryUl flexContainer gallery${props.currentGallery.length}`}
        >
          {props.currentGallery.map((pic, i) => {
            return (
              <Pic
                key={pic.id}
                photoUrl={pic.urls.regular}
                altText={pic.alt_description}
                className={`pic${i + 1}`}
                // passing down the reference of the function in the api call to the pic so that we can recieve the proper img index to change on click
                userRequestsImageChange={props.userRequestsImageChange}
                indexNumber={i}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
