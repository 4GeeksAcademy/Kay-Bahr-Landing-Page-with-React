import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";


//render your react application
ReactDOM.render(
<>
<Navbar/>
<Jumbotron/>
<div className="card-container">
<Card />
<Card />
<Card />
<Card />
</div>
<Footer/>
</>,
document.querySelector("#app"));
