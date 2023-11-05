import axios from "axios";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowedCard from "../Components/BorrowedCard";

const BorrowedBooks = () => {
   const {user } = useContext(AuthContext);
   
   const [myBooks, setMyBooks] = useState(null);
   
  axios.get(`http://localhost:5000/borrowed?email=${user?.email}`)
  .then(res => setMyBooks(res.data));



  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          myBooks?.map(book => <BorrowedCard key={book._id} book={book}></BorrowedCard>)
        }
      </div>
    </div>
  );
};

export default BorrowedBooks;