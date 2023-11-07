import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const { _id,image, name, author, category} = data[0];
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (e) => {
    setSelectedRating(parseInt(e.target.value));
  };

  const handleUpdateBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const author = form.author.value; 
    const category = form.category.value;
    

    const newBook = { image, name, author, rating: selectedRating, category };
    console.log(newBook);

    axios.put(`http://localhost:5000/bookUpdate/${_id}`,newBook,{withCredentials:true}).then(res => {
      console.log('The response is ',res.data);
      swal("Book updated!", "Good Job!", "success");
    });

  }


  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">


            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Update Book</h1>
            </div>
            <div className="card border-2 border-gray-400 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateBook} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input type="text" defaultValue={image} name="image"  className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered" required />

                </div>

               


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Author Name</span>
                  </label>
                  <input type="text" defaultValue={author} name="author" placeholder="Author Name" className="input input-bordered" required />

                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  {/* <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required /> */}

                  <select defaultValue={category} className="input input-bordered" name="category">
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
                    <span className="label-text">Rating</span>
                  </label>
                  <div className="rating">
                    {[5, 4, 3, 2, 1].map((value) => (
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
                  <button className="btn text-2xl btn-accent">UPDATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;