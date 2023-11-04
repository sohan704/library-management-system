import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";


const Register = () => {

  const { createUser } = useContext(AuthContext);


   const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      console.log('Password too short');

      toast.error('Password too short!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      console.log('At least one uppercase required');


      toast.error('At least one uppercase required!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }
    else if (!/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*.]+$/.test(password)) {

      toast.error('please use special character!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    createUser(email, password)
      .then(result => {


        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        })

        toast.success('Registration Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      })
      .catch(error => {
        console.log(error);
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        return;
      });

   }


  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-green-50">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-green-600 font-bold">Register</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL..." className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                <label className="label">
                 <p>Already have an account? <Link to="/login">Login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-xl">Register</button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;