import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useState } from "react";
const Navbar = (props) => {

  const {cart} = useSelector((state) => state);
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div >
      <nav className="flex justify-between items-center h-16 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="">
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>
          <div className="flex items-center font-medium text-slate-100 ml-auto mr-7 space-x-6">
            {!isLoggedIn && <NavLink to="/" className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] translate-x-[80%]'>
              <p>Home</p>
            </NavLink>}
            {isLoggedIn && <NavLink to="/" className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] translate-x-[50%]'>
              <p>Home</p>
            </NavLink>}
            <NavLink to="/cart">
              <div className="relative translate-x-[900%]">
                  <FaShoppingCart className="text-2xl"/>
                  {
          cart.length > 0 &&
          <span
          className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
          justify-center items-center animate-bounce rounded-full text-white" 
          >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
              {/* Login - Signup - Logout - Dashboard */}
   <div className='flex justify-center items-center gap-x-3 mr-11 '>
        {!isLoggedIn &&
          <Link to='/login'>
            <button className='bg-richblack-800 text-slate-100 py-[6px] px-[10px] rounded-[8px]'>
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to='/signup'>
            <button className='bg-richblack-800 text-slate-100 py-[6px] px-[10px] rounded-[8px] '>
              Sign Up
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to='/'>
            <button onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}
            className='bg-richblack-800 text-slate-100 py-[6px] px-[10px] rounded-[8px] -translate-x-[50%]'
            >
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to='/dashboard'>
            <button
            className='bg-richblack-800 text-slate-100 py-[6px] px-[10px] rounded-[8px] -translate-x-[40%]'
            >
              Dashboard
            </button>
          </Link>
        }
      </div>    
      </nav>

    </div>
  )
};

export default Navbar;
