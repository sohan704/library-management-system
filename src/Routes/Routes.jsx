import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/Books.json'),
        },
        
        {
          path: '/addbook',
          element: <AddBooks></AddBooks>,
          
        },
        
        {
          path: '/allbooks',
          element: <AllBooks></AllBooks>,
          loader: () => fetch('/Brands.json'),
        },
        
        {
          path: '/borrowedbooks',
          element: <BorrowedBooks></BorrowedBooks>,
          loader: () => fetch('/Brands.json'),
        },
        {
          path: '/login',
          element: <Login></Login> ,
          
        },
        {
          path: '/register',
          element: <Register></Register> ,
          
        },
        
       
       
  
      ]
  
    }
  ])


export default routes;