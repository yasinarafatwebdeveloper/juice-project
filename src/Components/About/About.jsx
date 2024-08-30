// import React from 'react';

import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";
import { useState } from "react";

const About = () => {
    const loaderItem=useLoaderData()
    const[deleteOption,setDeleteOption]=useState(loaderItem)
    console.log(loaderItem)
    return (
        <div >
           
            <div className="grid grid-cols-2 gap-5">
            {
                deleteOption.map(data=><SingleData deleteOption={deleteOption} setDeleteOption={setDeleteOption}  key={data._id} data={data}></SingleData>)
            }
            </div>
           
        </div>
    );
};

export default About;