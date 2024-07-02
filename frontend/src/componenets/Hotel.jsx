import React from "react";
import "../styles/Hotel.css"; // Ensure the CSS file name is correct

function Hotel({hotel}) {
  return (
    <div className="hotel-container">
    
      <p className="hotel-name"> 
      <a href={hotel.url} target="_blank" rel="noopener noreferrer"> {hotel.name}</a>
     </p>
      <p className="hotel-address">{hotel.address}</p>
      <p className="hotel-rating">Rating: {hotel.rating}</p>
      <p className="hotel-review">Review Count: {hotel.review}</p>
      {/* <p className="hotel-coordinates">Latitude: {hotel.latitude}, Longitude: {hotel.longitude}</p> */}
      {/* <p className="hotel-pincode">Pincode: {hotel.pincode}</p> */}
    </div>
  );
}

export default Hotel;
