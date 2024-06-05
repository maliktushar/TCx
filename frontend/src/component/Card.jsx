import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Card = ({ image, heading, text, btn, isCa, link,rm }) => {
  const [log,setLog]=useState(false);
  useEffect(()=>{
    const checkLoggedIn = () => {
      // Check if the token cookie exists
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        acc[name] = value;
        return acc;
      }, {});
      if (cookies.token) {
        setLog(true);
      } else {
        setLog(false);
      }
    };

    checkLoggedIn();
  },[])
  const notify = () => toast("Login First!");
  return (
    <div className="px-4 py-4 flex flex-col justify-center items-center gap-3 bg-white rounded-[25px]">
      {image && <img src={image} alt="" className="rounded-[20px]" />}
      <h1 className={`${isCa ? "uppercase" : ""} text-lg font-semibold`}>
        {heading}
      </h1>
      {text && <p className="text-center text-sm">{text}</p>}
      {rm?<a href={`${link}`}
       className="bg-[#FF7C1D] px-8 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-lg text-white">
        {btn}
      </a>:<>
        {log?
        <a href={`${link}`}
       className="bg-[#FF7C1D] px-8 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-lg text-white">
        {btn}
      </a>:
      <button onClick={notify} 
       className="bg-[#FF7C1D] px-8 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-lg text-white">
        {btn}
      </button>}</>}
      <ToastContainer />
      
    </div>
  );
};

export default Card;
