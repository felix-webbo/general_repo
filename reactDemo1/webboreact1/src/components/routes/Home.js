
import Hero from "../Hero";
import Navbar from "../Navbar";
import HomeImg from "../AA-Images/building3.jpg"
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home(){
    return(
         <>
         <Navbar/>
         <Hero
         cName="hero"
         heroImg={HomeImg}
         title="Your Journey Your Story"
         text="Choose Your Fovarite Destination"
         btnText="Travel Plan"
         url="/"
         btnClass="Show"
         />
         <Destination/>
         <Trip/>
         <Footer/>
         </>
    );
}

export default Home;