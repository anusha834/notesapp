import Navbar from "../componenets/Navbar"
import "../styles/About.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to the About Us page. This application is created to manage notes.</p>
      </div>
    </div>
  );
}

export default About;
