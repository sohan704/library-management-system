import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import swal from "sweetalert";


const Read = () => {

  const data = useLoaderData();
  const { image, description, name } = data[0];
  console.log(data[0]);
  

   const handleReadMore = () => {
    swal("Sorry!", "This is for premium users only!", "info");
   }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <img className="w-[110px] md:w-[165px] h-[170px] md:h-[255px] object-cover" src={image} alt="" />
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-semibold">- Chapter 01 of <span className="text-red-500">{name}</span></p>
        <p className="leading-8">{description}</p>
      </div>
      <div className="space-y-4 my-10">
        <p className="text-2xl font-semibold">- Chapter 02 of <span className="text-red-500">{name}</span></p>
        <p className="leading-8">....</p>
      </div>
      <div className="flex justify-center">
          <button onClick={handleReadMore} className="btn btn-accent">READ MORE</button>
      </div>
    </div>
  );
};

export default Read;