"use client";
import { Axios } from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ReactForm () {
  const {message,setMessage} = useState("")
  const { register, handleSubmit }=useForm()
  const onSubmit = async(data) => {
    await Axios.post("/api/register").then(res=>{
      console.log(res.data.message);
    });
    //console.log(data);
  };
  return <div className="max-w-xl mx-auto mt-20">
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email ID</label>
          <input className="px-2 py-2 outline-none border border-gray-400" {...register("emailID")} />
        </div>
        <div>
          <label>Password</label>
          <input className="px-2 py-2 outline-none border border-gray-400" {...register("password")} />
        </div>
        <div>
          <button className="px-5 py-2 bg-orange-800 text-white font-bold mt-5" type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        Status : {message}
      </div>
    </div>
  </div>;
  
}

export default ReactForm;