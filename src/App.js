import './App.css';
import ProductCard from './components/ProductCard.js';
import productImage1 from './img/product.jpg';
import productImage2 from './img/product1 (1).jpg';
import productImage3 from './img/product2 (1).jpg';
import productImage4 from './img/product3 (1).jpg';

function App() {
  return (
    <div className="App">
      <ProductCard name="Nike Blue Shoes | NIKE450" price="Rs. 5000" image={productImage1} />
      <ProductCard name="Adidas Classic | ADIFIRST" price="Rs. 6000" image={productImage2} />
      <ProductCard name="Puma Shoes White" price="Rs. 10,000" image={productImage3} />
      <ProductCard name="Khadims Comfy Shoes | KHA788" price="Rs. 1000" image={productImage4} />
    </div>
  );
}

export default App;
