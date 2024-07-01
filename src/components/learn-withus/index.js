import {learnData1,learnData2,learnData3}  from "../../jsonData"
import "./index.css"


const LearnWithUs = ()=>{
  return(
    <div className="why-choose-us-container">
        <h1 className="why-choose-us-heading">What will you Learn in ACCA?</h1>
        <div className="learn-acca-container">
            <div className="each-learn-acc-item">
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">Knowledge Level</h2>
                </div>
           
                <ul className="unordered-learn-acca">
                    
                    {learnData1.map(eachItem=>(
                    <li className="each-learn-list-item">{eachItem}</li>))}
                
                    
                </ul>
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">3 papers</h2>
                </div>
            </div>
            <div className="each-learn-acc-item">
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">Skill Level</h2>
                </div>
           
                <ul className="unordered-learn-acca">
                    
                    {learnData2.map(eachItem=>(
                    <li className="each-learn-list-item">{eachItem}</li>))}
                
                    
                </ul>
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">6 papers</h2>
                </div>
            </div>
            <div className="each-learn-acc-item">
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">Professional Level</h2>
                </div>
           
                <ul className="unordered-learn-acca">
                    
                    {learnData3.map(eachItem=>(
                    <li className="each-learn-list-item">{eachItem}</li>))}
                
                    
                </ul>
                <div className="learn-acc-heading-container">
                <h2 className="learn-acc-heading">4 papers</h2>
                </div>
            </div>
           
        </div>
    </div>
  )
}




export default LearnWithUs