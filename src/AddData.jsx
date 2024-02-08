import { useState } from "react"
import Links from "./Links"

function AppData(){
    const [name , setName ] = useState("");
    const [company , setCompany ] = useState("apple");
    const [price , setPrice ] = useState("");
    const [feature , setFeature ] = useState(false);
   
   function Save(){
    let url="https://newa-kohl.vercel.app/"
    
    let data={name,price,feature,company}
     fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
     }).then((resp)=>{
        console.log(resp)
     })
     setCompany("")
     setName("")
     setPrice("")
     setFeature(false)
     
   }
//    {
//     "name":"copy pical 2",
//     "price":2000,
//     "featured":true,
//     "company":"apple"
// }
    return(
        <>
        <Links/>
        <div style={{margin:"0px auto",backgroundColor:"white", width:"300px"}}>

         
        <input onChange={(e)=>setName(e.target.value)} value={name} style={{width:"100%"}} placeholder="Product name"  type="text" /> <br />
        <span>select Company</span>
        <select style={{width:"100%"}} onChange={(e)=>setCompany(e.target.value)} >
            <option > apple</option>
            <option > samsung</option>
            <option > mi</option>
            <option > dell</option>
        </select>
        
        <input checked={feature} onChange={()=>setFeature(!feature)} type="checkbox"/><span>Featured</span>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} style={{width:"100%"}} placeholder="price" type="number" /><br />
        <button onClick={Save} style={{width:"100%"}}>save data</button>

        </div>
        </>
    )
}
export default AppData