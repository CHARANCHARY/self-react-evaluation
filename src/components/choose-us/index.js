import {chooseUsData}  from "../../jsonData"
import "./index.css"


const WhyChooseUs = ()=>{
  return(
    <div className="why-choose-us-container">
        <h1 className="why-choose-us-heading">Why Choose Us</h1>
        <ul className="unordered-choose-us">
            {chooseUsData.map(eachItem=>(
                <li className="each-choose-us-item">
                    <img src={eachItem.imageUrl} alt={eachItem.title} className="each-choose-us-image"/>
                    <h2 className="each-choose-us-title">{eachItem.title}</h2>
                    <p className="each-choose-us-description">{eachItem.description}</p>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default WhyChooseUs