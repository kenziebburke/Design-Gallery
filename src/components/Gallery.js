import Pic from "./Pic.js";

const Gallery = (props) => {
  if (props.currentGallery.length < 0 || props.currentGallery === undefined) {
    return null;
  }

  return (
    <section className="gallery">
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
    </section>
  );
};

export default Gallery;
