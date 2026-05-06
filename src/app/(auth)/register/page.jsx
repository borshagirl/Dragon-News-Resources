
"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors }} = useForm();

        const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data, "data");
        const {name, photo, email, password} = data;
        console.log(name, photo);

        const { data: res, error } = await authClient.signUp.email({
           name: name,
           email: email,
           password: password,
           image: photo,
           callbackURL: "/",
        });
    console.log(res, error);
    if(error){
        alert(error.message)
    }
    if(res){
        alert("Signup Successful")
    }

    }
    console.log(watch("email"));
    console.log(watch("password"));
    return (
        <div className='container mx-auto min-h-[101vh] flex justify-center items-center bg-slate-100'>
            <div className='pt-7 pb-4 pl-11 pr-11 rounded-xl bg-white'>
                <h2 className='font-semibold text-3xl mb-7'>Register your account</h2>
                <hr className='text-gray-200 mb-5' />
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                   <fieldset className="fieldset">
                   <legend className="fieldset-legend text-sm">Your Name</legend>
                   <input type="text" className="input text-xs" placeholder="Enter your name" {...register("name", { required: "Name field is required"})}/>
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </fieldset>

                   <fieldset className="fieldset">
                   <legend className="fieldset-legend text-sm">Photo URL</legend>
                   <input type="text" className="input text-xs" placeholder="Type your photo URL" {...register("photo", { required: "Photo URL field is required"})}/>
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                  </fieldset>

                  <fieldset className="fieldset">
                   <legend className="fieldset-legend text-sm">Email address</legend>
                   <input type="email" className="input text-xs" placeholder="Enter your email address" {...register("email", { required: "Email field is required"})}/>
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  </fieldset> 

                  <fieldset className="fieldset relative">
                   <legend className="fieldset-legend text-sm">Password</legend>
                   <input type={isShowPassword ? "text" : "password"} className="input text-xs" placeholder="Enter your Password" {...register("password", { required: "Password field is required"})} />
                     <span className='absolute right-7 top-4.5 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                     </span>
                   {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                  </fieldset>

                  <button className="btn w-[50vh] mt-3 bg-[#403F3F] text-white">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;