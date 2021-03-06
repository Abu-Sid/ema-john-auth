import React from 'react';
const Inventory = () => {
    const handleAddProduct=()=>{
        const product={}
        fetch('https://morning-shore-55796.herokuapp.com/addProduct',{
            method:'POST',
            headers:{ 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        
    }
    return (
        <div>
            <form>
                <p><span>Name:</span><input type="text"></input></p>
                <p><span>Price:</span><input type="text"></input></p>
                <p><span>Quantity</span><input type="text"></input></p>
                <p><span>Product Image</span><input type="file"></input></p>
            <button onClick={handleAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;