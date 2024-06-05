import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import e1 from "./assets/40141869 1.png";
import e3 from "./assets/Frame 18.png";
import e2 from "./assets/LinkedIn_icon 1.png";
import Footer from "./component/Footer.jsx";
import {register as  signup } from './axios/axios.jsx'; // Import your signup function

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate(); // Use useNavigate hook

    function handleSignUp(e) {
        e.preventDefault(); // Prevent the default form submission
        const data = { email, username, password, firstName, lastName };
        signup(data).then(res => {
            console.log(res);
            navigate("/login"); // Use navigate for redirection to login
        }).catch(err => {
            console.error(err); // Handle errors appropriately
        });
    }

    return (
        <>
            <section className="min-h-screen flex flex-col">
                <div
                    style={{ background: `url(${e1})` }}
                    className="bg-cover bg-no-repeat bg-center flex select-none font-mons items-center justify-center flex-grow relative"
                >
                    <div className="flex items-center justify-center w-full">
                        <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-10 gap-8">
                            <div className="md:w-[45%] w-full flex flex-col justify-between items-start p-8 min-h-screen md:rounded-r-[20px] md:rounded-tl-none rounded-t-[20px] lg:gap-10 gap-5">
                                <div>
                                    <img src="" alt="" className="w-16" />
                                </div>
                                <div className="flex flex-col justify-center items-center md:items-start w-full">
                                    <div className="flex flex-col justify-center w-[90%] items-start gap-3">
                                        <h1 className="font-bold lg:text-4xl text-[#fff] md:text-xl text-xl pb-4">
                                            Create Account
                                        </h1>
                                    </div>
                                    <form className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full" onSubmit={handleSignUp}>
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter Your First Name"
                                                    name="first_name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter Your Last Name"
                                                    name="last_name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter Your Username"
                                            name="username"
                                            value={username}
                                            onChange={(e) => setUser(e.target.value)}
                                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[95%]"
                                        />
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter Your Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[95%]"
                                        />
                                        <input
                                            type="password"
                                            required
                                            placeholder="Enter Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPass(e.target.value)}
                                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[95%]"
                                        />
                                        <button
                                            type="submit"
                                            className="md:w-[95%] flex flex-row justify-center items-center gap-1 w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#FD7428] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out mb-4"
                                        >
                                            Create Account
                                        </button>
                                    </form>
                                    <p className="flex flex-row gap-2 text-[#525252] lg:text-base text-sm mb-4">
                                        Already have an account?
                                        <span className="text-[#FD7428] font-semibold underline cursor-pointer">
                                            <a href="/login">Log In</a>
                                        </span>
                                    </p>
                                    {/* <div className="text-center mt-[-8px] w-full flex justify-center items-center gap-4 mb-4">
                                        <div className="border-1 h-1 w-1/2 border-b-2"></div>
                                        <p className="md:text-base text-sm text-[#525252]">or</p>
                                        <div className="border-1 h-1 w-1/2 border-b-2"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                        <div className="flex flex-row gap-3 bg-white border-2 border-[#FD7428] p-4 items-center cursor-pointer">
                                            <img src={e3} alt="" />
                                            Sign up with Google
                                        </div>
                                        <div className="flex flex-row gap-3 bg-white border-2 border-[#FD7428] p-4 items-center cursor-pointer">
                                            <img src={e2} alt="" />
                                            Sign up with Linkedin
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </section>
        </>
    );
};

export default Signup;
