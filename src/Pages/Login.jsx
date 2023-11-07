import { Link } from "react-router-dom";

import { useContext } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Login = () => {

  const {signIn,googleLogin} = useContext(AuthContext);

  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    signIn(email, password)
      .then(result => {
        toast.success('Login Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      
        // const user = result.user;
        // console.log(user);
        //access token hit from here
        const user = {email};
        console.log(user);

        axios.post('http://localhost:5000/jwt',user, {withCredentials: true})
        .then(res => console.log(res.data));
        
      }
      )
      .catch(error =>
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )

  }



  const handleGoogleLogin = () => {
    googleLogin().then(result => {
      toast.success('Login Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      const email = result.user.email;
      const user = {email};
      // console.log('here is the user obj',user);
      axios.post('http://localhost:5000/jwt',user, {withCredentials: true})
      .then(res => console.log(res.data));

    }).catch();
  }



  return (
    <div>
       <Navbar></Navbar>
       <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold  text-green-600">Login</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
             
             
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
                 <p>New Here? <Link to='/register'>Register</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-lg">Login</button>
                <ToastContainer />
              </div>
            </form>

           
          </div>

           <div className="my-10">
               <button onClick={handleGoogleLogin} className="bg-red-600 flex items-center gap-3 rounded-xl p-3 text-white font-semibold"><FaGoogle></FaGoogle>Continue with Google</button>
            </div>
        </div>


          
      </div>
    </div>
  );
};

export default Login;