import Navbar from "../componenets/Navbar"
import "../styles/About.css";

function About() {
  return (
    <div >
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <img className="image" src="https://img.freepik.com/free-vector/flat-hotel-booking-application-background_23-2148156543.jpg?t=st=1720003979~exp=1720007579~hmac=0866ae794a9f49ff6b2f944a364a5870a5ff49cb89f6481a85680d997183cac2&w=740"
   ></img>

        <h3>Welcome to Hotel Finder!</h3>
        <p>Hotel Finder is your one-stop destination for discovering the best hotels tailored to your needs. Whether you're traveling for business, leisure, or any other purpose, our platform helps you find the perfect accommodation with ease and convenience.

Our Mission
Our mission is to provide travelers with a seamless and efficient way to find and book hotels. We understand that finding the right hotel can be challenging, and we strive to simplify this process by offering comprehensive search and filter options.
<p>
  <ul>Features
    <li>
    Filter by Area: Easily search for hotels in specific areas using our intuitive area filter. Simply select your preferred area and find hotels that match your location requirements.
    </li>
    <li>
    Filter by Rating: Looking for a hotel with a certain rating? Our rating filter allows you to search for hotels based on their star ratings, ensuring you find accommodations that meet your quality standards.

    </li>
    <li>
    Search Functionality: Use our powerful search bar to quickly find hotels by name, amenities, or other criteria. Our search results list updates in real-time, helping you find the best matches instantly.

    </li>
    <li>
    User-Friendly Interface: Our platform is designed with the user in mind. Navigate through our clean and responsive interface to find and book hotels effortlessly.

    </li>
  </ul>
</p>
Thank you for choosing Hotel Finder! We look forward to helping you find the perfect hotel for your next trip.</p>
       
      </div>
    </div>
  );
}

export default About;
