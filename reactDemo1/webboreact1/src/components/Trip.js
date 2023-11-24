 import "./TripStyle.css";
 import TripData from "./TripData";
 //import Trip1 from "../components/AA-Images/building2.jpg";
import Trip2 from "../components/AA-Images/building3.jpg";
import Trip3 from "../components/AA-Images/building4.jpg";
import Trip4 from "../components/AA-Images/building5.jpg";

 const Trip = () => {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>
                You can discover unique destination using 
                Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                    image={Trip3}
                    heading="Trip in Indonesia"
                    text="
                    Indonesia, officially the republic of indonesia, 
                    is a Country in southern Asia and Oceania between
                    the Indian and Pacific Oceans.
                    It cinsists of over 17,000 islands, including 
                    Sumatra, Java, Sulawesi, and parts of Borneo and 
                    New Guinea.
                    "
                />

                <TripData
                    image={Trip4}
                    heading="Trip in Indonesia"
                    text="
                    Indonesia, officially the republic of indonesia, 
                    is a Country in southern Asia and Oceania between
                    the Indian and Pacific Oceans.
                    It cinsists of over 17,000 islands, including 
                    Sumatra, Java, Sulawesi, and parts of Borneo and 
                    New Guinea.
                    "
                />

                <TripData
                    image={Trip2}
                    heading="Trip in Indonesia"
                    text="
                    Indonesia, officially the republic of indonesia, 
                    is a Country in southern Asia and Oceania between
                    the Indian and Pacific Oceans.
                    It cinsists of over 17,000 islands, including 
                    Sumatra, Java, Sulawesi, and parts of Borneo and 
                    New Guinea.
                    "
                />
            </div>
        </div>
    );
 }

 export default Trip;