import React from 'react';
import "./CSS/products.css"
import prod1 from '../Components/Assets/kk2.jpg';
import axios from 'axios';

const Women = () => {
    const add = async () => {
        try {
          let apiData = {
            category: "men",
            item: "product",
            price: "$19.99",
          };
          const response = await axios.post('http://localhost:4000/item', { 
            category: "women",
            item: "product",
            price: "$19.99",
           });
          console.log(response.data); // Log the response for debugging
        } catch (error) {
          console.error('Error:', error.message || 'Network Error');
        }
      };
  return (
    <div>
      <h1>woMen's Page</h1>
      <div class="container">
        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 1" />
            </div>
            <h2>Product 1</h2>
            <p>Description of Product 1.</p>
            <span class="price">$19.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 2" />
            </div>
            <h2>Product 2</h2>
            <p>Description of Product 2.</p>
            <span class="price">$29.99</span>
            <button  onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 3" />
            </div>
            <h2>Product 3</h2>
            <p>Description of Product 3.</p>
            <span class="price">$29.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 4" />
            </div>
            <h2>Product 4</h2>
            <p>Description of Product 4.</p>
            <span class="price">$29.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 5" />
            </div>
            <h2>Product 5</h2>
            <p>Description of Product 5.</p>
            <span class="price">$29.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 6" />
            </div>
            <h2>Product 6</h2>
            <p>Description of Product 6.</p>
            <span class="price">$29.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>


    </div>

    </div>
  );
}

export default Women;
