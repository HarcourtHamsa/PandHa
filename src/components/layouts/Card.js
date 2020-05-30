import React from 'react';

function Card (props) {
  return (
    <React.Fragment>
      <div className="card p-0 border-0">
        <div className="card-img-top">
          {props.img
            ? <img src={props.img} alt="pic" className="card-img-top" />
            : null}
        </div>
        <div className="p-3">
          <p>{props.icon}</p>
          <h5>{props.title}</h5>
          <p className="mt-3 text-muted small">{props.body}</p>
          <a href={props.href} className="mt-3 small">{props.linkName}</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
