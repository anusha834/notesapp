import { useState, useEffect } from "react";
import api from "../api";
import Hotel from "../componenets/Hotel"; // Ensure the path is correct

import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { SearchBar } from '../componenets/SearchBar';
import { SearchResultsList } from '../componenets/SearchResultList';
import Navbar from "../componenets/Navbar";

import "../styles/Home.css";


function Home() {
  const [results, setResults] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    getAreas();
    getHotels();
  }, []);

  const getAreas = () => {
    api
      .get("/api/areas/")
      .then((res) => res.data)
      .then((data) => {
        setAreas(data);
      })
      .catch((err) => alert(err));
  };

  const getHotels = (pincode = "", rating = "") => {
    const params = {};
    if (pincode) params.pincode = pincode;
    if (rating) params.rating = rating;

    api
      .get("/api/hotels/", { params })
      .then((res) => res.data)
      .then((data) => {
        setHotels(data);
        console.log("Hotels data:", data); // Debugging statement
      })
      .catch((err) => alert(err));
  };

  const handleAreaChange = (e) => {
    const selectedPincode = e.target.value;
    setSelectedArea(selectedPincode);
    console.log("Selected pincode:", selectedPincode); // Debugging statement
    getHotels(selectedPincode.replace(" ", ""), selectedRating);
  };

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    setSelectedRating(rating);
    console.log("Selected rating:", rating); // Debugging statement
    getHotels(selectedArea.replace(" ", ""), rating);
  };

  return (
    <div className="homecolor">
      <Navbar />

      <div className="filter-container">
        <div className="filter-item">
          <div className="filter-title">
            <MdLocationPin /> Filter by Area
          </div>
          <select className="filter-select" onChange={handleAreaChange} value={selectedArea}>
            <option value="">Select Area</option>
            {areas.map((area, index) => (
              <option key={index} value={area.pincode}>
                {area.area}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <div className="filter-title">
          <FaStar /> Filter by Rating
          </div>
          <select className="filter-select" onChange={handleRatingChange} value={selectedRating}>
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
         
        </div>
        
      </div>

      <div className="hotels-container">
        
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Hotel hotel={hotel} key={hotel.id} />
          ))
        ) : (
          <p className="no-hotels-message">No hotels found for the selected area and rating.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
