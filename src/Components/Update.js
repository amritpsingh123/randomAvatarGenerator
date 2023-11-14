import { Api_URL } from "../api/api_url";
import axios from 'axios'
import React,{useEffect, useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
function Update() {
  const navigate= useNavigate();
  var {data1,setData}
=useContext(SearchContext)
  let[name,setName]=useState("");
let[address,setAddress]=useState();
let[success,setSuccess]=useState(false);
let[errors,setErrors]=useState("");
let[id,setId]=useState();
useEffect(()=>{
setName(localStorage.getItem("name"))
setAddress(localStorage.getItem("address"))
setId(localStorage.getItem("id"))
},[])
const submit=()=>{
  setSuccess(true)
 var newname= data1[id-1].name=name;
 var newaddress= data1[id-1].address=address;
setData(data1)
 setTimeout(() => {
  navigate('/')
  setName("")
setAddress(0)
setId(0)
setSuccess(false)
 }, 3000);
}


  return (
    <div>
      <h1>welcome to the update page</h1>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name" value={name}/>
    <input type="number" onChange={(e)=>setAddress(e.target.value)} placeholder="enter address" value={address}/>
    <button onClick={submit}>submit</button>
    {success&& <h4>The Name/Address has been Updated<span>😁</span></h4>}
    {errors !==""? <h4>{errors}</h4>:null}
    <p id='footer1'>Note:click the update button from the card for seamless experience</p>
    </div>
  )
}
export default Update