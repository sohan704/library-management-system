import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import BookCategoryRoot from "../Root/BookCategoryRoot";
import CategoryDetails from "../Pages/CategoryDetails";
import Singlebook from "../Pages/Singlebook";
import Update from "../Pages/Update";
import Read from "../Pages/Read";

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://library-server-iota.vercel.app/category'),
        },
        
        {
          path: '/addbook',
          element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
          
        },
        
        {
          path: '/allbooks',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          // loader: () => fetch('/Brands.json'),
        },
        
        {
          path: '/borrowedbooks',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
          // loader: () => fetch(`https://library-server-iota.vercel.app/borrowed`),
        },
        {
          path: '/login',
          element: <Login></Login> ,
          
        },
        {
          path: '/register',
          element: <Register></Register> ,
          
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute> ,
          loader: ({params}) => fetch(`https://library-server-iota.vercel.app/getBook/${params.id}`),
          
        },
        {
          path: '/read/:id',
          element: <PrivateRoute><Read></Read></PrivateRoute> ,
          loader: ({params}) => fetch(`https://library-server-iota.vercel.app/getBook/${params.id}`),
          
        },
        
        
       
       
  
      ]
  
    },
    {
      path:'/book/:category',
      element:<BookCategoryRoot></BookCategoryRoot>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'',
          element: <CategoryDetails></CategoryDetails>,
          loader: ({params}) => fetch(`https://library-server-iota.vercel.app/book/${params.category}`)
        },
        {
          path: ':id',
          element: <PrivateRoute><Singlebook></Singlebook></PrivateRoute>,
          loader: ({ params }) => fetch(`https://library-server-iota.vercel.app/book/${params.category}/${params.id}`)
        },
      ]
    }
  ])


export default routes;