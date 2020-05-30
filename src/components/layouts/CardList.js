import React from 'react';
import Card from './Card';
import {
  RiWallet3Line,
  RiCompasses2Line,
  RiBarChartBoxLine,
} from 'react-icons/ri';

function CardList () {
  return (
    <React.Fragment>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <Card
                icon={<RiWallet3Line size="50" color="#fccd04" />}
                title="Build on your terms"
                body="At PandHa, you are our priority. Let's make your dream come
                true and guess what? It's on your terms."
              />
            </div>
            <div className="col-xl-4">
              <Card
                icon={<RiCompasses2Line size="50" color="#fccd04" />}
                title="Full service engineering"
                body="We use the best enginerring practices to
                 build and furnish your home to give you that touch of class."
              />
            </div>
            <div className="col-xl-4">
              <Card
                icon={<RiBarChartBoxLine size="50" color="#fccd04" />}
                title="Consultation"
                body="Are you worried about your dream home? Why not speak to a counsultant"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardList;
