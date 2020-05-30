import React from 'react';
import { RiMailLine, RiCloseLine } from "react-icons/ri";

import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function MyModal(props) {
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div style={{
          padding: '20px',
          background: '#fff',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          justifySelf: 'center',
          border: '3px solid black'
        }}>
          <RiCloseLine onClick={props.onClose} size="30" className=" top-right" /><br /> <br />
          <RiMailLine size="50" className="mb-4" />< br />

          {props.children}
          <hr />
          <form>
            <input type="email" placeholder="Enter your email" /><br /><br />
            <button onClick={props.onClose} className="btn btn-black">
              <small>
                Subscribe
                </small>
            </button>
          </form>

        </div>

      </div>
    </>,
    modalRoot
  );
}

export default MyModal;
