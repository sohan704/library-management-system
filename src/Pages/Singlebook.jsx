import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Singlebook = () => {

  const data = useLoaderData();
  console.log(data);

  const { image, author, category, rating, quantity, name, description } = data;


  const handleModalInfo = () => {
    console.log('Modal is clicked');
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className="badge mt-3 badge-md md:badge-lg badge-accent">{category.toUpperCase()}</div>
            <p className="py-6">{description}</p>
            <button className="btn btn-accent">Read</button>
            <button className="btn btn-error">Borrow</button>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">


                <div className="hero bg-base-200">
                  <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">Return Date</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <form className="card-body">
                       
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Return Date</span>
                          </label>
                          <input type="date" className="input input-bordered" required />
                         
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Return Date</span>
                          </label>
                          <input type="text" defaultValue={'name'} className="input input-bordered" required />
                         
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Return Date</span>
                          </label>
                          <input type="email" defaultValue={'email'} className="input input-bordered" required />
                         
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-accent">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleModalInfo} className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebook;