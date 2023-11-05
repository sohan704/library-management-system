import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Singlebook = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);

  const { _id, image, author, category, rating, quantity, name, description } = data;


  const handleModalInfo = () => {
    console.log('Modal is clicked');
  }

  const reducedQuantity = quantity - 1;


  const handleBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = _id;
    const name = form.name.value;
    const email = form.email.value;
    const returnDate = form.date.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const quantity = reducedQuantity;

    const book = { borrowedDate: formattedDate, image, category, id, name, email, returnDate, quantity};
    console.log(book);
    axios.patch('http://localhost:5000/book',book)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    document.getElementById('buttonB').click();


    axios.post('http://localhost:5000/borrowed',book)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="text-2xl text-red-600 font-semibold">Only {quantity} left</h1>
            <div className="badge mt-3 badge-md md:badge-lg badge-accent">{category.toUpperCase()}</div>
            <p className="py-6">{description}</p>
            <button className="btn btn-accent">Read</button>
            {/* <button className="btn btn-error">Borrow</button> */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-error" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">


                <div className="hero bg-base-200">
                  <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">Return Date</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <form onSubmit={handleBorrow} className="card-body">

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Return Date</span>
                          </label>
                          <input type="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="text" name="name" defaultValue={user.displayName} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="email" name="email" defaultValue={user.email} className="input input-bordered" required />

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
                    <button id="buttonB" onClick={handleModalInfo} className="btn">Close</button>
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