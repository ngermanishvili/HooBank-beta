import React from "react";



const Button = ({ styles }) => {
  return (

    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient
       rounded-[10px]
        mt-[67px] w-[170px] h-[64px] 
        text-[18px] font-poppins line-height-[150%] outline-none ${styles}
     `}
    >
      
      Get Started
    </button>
  );
};

export default Button;

