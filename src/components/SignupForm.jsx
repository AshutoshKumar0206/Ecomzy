import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
 

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return ;
        }
        
        setIsLoggedIn(true)
        toast.success("Account Created");

        const accountData = {
            ...formData
        };
        console.log("Printing account data");
        console.log(accountData);

        const finalData = {
            ...accountData,
          
        }
        console.log("Printing final data");
        console.log(finalData);


        navigate('/dashboard');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div className='flex gap-x-4 mt-[30px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            placeholder='Enter First Name'
                            onChange={changeHandler}
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            placeholder='Enter Last Name'
                            onChange={changeHandler}
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                        />
                    </label>
                </div>

                {/*email address*/}
                <div className='mt-[10px]'>
                    <label className='w-full  mt-[20px]'>
                    <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='Enter Email Address'
                        onChange={changeHandler}
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                    />
                    </label>
                </div>

                {/* Create Password and Confirm Password */}
                <div  className='flex gap-x-4 mt-[20px]'>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} >
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFBF2F' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFBF2F' />)}
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setConfirmShowPassword((prev) => !prev)} >
                            {showConfirmPassword ? (<AiOutlineEye  fontSize={24} fill='#AFBF2F' />) : (<AiOutlineEyeInvisible  fontSize={24} fill='#AFBF2F' />)}
                        </span>
                    </label>

                </div>

                <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>

            </form>



        </div>
    )
}