import Pic from './Pic.js'

const Gallery = (props) => {
return(
    <section className='gallery'>
        <ul className="galleryUl">
            {props.currentGallery.map((pic) => {
                return(
                    <Pic key={pic.id} photoUrl={pic.urls.regular} altText={pic.alt_description}/>
                )
            })}
        </ul>
    </section>
)
}

export default Gallery;