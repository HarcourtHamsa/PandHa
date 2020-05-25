import React from 'react';

function InfoBox () {
  return (
    <React.Fragment>
      <div
        className="alert alert-info alert-dismissible fade show mb-0"
        role="alert"
      >
        <div className="container small">
          The impacts of COVID-19 and related market volatility have led to
          increased client inquiries. We created a Top FAQs page that answers your
          most pressing questions, making it easy for you to stay up-to-date and
          quickly service your needs online.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoBox;
