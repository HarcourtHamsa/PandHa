import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function FloatingBtn() {
  return (
    <React.Fragment>
      <div className="floating-btn p-4  small ">
        <Link to="/contact" className="text-white">
          <RiMailSendLine /> Contact us
        </Link>

      </div>
    </React.Fragment>
  );
}

export default FloatingBtn;
