import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const CategoryDetails = () => {
  
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Navbar></Navbar>
       Here is the THRILLER DETAILS
    </div>
  );
};

export default CategoryDetails;