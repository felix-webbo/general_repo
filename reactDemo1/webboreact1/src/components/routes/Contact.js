import Hero from "../Hero";
import ContaImg from "../AA-Images/building5.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm";


function Contact(){
    return(
         <>
         <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={ContaImg}
         title="Contact"
         btnClass="hide"
         />

        <ContactForm/>
         <Footer/>
         </>
    );
}

export default Contact;