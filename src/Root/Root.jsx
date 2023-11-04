import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Lato w-full lg:w-11/12 mx-auto">
      
      <Outlet></Outlet>
    </div>
  );
};

export default Root;