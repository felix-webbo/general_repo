import { Component } from "react";
//import Image1 from "../components/AA-Images/building2.jpg";
//import Image2 from "../components/AA-Images/building3.jpg";
//import Image3 from "../components/AA-Images/building4.jpg";
//import Image4 from "../components/AA-Images/building5.jpg";
import "./DestinationStyle.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="tourImage"/>
                    <img src={this.props.img2}  alt="tuorImage"/>
                </div>
            </div>
        );
    }
}

export default DestinationData;