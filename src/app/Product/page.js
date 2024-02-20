import React from 'react'
import DBConnect from '../mongodb/DBConnection';

function ProductPage() {
    const handleServer = async () => {
        "use server";
        await DBConnect();
        //console.log("Server action activated");
        let itemInfo = await Item.find({});
        console.log(itemInfo);
    };
  return <div className='max-w-xl mx-auto mt-20'>
    <div>
        <form>
          <button formAction={handleServer}>Get Server</button>
        </form>
        
    </div>
  </div>;
}

export default ProductPage;
