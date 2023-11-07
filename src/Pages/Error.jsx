import Navbar from "../Components/Navbar";

const Error = () => {
  return (
    <div>
     <Navbar></Navbar>
      <div className="text-7xl text-red-500 font-semibold text-center">

        404! 
        <div className="mt-10">
        ERROR!!
        </div>
      </div>
    </div>
  );
};

export default Error;