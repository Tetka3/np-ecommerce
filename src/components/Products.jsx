import './style.css';

const Products = ({ products }) => {
  return (
    <div className='products'>
      {
        products.map((product) => <li>{product.imge}</li>)
      }
    </div>
  )
}

export default Products;
