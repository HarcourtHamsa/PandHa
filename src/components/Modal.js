import React from 'react';
import Modal from 'react-modal';
import {RiMailUnreadLine} from 'react-icons/ri';
import ReactDOM from 'react-dom';

function MyModal (props) {
  return ReactDOM.createPortal (<h1>Hello</h1>,  document.getElementById ('modal-root') );
}

export default MyModal;
