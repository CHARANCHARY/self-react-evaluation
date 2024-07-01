import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BannerData} from "../../jsonData"
import "./index.css"


const ACCSsection = ()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="banner-container">
        <div className="banner-text-container">
            <h1 className="banner-heading">Become ACCA in 18 months</h1>
            <p className="banner-para">Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs &amp; Big4s.</p>
            <ul className="unordered-banner-items">
              {BannerData.map(eachItem=>(
                <li className="banner-item">
                  <img src={eachItem.imageUrl} alt={eachItem.text} className="each-banner-image"/>
                  <div className="banner-list-text">
                    <h2 className="each-banner-text">{eachItem.text}</h2>
                    <p className="count">{eachItem.count}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="banner-buttons">
              <button className="download-brochure">Download Brochure</button>
              <button className="download-brochure learning-button">Sliver Learning partner</button>
            </div>
        </div>
       
        <div className="banner-form-container">
           <h2 className="form-heading">Aspiring to be an ACCA?</h2>
                <form className="form-container">
                  <input placeholder="Name" className="form-control mb-3"/>
                  <input type="email" placeholder="Email ID" className="form-control mb-3"/>
                  <input type="number" placeholder="Mobile" className="form-control mb-3"/>
                  <input type="text" placeholder="Address" className="form-control mb-3"/>
                  <button className="request-button" type="button" onClick={handleShow}>Request Call Back</button>
          

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Hello,</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We will get back u as soon as possible!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </form>
        </div>
        
    </div>
  )
}

export default ACCSsection