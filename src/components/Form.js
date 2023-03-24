import {useState} from 'react';
import desert from '../assets/desert.jpg'
import muted from '../assets/muted.png'
import green from '../assets/green.jpg'
import yellow from '../assets/yellow.jpg'
// import red from '../assets/red.jpg'

const Form = (props) => {
    const [selectedValueOne, setSelectedValueOne] = useState('');
    const [selectedValueTwo, setSelectedValueTwo] = useState('');


    const handleSelection = (event) => {
        setSelectedValueOne(event.target.value);
    }   

    const handleSelectionTwo = (event) => {
        setSelectedValueTwo(event.target.value);
    }  




    return(
        <section className='Form'>
            <form onSubmit={(event)=>{props.handleSubmit(event, selectedValueOne, selectedValueTwo)}}>
                {/* could have it as radio buttons and style them in a certain way rather than input type img ... or the img could live in the label with sr only class for accessibiliy*/}
                <fieldset className='coloursSelection' name="color" value={selectedValueOne} onChange={handleSelection}>
                    <legend>Choose a colour palette.</legend>

                    <label htmlFor="desert">Desert</label>
                    <input type="radio"  name="color" id='desert' value="NU2mT-5c8_4"/>

                    <label htmlFor="muted">Muted grey</label>
                    <input type="radio" name="color"  id='muted' value="9zgDmRsNiXw"/>

                    <label htmlFor="green">Green</label>
                    <input type="radio" name="color" id='green' value="_u4P24KNSfI"/>

                    <label htmlFor="yellow">Yellow</label>
                    <input type="radio" name="color" id='yellow' value="Vbws0aool7M"/>

                    <label htmlFor="red">Red</label>
                    <input type="radio" name="color" id='red' value="YW1V-v78Bck"/>
                </fieldset>

                <fieldset className='numberOfPics' value={selectedValueOne} onChange={handleSelectionTwo} >
                    <legend>Choose the number of pieces of desired for your space.</legend>

                    <label htmlFor="two">2</label>
                    <input type="radio" name="number" value={2} id='two'/>

                    <label htmlFor="three">3</label>
                    <input type="radio" name="number" value={3} id='three'/>

                    <label htmlFor="four">4</label>
                    <input type="radio" name="number" value={4} id='four'/>

                    <label htmlFor="five">5</label>
                    <input type="radio" name="number" value={5} id='five'/>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Form;