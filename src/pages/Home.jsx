import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Products from '../components/Products';



const Home = () => {

  const [products, setProducts] = useState([{
    id: 1,
    description: 'product 1',
    imge: '../assets/visa.jpeg'
  },
  {
    id: 2,
    description: 'product 2',
    imge: 'visa.jpeg'
  },
  {
    id: 3,
    description: 'product 3',
    imge: 'https://www.pexels.com/photo/pair-of-black-dress-shoes-292999/'
  },
  {
    id: 4,
    description: 'product 4',
    imge: 'visa.jpeg'
  },
  {
    id: 5,
    description: 'product 5',
    imge: 'visa.jpeg'
  },
  {
    id: 6,
    description: 'product 6',
    imge: 'visa.jpeg'
  },
  {
    id: 7,
    description: 'product 7',
    imge: 'visa.jpeg'
  },
  {
    id: 8,
    description: 'product 8',
    imge: 'visa.jpeg'
  },
  {
    id: 9,
    description: 'product 9',
    imge: 'visa.jpeg'
  }])
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Products products={products}/>
      <Footer />
    </div>
  )
}

export default Home;
