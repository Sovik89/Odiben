import React,{useState,useEffect} from 'react'
import axios from 'axios';

function OngoingAuctions() {
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  const getProducts=async ()=>{
    setIsLoading(true)
    const res=await axios.get("https://fakestoreapi.com/products");
    //console.log(res);
    if(res.status===200){
        setProducts(res.data);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    getProducts();
  },[])

  const submitBid=(product)=>{
    //dispatch(add(product));
  }
  if(isLoading===true){return <div>Loading...</div>};
  return (
    <div className='productsWrapper'>
        {products.map((product)=>{
            return(
            <div key={product.id} className='card'>
                <img src={product.image} alt={product.title} />
                <h6>{product.title}</h6>
                <div>Price: $ {product.price}</div>
                <button className='btn' onClick={()=>alert("WIP")}>Submit your Bid</button>
            </div>
        )})}
    </div>
  )
}

export default OngoingAuctions;