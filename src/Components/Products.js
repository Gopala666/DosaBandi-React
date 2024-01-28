import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch products
    // Replace this with your actual API call logic
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://54.209.163.69:8080/products');
        const data = await response.json();        
        setProducts(data); // Assuming data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once (on component mount)

  return (
    <div className="container mt-5">
      <br/><br/><br/>
      <div className="row">
        {products.map((product) => (
          <div key={product.pid} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.url} style={{ height: "250px" }} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.description}</p>
                <p className="lead">${product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
