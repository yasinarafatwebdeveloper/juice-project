

const Home = () => {

const handlePostBtn=(e)=>{
e.preventDefault()
const form=e.target
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
console.log(name,email,password)
const allThing={name,email,password}

fetch("http://localhost:5000/juice",{

  method:"POST",
    headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify(allThing)

  
})
.then(res=>res.json())
.then(data=>{
  if(data.acknowledged){

    alert("yes,Success")
  }
  console.log(data)
})

}

    return (
        <div>
          <form onSubmit={handlePostBtn}>

          <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" />
          <br />
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <br />
          <input type="password" name="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          <br />
          <button className="btn-btn-success ">Wide</button>
          </form>
    
         
        </div>
    );
};

export default Home;