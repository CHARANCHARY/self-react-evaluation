import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./index.css"


const Preapre = ()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="banner-container">
        <div className="kick-off-container">
            <h1 className="banner-heading add-styles">Kick off your ACCA prep journey with IndigoLearn</h1>
            <p className="banner-para">Sign In and get instant access of our FREE courses</p>
            <button className="download-brochure learning-button add-button-style">Sliver Learning partner</button>
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

export default Preapre