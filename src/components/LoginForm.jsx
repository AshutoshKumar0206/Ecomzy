import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData");
        console.log(formData);
        navigate('/dashboard');
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                    type='email'
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email address'
                    name='email'
                    className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                    />
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>
                        Password<sup  className='text-pink-200'>*</sup>
                    </p>
                    <input
                    type= {showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                    />

                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} >
                        {showPassword ? (<AiOutlineEye fontSize={24} fill='black'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='black'  />)}
                    </span>

                    <Link to="#">
                        <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto'>
                            Forgot Password
                        </p>
                    </Link>

                </label>

                <button className='bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Sign In
                </button>

            </form>
        </div>
    )
}