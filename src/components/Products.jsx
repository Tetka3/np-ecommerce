import Product from './Product';
import './style.css';

const Products = ({ products }) => {
  return (
    <div className='products'>
      {
        products.map((product) => <Product key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Products;
