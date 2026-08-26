import { useState , useEffect } from "react";


const useFeth = () => {
 
 const [producat,setProducat]=useState([])
 const [loding,setLoding]=useState(true)
 const[err,setErr]=useState("")
   
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
      
        .then(data => setProducat(data))
        .catch(e=>setErr(e))
        .finally(()=>setLoding(false))
        
    },[])
     return {producat,err,loding}
};

export default useFeth;