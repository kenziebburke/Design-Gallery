import refresh from "../assets/refresh.png"

const Pic = (props) => {
  return (
    <li className={`photo-container ${props.className}`}>
      <figure>
        <img src={props.photoUrl} alt={props.altText} />
      </figure>
      <button className="refresh" onClick={()=>{props.userRequestsImageChange(props.indexNumber)}}
        >
        <img src={refresh} alt="" />
      </button>
    </li>
  );
};

export default Pic;
