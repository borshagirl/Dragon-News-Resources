
"use client";

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LogInPage = () => {

    const { register, handleSubmit, watch, formState: { errors }} = useForm()

    const handleLoginFunc = (data) => {
        console.log(data, "data");
    // const handleLoginFunc = (e) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

    }
    console.log(watch("email"));
    console.log(watch("password"));
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='pt-7 pb-4 pl-11 pr-11 rounded-xl bg-white'>
                <h2 className='font-semibold text-3xl mb-7'>Login your account</h2>
                <hr className='text-gray-200 mb-5' />
                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                  <fieldset className="fieldset">
                   <legend className="fieldset-legend text-sm">Email address</legend>
                   <input type="email" className="input text-xs" placeholder="Enter your email address" {...register("email", { required: "Email field is required"})}/>
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  </fieldset> 

                  <fieldset className="fieldset">
                   <legend className="fieldset-legend text-sm">Password</legend>
                   <input type="password" className="input text-xs" placeholder="Enter your Password" {...register("password", { required: "Password field is required"})} />
                   {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                  </fieldset>

                  <button className="btn w-full mt-3 bg-[#403F3F] text-white">Login</button>
                </form>

                <p className='text-slate-500 font-semibold text-sm flex justify-center mt-6 mb-7'>Don’t Have An Account ?  <Link className='text-red-400' href={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default LogInPage;