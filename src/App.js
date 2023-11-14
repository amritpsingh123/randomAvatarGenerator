import React,{useState,useEffect} from 'react'
import { Api_URL } from './api/api_url';
import './App.css';
import Read from './Components/Read';
import {Routes,Route} from 'react-router-dom'
import Create from './Components/Create';
import Update from './Components/Update';
import Delete from './Components/Delete'
import NavBar from './Components/NavBar';
import { SearchContext } from './Context/SearchContext';
import axios from 'axios';

function App() {
  let tempdata=[    
  {
 id: 1,
 name:"bruce wayne",
 address: 1111,
 avatar:"https://cdn.shopify.com/s/files/1/1475/0992/files/BRuce_Wayne_haircut_600x600.jpg?v=1641393766"
  },
  {
    id:2,
    name:"Narendra modi",
    address:2222,
    avatar:"https://i.guim.co.uk/img/media/8d2c9cafc6b9fa5fe6b6b3cc1e42af87c3293ed6/916_718_1231_739/master/1231.jpg?width=465&dpr=1&s=none"
  }]
  // const navigate= useNavigate()
  let[name,setName]=useState();
let[address,setAddress]=useState();
    const [data1, setData] = useState(tempdata)
  const [derror,setDerror]= useState("")
  const [search,setSearch]=useState('')
    // useEffect(() => {
    //   setData(...data1,id,name,address,avatar=faker.image.avatar())
        
    // },[id,name,address])
  return (
    <div>
<SearchContext.Provider value={{data1,setData,derror,setDerror,search,setSearch}}>
      <NavBar></NavBar>
       
<Routes>
        <Route path='/' element={<Read />}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
