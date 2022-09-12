import { useEffect, useState } from "react";

const useFetch = (request) => {
    let[data,setData]=useState(null);
    let[pending,setPending]=useState(true);
    let[error,setError]=useState(null);

    useEffect(()=>{

setTimeout(()=>{
fetch(request)
.then((response)=>{
    if(response.ok===false)
    {
        throw Error("data not found!");
    }
    else
    {
     return response.json()
}})
.then((receivedData)=>{setData(receivedData.data);setPending(false)})
.catch((error)=>{setError(error.message);setPending(false)})


},1000)
    },[])

return{data,pending,error}

}

 
export default useFetch;