"use client";
import { useState } from "react";
import { Axios } from "axios";

export default function RegisterComponent() {
    const [result, setResult] = useState("");

    const handleGet = async () => {
         await Axios.get("/api/register").then((res)=> {
            console.log(res.data);
        });
        //console.log("Get Request");
    };

    const handlePost= async ()=>{
         await Axios.post("/api/register").then((res)=>{
            console.log(res.data);
        });
    };

    const handleDelete = async () => {
        await Axios.delete("/api/register").then((res)=>{
            console.log(res.data);
        });
    };
    return (
        <div className='max-w-4xl mx-auto mt-20'>
            <div>
                <button onclick={handleGet} className='px-5 py-2 bg-green-600 text-gray-50 mx-3'>
                    Get
                </button>
                <button onclick={handlePost}className='px-5 py-2 bg-green-600 text-gray-50 mx-3'>
                    POST
                </button>
                <button className='px-5 py-2 bg-green-600 text-gray-50 mx-3'>
                    PUT
                </button>
                <button className='px-5 py-2 bg-green-600 text-gray-50 mx-3'>
                    PATCH
                </button>
                <button onClick={handleDelete} className='px-5 py-2 bg-green-600 text-gray-50 mx-3'>
                    DELETE
                </button>
            </div>
            <div className="mt-10">
                <h1>You have requested {result}</h1>
            </div>
        </div>
    )
}