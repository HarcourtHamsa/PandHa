import React, { useState } from 'react';
import Modal from './Modal';

function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setModalIsOpen(true)
    console.log("Modal is open from footer")
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      {modalIsOpen
        ? <Modal onClose={closeModal} avoidEmail={true}>
          <h5>You've successfully subscribed  <br /> to our newsletter!</h5><br />

        </Modal>
        : null}

      <div className="footer small" id="footer">
        <hr />
        <div className="container p-5">
          <div className="row">
            <div className="col-xl-6">
              <h5 className="mb-5"> CAD Design and Structural</h5>
              <p className="text-muted">
                A108 Adam Street
                New York, NY 535022
                United States
              </p>
              <p className="text-muted">
                <b>Phone: </b>+1 5589 55488 55
              </p>
              <p className="text-muted">
                <b>Email: </b>nfo@example.com
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mb-5">Join Our Newsletter</p>
              <p className="text-muted">
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
              </p>
              <form onSubmit={openModal}>
                <input type="email" placeholder="Enter email" required/><br /><br />
                <button className="btn btn-blue">
                  <small>Subscribe</small></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
