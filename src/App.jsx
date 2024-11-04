import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/np-social' element={<HomePage />} />
      <Route path="/np-social/login" element={<Login />} />     
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