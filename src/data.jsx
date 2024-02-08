import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Links from "./Links";
function Data() {
    const [data , setdata ] = useState([]);
     const [name, setname] = useState("");
     const [state, setstate] = useState(false);
     const [id, setid] = useState("");

    //  edit karna ke lea state? ?
    // const [newname, setnewname] = useState("");
    const [company, setCompany] = useState("");
    const [price, setNewprice] = useState("");
    const [feature, setfeature] = useState(true);
    const [newState, setnewState] = useState(false);
    const [newid, setnewid] = useState("");
useEffect(() => {
  Getlist()
}, []);

function Getlist(){
  fetch("https://newa-kohl.vercel.app/api/products").then((result)=>{
      result.json().then((resp)=>{
        setdata(resp)
        Getlist()
      })
})
}

function DataDleat(name,price,id){
  

  setname(name)
 setid(id)
setstate(true)
setTimeout(() => {
  setstate(false)
}, 5000);
  
}
function aler(){
    fetch(`https://newa-kohl.vercel.app/${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then(resp=>{
      console.log(resp)
    })
  })
  setstate(false)
}

function EditData(name,price,company,createdAt,feature,rating,newid){
setNewprice(price)
setname(name)
setCompany(company)
setfeature(feature)
setnewid(newid)
setnewState(true)
}
function updatedata(){
 let data={name,price,company,feature}

 fetch(`https://newa-kohl.vercel.app/update/${newid}`, {
  method: 'PUT',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
}).then((result) => {
  result.json().then((resp) => {
    console.warn(resp)
    Getlist()
  })
})



}

function Swodata(){
  
  return(
    <div style={{width:"800px",height:"200px",backgroundColor:"red",position:"absolute",left:"30%"}}>
      <h1 >are you Want to dleat :{name}</h1>
      <button onMouseDown={aler}>yes</button>
      
    </div>
  )
}

  return (
    <>
     
<Links/>
<div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {
     
          data.map((item,i)=>
         
          <Card key={i} style={{ width: '18rem', paddingLeft:"10px" }}>
          <h1 >{item.name}</h1>
          <div style={{display:"flex",width:"100%", gap:"10px"}}>
          <Link style={{width:"30%"}} to={"/user/"+item.name+"/"+item.price+"/"+item.company} ><button style={{width:"100%"}} >Open</button></Link> 
          <button style={{width:"30%"}} onClick={()=>DataDleat(item.name,item.price,item._id)} >Dleat</button>
          <button style={{width:"30%"}}  onClick={()=>EditData(item.name,item.price,item.company,item.createdAt,item.featured,item.rating,item._id)}>Edit</button>
          </div>
          </Card>
         
         
          )
         }
       {
        state?<Swodata/>:null
       }

       {/* updata karna ke lea  */}
          {
            newState? <><div >
            <input style={{width:"100%"}} type="text" value={name} onChange={(e)=>setname(e.target.value)} /><br />
            <select style={{width:"100%"}} value={company} onChange={(e)=>setCompany(e.target.value)}>
              <option> apple</option>
              <option> samsung</option>
              <option> mi</option>
              <option> dell</option>
            </select> <br/>
            <input style={{width:"100%"}}  type="text" value={price} onChange={(e)=>setNewprice(e.target.value)} /><br />
            <input  style={{width:"100%"}} type="checkbox" defaultChecked={feature}  onClick={()=>setfeature(!feature)}/><br />
          <button onClick={updatedata} >Update</button>
          </div>
            </>:null
          }
         </div>
    </>
  );
}
export default Data;