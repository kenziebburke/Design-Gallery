import {useState, useEffect} from "react";
import axios from "axios";
import Form from './Form'
import Gallery from './Gallery'

const ApiInfo = () => {

    const [picColor, setPicColor ] = useState('NU2mT-5c8_4');
    const [picNumber, setPicNumber] = useState(null);
    const [ galleryPics, setGalleryPics ] = useState([]);

    // error handling here 
        // bonus also call useState to initialize state to track whether the asyncronous API call was sucessful AKA was the promise rejected or fulfilled 
        // if it was rejected we need to show the user an error 

    useEffect(() => {
        if(picNumber !== null){
            axios({
                url: `https://api.unsplash.com/collections/${picColor}/photos`, 
                params: {
                    per_page: picNumber,
                    client_id:  '0R-BwJbX2U3_rYCsZ73Z3AGoMIPcM4MatxTtGbulFeA',
                },
            }).then((apiData) => {
                setGalleryPics(apiData.data);
            })
        }
    }, [picColor, picNumber])

    
    const userSelection = (event, selectedOne, selectedTwo) => {
        event.preventDefault();
        setPicColor(selectedOne) 
        setPicNumber(selectedTwo)
    }

    return(
        <main>
            <Form handleSubmit={userSelection}/>
            <Gallery currentGallery={galleryPics}/>
        </main>
    )
}

export default ApiInfo;