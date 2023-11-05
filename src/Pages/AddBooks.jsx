
// import swal from 'sweetalert';

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import swal from "sweetalert";


const AddBooks = () => {
   
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (e) => {
    setSelectedRating(parseInt(e.target.value));
  };


  const handleAddBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    
    
    const quantity = form.quantity.value;
    const author = form.author.value; 
    const description = form.description.value;
    const category = form.category.value;
    

    const newProduct = { image, name, author, rating: selectedRating, quantity, description, category };
    console.log(newProduct);

    axios.post('http://localhost:5000/book',newProduct).then(res => {
      console.log('The response is ',res.data);
      swal("Book Added!", "Good Job!", "success");
    });


    //   fetch('https://brand-shop-server-eb5wt3ngh-sohan704.vercel.app/product',{
    //     method:'POST',
    //     headers: {
    //       'content-type' : 'application/json'
    //      },
    //     body: JSON.stringify(newProduct)
    // }).then(res => res.json()).then(data => {
    //   console.log(data);
    //   swal("Product Added!", "Good Job!", "success");
    // });

  }


  return (

    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">


          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Book</h1>
          </div>
          <div className="card border-2 border-gray-400 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddBook} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="image" placeholder="Image Link..." className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required />

              </div>
                  
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input type="text" name="author" placeholder="Author Name" className="input input-bordered" required />

              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                {/* <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required /> */}

                <select className="input input-bordered" name="category">
                  <option value="thriller">Thriller</option>
                  <option value="history">History</option>
                  <option value="scifi">Sci-fi</option>
                  <option value="fantasy">Fantasy</option>

                </select>

              </div>


              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="number" name="rating" placeholder="Rating" min="1" max="5" className="input input-bordered" required />

              </div> */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea rows="6" name="description"
                  cols="50" type="text" placeholder="Short Description" className="input input-bordered" required />

              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="rating">
                  {[5,4,3,2,1].map((value) => (
                    <React.Fragment key={value}>
                      <input
                        type="radio"
                        name="rating"
                        id={`star${value}`}
                        value={value}
                        onChange={handleRatingChange}
                        checked={selectedRating === value}
                      />
                      <label htmlFor={`star${value}`}></label>
                    </React.Fragment>
                  ))}
                </div>
              </div>



           
              <div className="form-control mt-6">
                <button className="btn text-2xl btn-accent">ADD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;