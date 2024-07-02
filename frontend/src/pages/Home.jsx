
// import { useState, useEffect } from "react";
// import api from "../api";
// import Hotel from "../componenets/Hotel"; // Ensure the path is correct
// import "../styles/Home.css";
// import { SearchBar } from '../componenets/SearchBar';
// import { SearchResultsList } from '../componenets/SearchResultList';
// import Navbar from "../componenets/Navbar";

// function Home() {
//   const [hotels, setHotels] = useState([]);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     // Calls getHotels function
//     getHotels();
//   }, []);

//   const getHotels = () => {
//     // Gets all hotels
//     api
//       .get("/api/hotels/")
//       .then((res) => res.data)
//       .then((data) => {
//         setHotels(data);
//         setResults(data); // Initially, results will be the same as hotels
//         console.log(data);
//       })
//       .catch((err) => alert(err));
//   };

//   return (
//     <div>
//      <Navbar />
     
//      <div className="searchdiv">
//       <div className="search-bar-container">
//         <SearchBar setResults={setResults} data={hotels} />
//         <SearchResultsList results={results} />
//       </div>
//       </div>

//       <div className="displayhotels">
//         <h2>Hotels</h2>
//         {hotels.map((hotel) => (
//           <Hotel hotel={hotel} key={hotel.name} />
//         ))}
//       </div>
     
//     </div>
//   );
// }

// export default Home;
import { useState, useEffect } from "react";
import api from "../api";
import Hotel from "../componenets/Hotel"; // Ensure the path is correct

import { SearchBar } from '../componenets/SearchBar';
import { SearchResultsList } from '../componenets/SearchResultList';
import Navbar from "../componenets/Navbar";

import "../styles/Home.css";

function Home() {
  
  const [results, setResults] = useState([]);

  
  const [hotels, setHotels] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

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

  const getHotels = (pincode = "") => {
    api
      .get("/api/hotels/", {
        params: { pincode },
      })
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
    getHotels(selectedPincode.replace(" ", ""));
  };

  return (
    <div>
      <div>
      <Navbar />
     
           <div className="searchdiv">
           <div className="search-bar-container">
            <SearchBar setResults={setResults} data={hotels} />
             <SearchResultsList results={results} />
          </div>
            </div>
        <h2>Filter by Area</h2>
        <select onChange={handleAreaChange} value={selectedArea}>
          <option value="">Select Area</option>
          {areas.map((area, index) => (
            <option key={index} value={area.pincode}>
              {area.area} 
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Hotels</h2>
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Hotel hotel={hotel} key={hotel.id} />
          ))
        ) : (
          <p>No hotels found for the selected area.</p>
        )}
      </div>
    </div>
  );
}

export default Home;




// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../componenets/Note"
// import "../styles/Home.css"
// import Navbar from "../componenets/Navbar";

// import { SearchBar } from '../componenets/SearchBar';
// import { SearchResultsList } from '../componenets/SearchResultList';


// function Home() {
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");
//   const [results,setResults]= useState([]);

//   useEffect(() =>
//     //callls getNItes function
//     {
//       getNotes();
//     }, []);

//   const getNotes = () => {
//     //gets all notes
//     api
//       .get("/api/notes/")
//       .then((res) => res.data)
//       .then((data) => {
//         setNotes(data);
//         console.log(data);
//       })
//       .catch((err) => alert(err));
//   };
//   const deleteNote = (id) => {
//     api
//       .delete(`/api/notes/delete/${id}/`)
//       .then((res) => {
//         if (res.status === 204) {
//           alert("Note deleted !");
//         } else {
//           alert("Failed to delete ");
//         }
//         getNotes();
//       })
//       .catch((error) => alert(error));
//   };

//   const createNote = (e) => {
//     e.preventDefault();
//     api
//       .post("/api/notes/", { content, title })
//       .then((res) => {
//         if (res.status === 201) {
//           alert("Note created");
//         } else alert("failed to make note");
//         getNotes();
//       })
//       .catch((error) => alert(error));
//   };

//   return (
//     <div>
//     <Navbar />

//     <div className="searchdiv">
//       <div className="search-bar-container">
  
//         <SearchBar setResults={setResults} />
//         <SearchResultsList results={results}  />

//       </div>
//       </div>
      


//       <div>
//         <h2>Notes</h2>
//         {notes.map((note) => (
//           <Note note={note} onDelete={deleteNote} key={note.id}></Note>
//         ))}
//       </div>
//       <h2>Create note</h2>
//       <form onSubmit={createNote}>
//         <label htmlFor="title"> Title: </label>
//         <br />
//         <input
//           type="text"
//           id="title"
//           name="title"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//         />

//         <label htmlFor="content"> Content : </label>
//         <br />
//         <textarea
//           id="content"
//           name="content"
//           required
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         ></textarea>
//         <br />
//         <input type="submit" value="Submit"></input>
//       </form>
//     </div>
//   );
// }
// export default Home;
