const Pic = (props) => {
  return (
    <li className={`photo-container ${props.className}`}>
      <img src={props.photoUrl} alt={props.altText} />
    </li>
  );
};

export default Pic;
