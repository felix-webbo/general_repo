import Hero from "../Hero";
import ServImg from "../AA-Images/building4.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Trip from "../Trip";


function Service(){
    return(
         <>
         <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={ServImg}
         title="Service"
         btnClass="hide"
         />

        <Trip/>
         <Footer/>
         </>
    );
}

export default Service;