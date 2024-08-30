import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {


    const {createRegister}=useContext(AuthContext)
const handleRegister=(e)=>{

e.preventDefault()
const form=e.target
const email=form.email.value;
const password=form.password.value;


console.log(email,password)


createRegister(email,password)
.then(result=>{
    console.log(result.user)
const crationTime=result.user.metadata.creationTime
const juiceReg={email,crationTime}

fetch("http://localhost:5000/fruit",{

    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(juiceReg)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
})

})
.catch(error=>{
    console.log(error)
})
}


    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <form onSubmit={handleRegister} className="card-body">
      <h2>Register Form</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;