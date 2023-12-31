import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

const Singlebook = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  
  const [canBorrow, setCanBorrow] = useState(true);
  const [myList, setMyList] = useState(null);
  const navigate = useNavigate();

  console.log(data);

  const { _id, image, author, category, rating, quantity, name, description } = data;
  
  const theName = name;

  let isDisabled = "";

//  const [isDisabled, setIsDisabled] = useState('');

  if(quantity < 1){
     isDisabled = 'btn-disabled';
  }

  const handleModalInfo = () => {
    console.log('Modal is clicked');
  }

  const reducedQuantity = quantity - 1;
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://library-server-iota.vercel.app/borrowed?email=${user?.email}`,{withCredentials:true});
        setMyList(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

   

  }, [user]);

  console.log('My list', myList);
  const found = myList && myList?.find(book => book.id === _id);
        console.log(found);
        console.log(myList);

 


  const handleBorrow = (e) => {
    e.preventDefault();
    
    if(found){
      swal("You have borrowed already!", "Sorry!", "error");
      document.getElementById('buttonB').click();
      return;
    }

    const form = e.target;
    const id = _id;
    const name = form.name.value;
    const email = user?.email;
    const returnDate = form.date.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const quantity = reducedQuantity;

    const book = { borrowedDate: formattedDate, bookName: theName, image, category, id, name, email, returnDate, quantity};
    console.log(book);
    axios.patch('https://library-server-iota.vercel.app/book',book,{withCredentials:true})
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    document.getElementById('buttonB').click();


    axios.post('https://library-server-iota.vercel.app/borrowed',book,{withCredentials:true})
      .then(response => {
        console.log(response.data);
        swal("Happy Reading!", "Book Borrowed!", "success");
      })
      .catch(error => console.error(error));
  }



  const handleRead = (id) => {
    console.log(name,id);
    navigate(`/read/${id}`);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-[110px] md:w-[165px] h-[170px] md:h-[255px] object-cover"/>
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="text-2xl text-red-600 font-semibold">Only {quantity} left</h1>
            <div className="badge mt-3 badge-md md:badge-lg badge-accent">{category.toUpperCase()}</div>
            <p className="py-6">{description}</p>
            <button onClick={() => {handleRead(_id)}} className="btn btn-accent">Read</button>
            {/* <button className="btn btn-error">Borrow</button> */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className={`btn ${isDisabled} btn-error`} onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
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