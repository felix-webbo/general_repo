import Image1 from "../components/AA-Images/building2.jpg";
import Image2 from "../components/AA-Images/building3.jpg";
//import Image3 from "../components/AA-Images/building4.jpg";
//import Image4 from "../components/AA-Images/building5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";


const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>
                Tuors gives you the opportunity to see alot within a frame time.
            </p>

            <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="
                One of the most iconic views in Luzon, Mt. Taal boasts a 
                Volcano inside a lake inside an island. If you fancy a closer 
                look, the hike up to the
                crater is a mere 45 minutes and is easy enough for beginners
            "
            img1={Image1}
            img2={Image2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="
                One of the most iconic views in Luzon, Mt. Taal boasts a 
                Volcano inside a lake inside an island. If you fancy a closer 
                look, the hike up to the
                crater is a mere 45 minutes and is easy enough for beginners
            "
            img1={Image1}
            img2={Image2}
            />

            
        </div>
    );
}

export default Destination; 