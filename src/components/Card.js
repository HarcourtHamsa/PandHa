import React from 'react';

function Card (props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-img-top">
          {props.img
            ? <img src={props.img} alt="pic" className="card-img-top" />
            : null}
        </div>
        <p>{props.icon}</p>
        <h5>{props.title}</h5>
        <small>{props.body}</small>
        <a href={props.href} className="mt-3 small">{props.linkName}</a>
      </div>
    </React.Fragment>
  );
}

export default Card;
