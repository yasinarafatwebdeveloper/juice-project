import { Link } from "react-router-dom";


const SingleData = ({data,deleteOption,setDeleteOption}) => {
  const  {_id,name,email,password}=data
    // console.log(data)
const handleDeleteBtn=(id)=>{

console.log(id)

fetch(`http://localhost:5000/juice/${id}`,{
  method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.deletedCount){
   const removeItem= deleteOption.filter(remove=>remove._id!==_id)
   setDeleteOption(removeItem)
  }

})

}
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
 
  <div className="">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <p>{password}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">view</button>
      <Link to={`/update/${_id}`}>
      <button  className="btn btn-primary">Edit</button>
      </Link>
      <button onClick={()=>handleDeleteBtn(data._id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleData;