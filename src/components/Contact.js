import React from 'react'
import InfoBox from './layouts/InfoBox';
import NavBar from './layouts/NavBar';
import FloatingBtn from './layouts/FloatingBtn';
import Footer from './layouts/Footer';

function Contact() {
    return (
        <React.Fragment>
            <InfoBox />
            <NavBar />
            <FloatingBtn />
            <div className="p-5 bg-light">
                Contact us
            </div>
            <div className="container p-3">
                <div className="">
                    <form className="p-3 card">
                        <input type="text" placeholder="What's your name?" /><br /><br />
                        <input type="text" placeholder="Subject" /><br /><br />
                        <textarea rows="10" cols="20" placeholder="Enter message" />< br /><br />
                        <button type="submit" className="btn btn-black">Send message</button>
                    </form>
                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Contact
