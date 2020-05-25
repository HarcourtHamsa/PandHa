import React from 'react';
import Card from './Card';
import {RiWallet3Line, RiCompasses2Line, RiBarChartBoxLine} from 'react-icons/ri';

function CardList () {
  return (
    <React.Fragment>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <Card
                icon={<RiWallet3Line size="30" color="#fccd04"/>}
                title="Build on your terms"
                body="Card body should contain something"
              />
            </div>
            <div className="col-xl-4">
              <Card
                icon={<RiCompasses2Line size="30" color="#fccd04"/>}
                title="Full ervice engineering"
                body="Card body should contain something"
              />
            </div>
            <div className="col-xl-4">
              <Card
              icon={<RiBarChartBoxLine size="30" color="#fccd04"/>}
                title="Consultation"
                body="Card body should contain something"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardList;
