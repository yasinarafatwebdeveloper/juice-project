import { key } from "localforage";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const RegGet = () => {

    const regloader=useLoaderData()

const [getDelete,setGetDelete]=useState(regloader)

    console.log(regloader)
    const handleDeleteBtn=(id)=>{
fetch(`http://localhost:5000/fruit/${id}`,{

    method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
const remaining=getDelete.filter(fullDelete=>fullDelete._id!==id)
setGetDelete(remaining)
    console.log(data)
})
// console.log(id)
    }


    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
    {
        getDelete.map(reg=>
     
            <tr key={reg._id}>
              <th>3</th>
              <td>{reg.email}</td>
              <td>{reg.crationTime}</td>
              <td>
                <button onClick={()=>handleDeleteBtn(reg._id)}>X</button>
              </td>
            </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RegGet;