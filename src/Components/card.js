import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Components/css/card.css';

function Card() {
    return (
     <div className="card">
  <img className="card-img-top" src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )}

export default Card;