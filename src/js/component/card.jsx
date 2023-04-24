import React from "react";


function Card(props){
    return (
        <div className="card card-item">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.text}</p>
            </div>
            <div className='card-footer'>
                <a href="#" className="btn btn-primary" id="cardButton">Find out more!</a>
            </div>
        </div>
    );
    
}

export default Card;
