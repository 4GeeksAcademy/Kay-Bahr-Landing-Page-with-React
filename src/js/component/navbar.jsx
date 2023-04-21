import React from "react";


function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><strong>Start Bootstrap</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active link-light" aria-current="page" href="#"><strong>Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>About</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>Services</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>Contact</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
