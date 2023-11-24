import Hero from "../Hero";
import AboutImg from "../AA-Images/building2.jpg"
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutUs from "../AboutUs";


function About(){
    return(
         <>
         <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={AboutImg}
         title="About"
         btnClass="hide"
         />

        <AboutUs/>
         <Footer/>
         </>
    );
}

export default About;