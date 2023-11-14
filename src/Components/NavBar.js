import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { SearchContext } from "../Context/SearchContext";
import beyonce from '../beyonce.png'
function NavBar() {
  var {data1,setData} = useContext(SearchContext)
  let[ip1,setip1]=useState();
const handleSubmit= (e)=>{
   e.preventDefault();
   var filteredata=data1.filter(names=>names.name.toLowerCase().includes(ip1))
   setData(filteredata)
}

  return (
    <div className="sticky-xl-top">
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" to={"/"}>RandomPhotoGenerator.com</Link>
    <img  src={beyonce} alt="" style={{height:"50px",width:"50px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <b><Link className="nav-link" to={"/"}>Read</Link></b> 
        </li>
        <li className="nav-item">
         <Link className="nav-link" to={"/create"}>Create</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/update"}>Update</Link>
        </li>
         {/* <li className="nav-item"><Link className="nav-link" to={"/delete"}>delete</Link>
        </li> */}
      </ul>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setip1(e.target.value.toLowerCase())} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      {data1.length === 0? <h2 style={{color:"white"}}>No result</h2>:null}
    </div>
  </div>
</nav>
</div>
  )
}
export default NavBar
