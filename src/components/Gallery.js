import Pic from "./Pic.js";

const Gallery = (props) => {
  if (props.currentGallery.length < 0 || props.currentGallery === undefined) {
    return (
      <div className="galleryError">
        <p>Whoops! looks like there might have been an issue with the from submission, please make a new selection for a stunning gallery wall display.</p>
      </div>
    )
  }

  return (
    <section className="gallery">
      <div className="wrapper">
      <ul className={`galleryUl flexContainer gallery${props.currentGallery.length}`}>
          {props.currentGallery.map((pic, i) => {
            return (
              <Pic
                key={pic.id}
                photoUrl={pic.urls.regular}
                altText={pic.alt_description}
                className={`pic${i + 1}`}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
