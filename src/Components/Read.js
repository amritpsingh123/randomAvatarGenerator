import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { SearchContext } from "../Context/SearchContext";


function Read() {
  const navigate= useNavigate()
  //   const [data1, setData] = useState([])
  //   const [loading,setLoading]=useState(true)
  // const [derror,setDerror]= useState("")
  // const [search,setSearch]=useState('')
  //   useEffect(() => {
  //     axios.get(Api_URL+`?name=${search}`).then(res => setData(res.data))
  //     .catch(err=> setDerror(err.message))
  //     .finally(()=>{
  //       setLoading(false)
  //     })  
  //   }, [])
  var {data1,setData,loading,setLoading,derror,setDerror,search,setSearch}
=useContext(SearchContext)  
    const handleUpdate=({name,address,id})=>{
      navigate("/update")
      localStorage.setItem("name",name)
      localStorage.setItem("address",address)
      localStorage.setItem("id",id)
    }
    const handleDelete=(id,name)=>{
      let  filtereddata=data1.filter(datass=> datass.id!==id)
      setData(filtereddata);
      // navigate("/delete")
      //  localStorage.setItem("id",id)
      //  localStorage.setItem("name",name)
    }
    
    return (
        <div className="container text-center"  >
         
          
        <div className="row">
          
          {   
             data1.map((datas) => (
                <div className="col colgap">
                <div key={datas.id} className="card" style={{width: "18rem"}}>
                <img src={datas.avatar} style={{width:"18rem",height:"280px"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{datas.name}</h5>
                  <h6 className="card-title">{datas.address}</h6>
                  <p className="card-text fontdance">Its a Beautiful World</p>
                  <button className="btn btn-primary" data-tooltip-id="my-tooltip" data-tooltip-content="Click! to update data"onClick={()=>handleUpdate(datas)}>Update!</button>
                  <button type="button" className="btn btn-danger" data-tooltip-id="my-tooltip" data-tooltip-content="Click to Delete"onClick={()=>handleDelete(datas.id,datas.name)}>Delete!</button> 
                </div>
              </div>
              </div>
            
    ))
}
          
        </div>
        <Tooltip id="my-tooltip"></Tooltip>
      </div>   )
}
export default Read