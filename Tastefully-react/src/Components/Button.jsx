import { Link } from "react-router-dom";
import Detail from "./Detail";

function Button(){

    return(

        <Link to="/details" element={<Detail/>}> <button>Go to Details</button></Link>
    )
}



export default Button