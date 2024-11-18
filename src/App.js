import './App.css';
import ProductCard from './components/ProductCard.js';
import productImage1 from './img/product.jpg';
import productImage2 from './img/product1 (1).jpg';
import productImage3 from './img/product2 (1).jpg';
import productImage4 from './img/product3 (1).jpg';

function App() {
  return (
    <div className="App">
      <ProductCard name="Nike Blue Shoes | NIKE45" price="Rs. 5000" image={productImage1} details='Nike shoes are comfortable and stylish.'/>
      <ProductCard name="Adidas Classic | ADIFIRST" price="Rs. 6000" image={productImage2} details='Adidas shoes are great for running.'/>
      <ProductCard name="Puma Shoes White" price="Rs. 10,000" image={productImage3} details='Puma offers high-quality sports shoes.'/>
      <ProductCard name="Khadims Comfy | KHA7" price="Rs. 1000" image={productImage4} details='Affordable and durable footwear.'/>
    </div>
  );
}

export default App;
