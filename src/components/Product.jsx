import './style.css';

const Product = ({ product }) => {
  return (
    <div className='product'>      
      <img src={`../assets/${product.imge}`}/>
      <p>{product.description}</p>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product
