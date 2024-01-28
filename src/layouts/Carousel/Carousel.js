import React from "react";

export const Carousel = () => {
  return (
<div className="container mt-5">
  <br/>
  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://vanitascorner.com/wp-content/uploads/2018/10/Ulli-Karam-Dosa.jpg" height="500px" className="d-block w-100" alt="Image 1"/>
      </div>
      <div className="carousel-item">
        <img src="https://content.jdmagicbox.com/comp/hyderabad/h1/040pxx40.xx40.181221003340.u6h1/catalogue/dosa-bandi-bolarum-hyderabad-street-food-i5rm4iayw2.jpg" width="80px" height="500px" className="d-block w-100" alt="Image 2"/>
      </div>
      <div className="carousel-item">
        <img src="https://media.istockphoto.com/id/909906350/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=3CI-bw2NhYaX_t0-CZIXIIXsOygFcUaoGSmzbnVB-fU=" width="80px" height="500px" className="d-block w-100" alt="Image 2"/>
      </div>

    </div>  
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  );
}