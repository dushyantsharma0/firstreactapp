import {useParams} from "react-router-dom"
import {Routes,Route, Link } from "react-router-dom"

function Detail(){
    const params=useParams()
    const{name}=params
    const {price}=params
    const {company}=params
    return(
        <>
        <h1> Product Name: {name}</h1>
        <h2>Price:{price}</h2>
        <h3>company:{company}</h3>
        <Link to="/data">BACK</Link>
        
        </>

    )
}
export default Detail