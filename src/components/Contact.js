import React, { useState } from 'react'
import InfoBox from './layouts/InfoBox';
import NavBar from './layouts/NavBar';
import FloatingBtn from './layouts/FloatingBtn';
import Footer from './layouts/Footer';
import Modal from "./layouts/Modal"

function Contact() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleFormSubmit = (e) => {
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
                    <h5>Thank You For Reaching Out To Us</h5><br />
                    <p className="text-muted mt-4">We'll give you a feedback within 24 hours</p>

                </Modal>
                : null}

            <InfoBox />
            <NavBar />
            <FloatingBtn />
            <div className="p-5 bg-light">
                Contact us
            </div>
            <div className="container p-3">
                <div className="">
                    <form className="p-3 card" onSubmit={handleFormSubmit}>
                        <input required type="text" placeholder="What's your name?" /><br /><br />
                        <input required type="text" placeholder="Subject" /><br /><br />
                        <textarea required rows="10" cols="20" placeholder="Enter message" />< br /><br />
                        <button type="submit" className="btn btn-dark text-white">Send message</button>
                    </form>
                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Contact
