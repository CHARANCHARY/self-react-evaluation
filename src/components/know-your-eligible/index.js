import  {eligibleData} from "../../jsonData"
import "./index.css"


const Eligblity = ()=>{
    return(
     <ul className="unordered-eligblity-container">
        {eligibleData.map(eachItem=>(
            <li className="each-eligblity-item">
                 <h4 className="each-eligblity-title">{eachItem.title}</h4>
               
                <div className="eligble-text-container">
                    <img src={eachItem.imageUrl} alt={eachItem.title} className="each-eligble-image"/>
                    <p className="each-eligblity-para">{eachItem.content}</p>
                </div>
            </li>
        ))}
     </ul>
    )
}
export default Eligblity