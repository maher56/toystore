import React from "react";
const adImageStyle = {
    position: 'fixed',
    top: 200,
    left: 10,
    width: '200px',
    height: '300px',
    objectFit: 'cover',
    zIndex: 9999,
    border: '5px solid #4654ff',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };
import imag from "../images/Ad.jpg"
function AddCard(props) {
    return (
        <img src={imag} alt="Google ad" style={adImageStyle} />
    );}

export default AddCard;