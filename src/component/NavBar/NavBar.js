import React from "react";
import { NavLink } from "react-router-dom"


const NavBar = (props) => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item text-white">
                                    <NavLink to="/" className="nav-link" > Accueil</NavLink>
                                </li>
                                <li className="nav-item text-white ">
                                    <NavLink to="/localisation" className="nav-link"> Localisation</NavLink>
                                </li>
                                <li className="nav-item text-white ">
                                    <NavLink to="/contact" className="nav-link"> Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar