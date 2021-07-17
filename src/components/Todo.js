import { useState } from 'react';

import { Backdrop } from './Backdrop';
import { Modal } from './Modal';

export const Todo = (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  }

  const deleteHanndler = () => {
    setModalIsOpen(true);
  };

  const { text } = props;
  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHanndler}>DELETE</button>
      </div>
      { modalIsOpen && (<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />)}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};
