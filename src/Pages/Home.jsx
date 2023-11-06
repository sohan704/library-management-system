
import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomeCard from "../Components/HomeCard";
import Pricing from "../Components/Pricing";
import HomeApi from "../Components/HomeApi";

const Home = () => {
 

  const data = useLoaderData();
  console.log(data);





  //swal("Here's the title!", "...and here's the text!");

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://i.ibb.co/FwSyXts/bookshelf.png" className="max-w-sm rounded-lg" />
            <div>
              <h1 className="font-bold"><a className="normal-case font-bold text-2xl md:text-7xl text-green-600"><span className="text-red-500">OG</span>Library</a> </h1>
              <p className="py-6 text-2xl md:text-4xl">
                is a non-profit library of millions of Free books!</p>
              <button className="btn btn-accent">EXPLORE</button>

            </div>
          </div>
        </div>
      </div>

    

      <div className="">

      <div className="py-10 text-center">
          <p className="text-green-500 text-6xl"><span className="text-red-500">EX</span>PLORE</p>
       </div>
        <div className="grid gap-4 py-10 md:gap-10 grid-cols-1 md:grid-cols-2 md:w-9/12 mx-auto">
          {
            data.map(card => <HomeCard key={card.id} card={card} ></HomeCard>)
          }
        </div>
      </div>

      <Pricing></Pricing>
      <HomeApi></HomeApi>
    </div>
  );
};

export default Home;