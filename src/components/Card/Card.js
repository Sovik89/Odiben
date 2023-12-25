import React from 'react'
import { Link } from 'react-router-dom'

function Card({product}) {
    
    return (
        <div key={product.id} className="w-full max-w-sm bg-white border border-purple-400 rounded-lg shadow border-purple-500">
            <Link to="#">
                <img className="p-4  rounded-t-lg mx-auto flex items-center border-purple-400 justify-center w-40 h-40  object-cover" src={product.image} alt={product.title} />
            </Link>
            <div className="px-5 pb-5">
                <Link to="#">
                    <h5 className="text-xl font-semibold tracking-tight text-purple-900 ">{product.title}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.category}</span>
                </div>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-purple-900 ">Price: ${product.price}</span>
                    <button to="#" onClick={()=>{alert("WIP")}}className="p-3 text-white rounded-lg bg-purple-400 hover:bg-purple-800 ">Submit Bid</button>
                </div>
            </div>
        </div>
        // <div key={product.id} className="card">
          //   <img src={product.image} alt={product.title} />
          //   <h6>{product.title}</h6>
          //   <div>Price: $ {product.price}</div>
          //   <button className="btn" onClick={() => alert("WIP")}>
          //     Submit your Bid
          //   </button>
          // </div>
    )
}

export default Card