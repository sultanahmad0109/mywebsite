import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar bg-white navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink
                                    className="navbar-brand"
                                    exact
                                    to="/"
                                >
                                    <h1>Sultan Ahmad</h1>
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link active"
                                                aria-current="page"
                                                activeClassName="main_div"
                                                exact
                                                to="/"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                activeClassName="main_div"
                                                exact
                                                to="/learning"
                                            >
                                                My Learnings
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                activeClassName="main_div"
                                                exact
                                                to="/about"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                activeClassName="main_div"
                                                exact
                                                to="contact"
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
