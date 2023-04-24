import React from "react";


function Footer(){
    return (
        <div className="container-fluid" style={{
            backgroundColor: "rgb(62, 64, 73)",
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
        }}>
            <footer className="py-3 my-4">
                <p className="text-center" style={{ color: "white"}}><strong>Copyright © Your Website 2018</strong></p>
            </footer>
        </div>
    );
}


export default Footer;
