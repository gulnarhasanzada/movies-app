import React from 'react';
import Modal from '../../components/Modal';

const Login = ({open, closeModal})=>{
  return (
      <Modal open={open} closeModal={closeModal}  title="Login">
        <h1>hello</h1>
      </Modal>
  );
}

export default Login;