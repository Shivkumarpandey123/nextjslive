"use client";
import { useForm } from "react-hook-form";
import ItemEntry from "./ItemEntryAction";

import { ToastContainer, toast  } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "./SubmitButton";

function ItemEntryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const handleEntryForm = async (formData) => {
        let status = await ItemEntry(formData);

        if(status.success){
            toast.success("Item Inserted");
        } else {
            toast.error("Ooops!! Something went wrong");
        }
        reset();
        //console.log(formData);
    };
  return (
    <div className='max-w-xl mx-auto mt-20'>
        <form action={handleSubmit(handleEntryForm)}>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col w-full'>
                    <label>Enter Item Name</label>
                    <input
                       className='outline-none border border-green-400'
                       type='text'
                       {...register("itemName", { required: true })}
                    />
                    {
                        errors.itemName?.type=='required' && (
                        <p className="text-red-600">Item Name Required</p>
                    )}
                </div>
                <div className='flex flex-col w-full'>
                    <label>Enter Price</label>
                    <input
                       className='outline-none border border-green-400'
                       {...register("price", { required: true})}
                    />
                     {
                        errors.price?.type=='required' && (
                        <p className="text-red-600">Price Required</p>
                    )}
                </div>
                <div>
                    <SubmitButton />
        
                </div>
            </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="light"
        />  

    </div>
  )
  
}

export default ItemEntryForm;