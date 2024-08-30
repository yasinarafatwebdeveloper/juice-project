import { useLoaderData } from "react-router-dom";


const Update = () => {
    const updatePage=useLoaderData();
    const {_id,name,email,password}=updatePage
    console.log(updatePage)

const handleUpdate=(e)=>{
e.preventDefault()

const form=e.target;
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
const updateValue={name,email,password};
console.log(updateValue)
fetch(`http://localhost:5000/juice/${_id}`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(updateValue)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
})
}

    return (
        <div>
           <form onSubmit={handleUpdate}>

<input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full max-w-xs" />
<br />
<input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full max-w-xs" />
  <br />
<input type="password" name="password" defaultValue={password} placeholder="Password" className="input input-bordered w-full max-w-xs" />
<br />
<button className="btn-btn-success w-full">Wide</button>
</form>
        </div>
    );
};

export default Update;