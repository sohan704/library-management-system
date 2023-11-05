import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import OneBook from "../Components/OneBook";

const AllBooks = () => {

  const [myList, setMyList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/book`);
        setMyList(response.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();



  }, []);

  console.log(myList);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          myList && myList?.map(book => <OneBook key={book._id} book={book}></OneBook>)
        }
      </div>
    </div>
  );
};

export default AllBooks;