import Shop from "../Shop/Shop";
import ProductsList from "../Data/ProductsList";

export default function App() {
  
  const productsList = new ProductsList();
  const products = productsList.getProducts();  
  
  return (
      <div className="container">
        <Shop products={products}/>
      </div>
    );
    
}