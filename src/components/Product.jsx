import './style.css';

const Product = ({ product }) => {
  return (
    <div className='product'>      
      <img src={`../assets/${product.imge}`}/>
      <p>{product.description}</p>
    </div>
  )
}

export default Product
