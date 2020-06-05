import React from 'react'
import InfoBox from './layouts/InfoBox';
import NavBar from './layouts/NavBar';

import anny_img from "../images/anny.jpg"
import cooper_img from "../images/cooper.jpg"
import ellen_img from "../images/ellen.jpg"
import Card from './layouts/Card';
import FloatingBtn from './layouts/FloatingBtn';
import Footer from './layouts/Footer';

function About() {
    return (
        <React.Fragment>
            <InfoBox />
            <NavBar />
            <FloatingBtn />
            <div className="p-5 bg-light">
                Meet the Team
            </div>
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-xl-4">
                    <Card 
                    img={anny_img} 
                    title="Catherine Anna Dawn, CEO/Owner" 
                    body=" Introducing Anna! She grew up with an enterprising
                    father named Dawn. You can guess where our namesake came
                    from! With the same entrepreneurial spirit & big dreams
                     as her dad, Anna has carved out a successful niche in
                     our little city. Her favorite things in life are simple
                      pleasures, like a good fire & well curated poetry.
                    She is a proud mother to three exceptional girls &
                    believes in living a well styled, meaningful life." />
                    </div>
                    <div className="col-xl-4">
                    <Card 
                    img={cooper_img} 
                    title="Jenneil Cooper, Manager of Interior Decorating" 
                    body=" Meet Jenneil. She is the heartbeat of SAM & someone you 
                    always want on your team! Her easygoing nature goes hand in hand
                     with her cool, coastal style. Blessed with the instincts of good 
                     design, she has the ability to find inspiration in all surroundings. 
                     Jenneil can make something from nothing & turn any situation around! 
                     She is an avid hiker with her dog Pokey, & finds her happiness through
                      the great outdoors, good music, & laughter with friends." />
                    </div>
                    <div className="col-xl-4">
                    <Card 
                    img={ellen_img} 
                    title="Ellen Squires, Manager of Retail" 
                    body=" Ellen enjoys a bold lip, Frank Sinatra, good red wine
                     & the Northern Lights. She thrives on multitasking and ensuring
                      that people have exactly what they need exactly when they need it.
                     Her deep roots in the renowned hospitality industry of St. John’s 
                     anchor her here...for now." />
                    </div>
               </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About
