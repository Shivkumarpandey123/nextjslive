"use client";
import { useState } from "react";
// import FormValidation from './components/FormValidation';

export default function FormValidation() {
    const[userName, setUserName] = useState(null);
    const[mobile, setMobile] = useState(null);

    const [isValidLength, setIsValidLength] = useState(true);

    const handleForm=(e) => {
        e.preventDefault();
        console.log("userName", userName, "mobile :", mobile);
        if (!userName || !mobile) {
            console.log("Invalid Form");
        } else {
            console.log("Form is valid");
        }
    };

    const handleUserName=(e)=>{
        let userName = e.target.value;
        if(userName.length>0 && userName.length<=4)
        {
            setIsValidLength(false);
        }
        else{
            setIsValidLength(true);
        }
    }

    return (
        <div className="max-w-4xl mx-auto mt-20 bg-cyan-500 p-10 min-h-[400px]">
            <form onSubmit={handleForm}>
                <div className="flex flex-col justify-between px-10">
                    <label>User Name</label>
                    <input type='text' className='px-3 py-1 outline-none appearance-none border'
                     onchange={handleUserName} 
                    />
                    {/* error message */}
                    {
                        !isValidLength && <p className="text-red-500 pt-1">Minimum Length required is 4</p>
                    }

                </div>
                <div className="flex flex-col justify-between px-10 ">
                    <label>Mobile Number</label>
                    <input type = 'text'className='px-3 py-1 outline-none appearance-none border'onchange={(e) =>setMobile(e.target.value)} />
                </div>
                <div className="flex flex-col justify-between px-10">
                    <button type='submit'>Submit Form</button>
                </div>
            </form>
        </div>
    );
}