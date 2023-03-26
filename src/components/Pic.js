const Pic = (props) => {
  return (
    <li className={`photo-container ${props.className}`}>
      {/* get the photoUrl and altText from parent component */}
      <img src={props.photoUrl} alt={props.altText} />
    </li>
  );
};

export default Pic;
