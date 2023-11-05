import axios from "axios";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BorrowedCard from "../Components/BorrowedCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);

  const [myBooks, setMyBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/borrowed?email=${user?.email}`);
        setMyBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  console.log(myBooks);
   
  const afterDelete = (id) => {
    const newBooks = myBooks.filter(book => book.id !== id);
    setMyBooks(newBooks);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          myBooks?.map(book => <BorrowedCard key={book._id} afterDelete={afterDelete} book={book}></BorrowedCard>)
        }
      </div>
    </div>
  );
};

export default BorrowedBooks;