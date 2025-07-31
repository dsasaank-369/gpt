import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (<>
        <Header />
        <div className='absolute w-full h-screen' >
            <img className='w-full h-screen object-cover' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'></img>

        </div>
        <form className='mt-[150px] flex flex-col justify-center items-center mx-auto max-w-[400px] left-0 right-0 absolute bg-black gap-5 p-12 rounded-[10px] text-white bg-opacity-80'>

            <h1 className='text-3xl' >{isSignInForm ? "Sign in" : "Register"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-800 rounded-[5px]'></input>}
            <input type='text' placeholder='Email address' className='p-2 m-2 w-full bg-gray-700 rounded-[5px]'></input>
            <input type='Password' placeholder='Password' className='p-2 m-2 w-full bg-gray-700 rounded-[5px]' ></input>
            <button className='p-2 m-2 w-full bg-red-700 rounded-lg text-lg'>{isSignInForm ? "Sign in" : "Sign Out"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Register"}</p>

        </form>
    </>

    )
}

export default Login