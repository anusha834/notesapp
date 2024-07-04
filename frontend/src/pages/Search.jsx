import Navbar from "../componenets/Navbar"
import { SearchBar } from '../componenets/SearchBar';
import { SearchResultsList } from '../componenets/SearchResultList';
import { useState,useEffect} from "react";
import api from "../api";
import "../styles/Search.css";
function Search() {
    
const [results, setResults] = useState([]);
  const [h, sh] = useState([]);
 

  useEffect(() => {
 
    gh();
  }, []);

 

  const gh = () => {
    api
      .get("/api/hotels/")
      .then((res) => res.data)
      .then((data) => {
        sh(data);
        console.log("Hotels data:", data); // Debugging statement
      })
      .catch((err) => alert(err));
  };


  return (
    <div >
      <Navbar />
     
        
      <div className="container" >
           <div className="search-bar-container">
            <SearchBar setResults={setResults} data={h} />
             <SearchResultsList results={results} />
          </div>
            </div>
      
    </div>
  );
}

export default Search;
