import React from 'react';
import {RiMailSendLine} from 'react-icons/ri';

function FloatingBtn () {
  return (
    <React.Fragment>
      <div className="floating-btn p-4  shadow">
        <RiMailSendLine /> Contact us
      </div>
    </React.Fragment>
  );
}

export default FloatingBtn;
