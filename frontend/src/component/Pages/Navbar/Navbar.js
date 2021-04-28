import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">KEMPING <i className="fas fa-campground"></i></h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                       return(
                           <li key={index} className={item.cName}>
                               <Link to={item.path}>
                                   {item.title}
                               </Link>
                           </li>
                       )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar