import Pic from "./Pic.js";

const Gallery = (props) => {
  console.log(props.currentGallery.length);
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
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
