import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Huxaif19')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
    return(
        <>
        <div className=" flex justify-center items-align text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            <div className="p-4 " >Github followers:{data.followers}
            </div> 
            <img src={data.avatar_url} alt="Github Picture" width={50} className=""/>
        </div>
            
        </>
    )
}
export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Huxaif19')
    return response.json()
    
}