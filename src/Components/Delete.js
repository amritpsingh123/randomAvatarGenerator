import React, { useEffect,useContext} from "react"
import { useState } from "react";
import { Api_URL } from "../api/api_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
function Delete() {
  var {data1,setData}=useContext(SearchContext)
  const navigate= useNavigate();
  var [ip2,setip2]=useState();
  var [names,setName]=useState()
  var [success,setSuccess]=useState(false)
  // useEffect(()=>{
  //   setip2(localStorage.getItem("id"))
  //   setName(localStorage.getItem("name"))
  // },[])
  const Deleted=()=>{
  let  filtereddata=data1.filter(datass=> datass.id.includes(ip2))
console.log(filtereddata);
    // setTimeout(() => {
    //   navigate('/')
    //   setip2(0)
    //   setName("");
    // }, 3000);
    
   
  }
  return (
    <div>
      <input type="number" onChange={(e)=>setip2(e.target.value)} placeholder="ID no Optional" />
      <span>{ip2} {names} will be delete!</span>
      <button type="button" className="btn btn-danger" onClick={Deleted}>delete</button>
      {success&& <h2>The Id is deleted</h2>}
      <p id='footer1'>Note:click the delete button from the card for seamless experience</p>
    </div>
  )
}
export default Delete