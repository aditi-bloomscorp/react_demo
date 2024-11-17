import React from 'react';


function ProductCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="shoes" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p>{props.price}</p>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              BUY
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
