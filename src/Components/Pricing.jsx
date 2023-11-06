import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="border-2 border-gray-100 rounded-xl my-10">
      
      <div className="text-5xl text-center my-20 text-red-500">
         <span className="text-green-500">Pricing</span> Options
      </div>

      <div className="main-div grid gap-2 grid-cols-1 md:grid-cols-3 ">
        <div className="card bg-base-100 border-gray-50 border-2 hover:shadow-xl">
          <figure><img className="w-[200px] h-[200px] object-cover" src='https://i.ibb.co/qBRBH9B/shield.png' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Golden
              <div className="badge badge-secondary">PRO</div>
            </h2>
            <div className="text-md space-y-2 my-5">
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Unlimited Access</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Early Access to Featured Genres</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Personalized Recommendations</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Access to Exclusive Virtual Book Clubs</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Priority Email Support</p>
              </div>

            </div>
            <div className="card-actions mt-5 justify-between">
              <div className="flex gap-2 items-center font-bold">
                <p className="line-through text-red-600 text-xl">$400.00</p>
                <p className="text-3xl text-secondary">$40.99</p>
              </div>
              <button className="btn btn-secondary">Pay Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-gray-50 border-2 hover:shadow-xl">
          <figure><img className="w-[200px] h-[200px] object-cover" src='https://i.ibb.co/68ZCtcP/emerald.png' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Diamond
              <div className="badge badge-primary">ULTRA</div>
            </h2>
            <div className="text-md space-y-2 my-5">
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Unlimited Access</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Exclusive Author Q&A Sessions</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Personalized Book Butler Service</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>VIP Invitations to Literary Events</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>24/7 Concierge Support</p>
              </div>

            </div>
            <div className="card-actions mt-5 justify-between">
              <div className="flex gap-2 items-center font-bold">
                <p className="line-through text-red-600 text-xl">$800.00</p>
                <p className="text-3xl text-primary">$90.99</p>
              </div>
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border-gray-50 border-2 hover:shadow-xl">
          <figure><img className="w-[200px] h-[200px] object-cover" src='https://i.ibb.co/WcYwgRd/silver-medal.png' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Silver
              <div className="badge badge-success">BASIC</div>
            </h2>
            <div className="text-md space-y-2 my-5">
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Curated Access to Featured Titles</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Early Access to Featured Categories</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Basic Recommendations</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Community Forum Participation</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaCheck></FaCheck><p>Standard Customer Support</p>
              </div>

            </div>
            <div className="card-actions mt-5 justify-between">
              <div className="flex gap-2 items-center font-bold">
                <p className="line-through text-red-600 text-xl">$50.00</p>
                <p className="text-3xl text-green-600">$9.99</p>
              </div>
              <button className="btn btn-success">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;