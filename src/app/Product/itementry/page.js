import ItemEntryForm from '@/app/components/ItemEntryForm';
import DBConnect from '@/app/mongodb/DBConnection';
import Item from '@/app/mongodb/models/item';

async function ItemEntryPage () {
    await DBConnect();
    let items = await Item.find({});
    return (
    <div>
        <ItemEntryForm />
        <div className='max-w-xl mx-auto mt-5'>
          {items.map((item,i) => {
                return (
                  <div 
                    key={i}
                    className='flex flex-row justify-between'>
                    
                    <div>{item.itemName}</div>
                    <div>{item.price}</div>
                </div>
            );
        })}
      </div>
        
    </div>
  );
  
}

export default ItemEntryPage;