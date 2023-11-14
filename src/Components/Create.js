import React, { useState ,useContext} from "react"
import { Api_URL } from "../api/api_url"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';
import { SearchContext } from "../Context/SearchContext";
function Create() {
  const navigate= useNavigate()
  var {data1,setData,loading,setLoading,derror,setDerror,search,setSearch}
=useContext(SearchContext) 
let[name,setName]=useState();
let[address,setAddress]=useState();
let[success,setSuccess]=useState(false);
let[errors,setErrors]=useState("");
const handlesubmit=()=>{
  setSuccess(true)
  var fakeimage= faker.image.avatarLegacy();
  let id = data1.length===0?1:data1.length+1;
  setData([...data1,{id:id,name:name,address:address,avatar:fakeimage}])
  setTimeout(()=>{setSuccess(false);
  navigate("/")},1500)
  
}
  return (
    <div >
        <h1>create the list</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name" value={name}/>
        <input type="number" onChange={(e)=>setAddress(e.target.value)} placeholder="enter address" value={address}/>
        <button onClick={handlesubmit}>submit</button>
        {success===true&& <h2>Avatar Created <span>😁</span></h2>}
    </div>
  )
}
export default Create