const Pic = (props) => {
  return (
    <li className={`photo-container ${props.className}`}>
      <figure>
        <img src={props.photoUrl} alt={props.altText} />
      </figure>
    </li>
  );
};

export default Pic;
