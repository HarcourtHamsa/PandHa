import React from 'react';
import Card from './Card';
import img from '../../images/yancy-min-EzSyFRfNP_c-unsplash.jpg';
import img2 from '../../images/you-x-ventures-0K7GgiA8lVE-unsplash.jpg';

function NewsList () {
  return (
    <React.Fragment>
      <div className="bg-light" id="news">
        <div className="container">
          <h5 className="pt-3 text-center">Lastest News</h5>
          <div className="row">
            <div className="col-xl-6">
              <Card
                img={img}
                title="Westberg White Educational Foundation 2019 Golf Invitational"
                body="
                For the second year in a row, the Westberg White Educational
                 Foundation held a golf invitational to raise money to support 
                 its purpose of providing high school and community college
                 students with much-needed scholarships. Both years' events h
                 ave been held in Yorba Linda at ..."
                linkName="Learn more"
                href="/"
              />
            </div>
            <div className="col-xl-6">
              <Card
                img={img2}
                title="Meet Jason & Jesse"
                body="
                At KNA Structural Engineers, we believe quality
                 employees are our most valuable asset. We are 
                 so fortunate to have such talented and diligent
                  people on our team! Take a moment to
                 get to know two of them —Jason Smith and Jesse
                  Hamilton. Why did you choose structural ..."
                linkName="Learn more"
                href="/"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewsList;
