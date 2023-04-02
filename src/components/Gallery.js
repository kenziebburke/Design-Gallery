import Pic from "./Pic.js";
import { useApi } from "./ApiInfo.js";


const Gallery = () => {
  const { displayedPics, userRequestsImageChange } = useApi();

  if (displayedPics.length <= 0 || displayedPics === undefined) {
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
          className={`galleryUl flexContainer gallery${displayedPics.length}`}
        >
          {displayedPics.map((pic, i) => {
            return (
              <Pic
                key={pic.id}
                photoUrl={pic.urls.regular}
                altText={pic.alt_description}
                className={`pic${i + 1}`}
                userRequestsImageChange={userRequestsImageChange}
                indexNumber={i}
              />
            );
          })}
        </ul>
      </div>
      {/* here you can put some kind of a button to go back home! I'd suggest adding a complete window hard refresh function here in case something errors out so users can get a fresh start */}
    </section>
  );
};

export default Gallery;