import React, { useState } from "react";
import { Heart, Star } from "lucide-react";

function ProductCard(props) {
  const [isFav, setIsFav] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const toggleHighlight = () => {
    setIsFav(!isFav);
  };

  const detailsShow = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleRating = (index) => {
    setRating(index); 
  };

  return (
    <>
      <div
        className={`card-container ${isFav ? "highlighted-card" : ""}`}
        style={{
          border: isFav ? "2px solid #f00" : "1px solid #ccc",
          boxShadow: isFav
            ? "0 4px 8px rgba(255, 0, 0, 0.5)"
            : "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          
        }}
      >
        <div className="card">
          <img src={props.image} className="card-img-top" alt="shoes" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div
              className="fav_div"
              onClick={toggleHighlight}
              style={{ cursor: "pointer" }}
            >
              <p style={{ fontWeight: "500" }}>{props.price}</p>
              <Heart
                color={isFav ? "red" : "black"}
                fill={isFav ? "red" : "none"}
                style={{ marginTop: "12px" }}
              />
            </div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button onClick={detailsShow}>
              {detailsVisible ? "Hide Details" : "Show Details"}
            </button>
            {detailsVisible && <p>{props.details}</p>}

            <div className="rating_stars" style={{ cursor: "pointer" }}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Star
                  key={index}
                  color={index <= rating ? "yellow" : "black"}
                  fill={index <= rating ? "yellow" : "none"}
                  onClick={() => handleRating(index)}
                  style={{ margin: "0 5px" }}
                />
              ))}
            </div>
            <a href="www.amazon.com" className="btn btn-primary">
              BUY
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
