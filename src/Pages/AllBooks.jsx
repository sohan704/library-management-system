import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import OneBook from "../Components/OneBook";
import { FaFilter } from "react-icons/fa";

const AllBooks = () => {

  const [myList, setMyList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`https://library-server-iota.vercel.app/book`,{withCredentials:true}).then(response => {
          setMyList(response.data);
        })
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();



  }, []);

  console.log(myList);

  const handleFilter = () => {
    const fetchData = async () => {
      try {
        axios.get(`https://library-server-iota.vercel.app/filter`,{withCredentials:true}).then(response=>setMyList(response.data));
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-5 flex justify-center">
        <button onClick={handleFilter} className="btn btn-warning">Filter <FaFilter></FaFilter> </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          myList && myList?.map(book => <OneBook key={book._id} book={book}></OneBook>)
        }
      </div>
    </div>
  );
};

export default AllBooks;