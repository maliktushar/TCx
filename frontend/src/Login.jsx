import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import e1 from "./assets/Group 66.png";
import { login } from './axios/axios.jsx';

const Login = () => {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate(); // Use useNavigate hook

    function handleSignIn() {
        const data = { email, username, password };
        login(data).then(res => {
            document.cookie = `token=${res.accessToken}; SameSite=Lax; path=/`;
            console.log(res.accessToken);
            navigate("/"); // Use navigate for redirection
        }).catch(err => {
            toast.error("Invalid Credentials") // Handle errors appropriately
        });
    }

    return (
        <>
            <section className="min-h-screen flex flex-col">
                <ToastContainer/>
                <div className="grid grid-cols-1 md:grid-cols-2 text-black bg-white flex-grow">
                    <div>
                        <img src={e1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center px-10 py-10">
                        <p className="text-3xl font-semibold text-center">BEGIN YOUR JOURNEY TO AI EXCELLENCE</p>
                        <p>Don&apos;t have an account? <span className="text-[#FD7428] cursor-pointer"><a href="/signup">Sign up</a></span></p>
                        <input
                            type="text"
                            required
                            placeholder="Enter Your Username"
                            value={username}
                            onChange={(e) => { setUser(e.target.value); }}
                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-full md:w-[95%]"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-full md:w-[95%]"
                        />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPass(e.target.value); }}
                            className="outline-none border-2 border-[#FD7428] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-full md:w-[95%]"
                        />
                        <button onClick={handleSignIn} className="w-full md:w-[95%] flex justify-center items-center gap-1 uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#FD7428] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out mb-4">
                            Sign In
                        </button>
                        {/*<div className="text-center w-full flex justify-center items-center gap-4 mb-4">
                            <div className="border-1 h-1 w-1/2 border-b-2"></div>
                            <p className="md:text-base text-sm text-[#525252]">or continue with</p>
                            <div className="border-1 h-1 w-1/2 border-b-2"></div>
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="flex flex-row gap-3 bg-white border-2 border-[#FD7428] p-4 items-center cursor-pointer">
                                <img src={e3} alt="" />
                                Login In with Google
                            </div>
                            <div className="flex flex-row gap-3 bg-white border-2 border-[#FD7428] p-4 items-center cursor-pointer">
                                <img src={e2} alt="" />
                                Login In with Linkedin
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <Footer /> */}
            </section>
        </>
    );
};

export default Login;
