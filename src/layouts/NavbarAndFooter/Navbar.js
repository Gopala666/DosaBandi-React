import React from "react";
import { Link, Route, Router,Switch  } from "react-router-dom";
import { Login } from "../../Components/Login";
import { Signup } from "../../Components/Signup";

export const Navbar = () => {
    return (        
            <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{ backgroundColor: '#FFA500' }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="https://t3.ftcdn.net/jpg/00/37/81/84/240_F_37818424_iEAeI3ngDZ3pNwQ8iZvm2AIDzVDRQmhz.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Dosa Bandi
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/menu" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                            </li>
                        </ul>
                        <div className="text-end">
                        <Link to="/login" type="button" className="btn btn-outline-light me-2">Login</Link>
                        <Link to="/signup" type="button" className="btn btn-warning">Sign-up</Link>
                        </div>
                    </div>
                </div>
            </nav>     
                  
    );
}