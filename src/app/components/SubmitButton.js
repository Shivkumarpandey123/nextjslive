import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();
  return (
     <>
          <button
             type = 'submit'
              className='px-5 py-1 border border-orange-500'>
              {pending ? "pending..." : "Save Item"}
         </button>
         <button
             type = 'submit'
              className='px-5 py-1 border border-orange-500'>
              {pending ? "pending..." : "Save Item"}
         </button>
    </>
  );
    
  
}

export default SubmitButton;