import axios from "axios";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowedCard from "../Components/BorrowedCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);

  const [myBooks, setMyBooks] = useState(null);

  const [mainBooks, setMainBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`http://localhost:5000/borrowed?email=${user?.email}`,{withCredentials:true})
        .then(response => setMyBooks(response.data));
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchMainData = async () => {
      try {
        axios.get(`http://localhost:5000/book`,{withCredentials:true}).then(response => setMainBooks(response.data));
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



    
    fetchMainData();
    fetchData();
  }, [user]);

  console.log(myBooks);
  console.log(mainBooks);
   
  const afterDelete = (id) => {
    const newBooks = myBooks.filter(book => book.id !== id);
    setMyBooks(newBooks);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          myBooks?.map(book => <BorrowedCard key={book._id} mainBooks={mainBooks} afterDelete={afterDelete} book={book}></BorrowedCard>)
        }
      </div>
    </div>
  );
};

export default BorrowedBooks;