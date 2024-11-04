import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/np-ecommerce' element={<Home />} />
      <Route path="/np-ecommerce/cart" element={<Cart />} />     
    </>
  )
);

function App() {  

  return (
    <>   
      <RouterProvider router={router}/>       
    </>
  )
}

export default App