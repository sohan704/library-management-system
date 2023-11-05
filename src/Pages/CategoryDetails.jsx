import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DetailsCard from "../Components/DetailsCard";

const CategoryDetails = () => {
  
  const data = useLoaderData();
  console.log(data);
  const categoryName = data[0].category;
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-5xl text-green-500 my-10 py-3 border-b-2 border-green-400">
          <span className="text-red-500 font-semibold">{categoryName.toUpperCase()}</span> BOOKS
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {
            data.map(card => <DetailsCard key={card._id} card={card}></DetailsCard>)
          }
       </div>
    </div>
  );
};

export default CategoryDetails;