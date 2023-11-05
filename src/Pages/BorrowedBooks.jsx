import axios from "axios";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BorrowedBooks = () => {
   const {user } = useContext(AuthContext);
   
   
  axios.get(`http://localhost:5000/borrowed?email=${user?.email}`)
  .then(res => console.log(res.data));



  return (
    <div>
      <Navbar></Navbar>
      .. .. B O R R O W E D .. .. 1 1 \ B O O K S .. .. -- 
    </div>
  );
};

export default BorrowedBooks;