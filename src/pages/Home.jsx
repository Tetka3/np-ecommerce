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
    imge: '../assets/visa.jpeg'
  },
  {
    id: 3,
    description: 'product 3',
    imge: 'https://www.pexels.com/photo/pair-of-black-dress-shoes-292999/'
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
