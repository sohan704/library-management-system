import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <>
     <div className="font-Lato w-full lg:w-11/12 mx-auto">
      
      <Outlet></Outlet>
     
    </div>
     <Footer></Footer>
    </>
  );
};

export default Root;