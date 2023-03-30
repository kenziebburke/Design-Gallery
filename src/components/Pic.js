
const Pic = (props) => {
  return (
    <li className={`photo-container ${props.className}`}>
      {/*  on click adding an anonomus func to excute the reference to the function called in apiinfo after the component has loaded and waits for the on click, at which pont it take the indexnumer and puts it in the function where it will be effectively swapped*/}
      <button onClick={()=>{props.userRequestsImageChange(props.indexNumber)}}
        >change pic</button>
      <figure>
        <img src={props.photoUrl} alt={props.altText} />
      </figure>
    </li>
  );
};

export default Pic;
