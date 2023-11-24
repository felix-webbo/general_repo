import "./Navbarstyles.css";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";


class Navbar extends Component{
    state = {clicked: false};
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){

        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Travel Worldwide</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    {this.state.clicked ? <button className="mbtn">Close</button> : <button className="mbtn">Menu</button>}
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon} >{item.title}</i>
                                </Link>
                            </li>
                        )
                    })}
                    <button className="sbtn ">Sign Up</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;