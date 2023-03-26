import Pic from "./Pic.js";

const Gallery = (props) => {
  if (props.currentGallery.length < 0 || props.currentGallery === undefined) {
    return null;
  }

  return (
    <section className="gallery">
      <div className="wrapper">
        <ul className="galleryUl flexContainer">
          {props.currentGallery.map((pic) => {
            return (
              <Pic
                key={pic.id}
                photoUrl={pic.urls.regular}
                altText={pic.alt_description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
