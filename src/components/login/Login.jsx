import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useUserContext } from '../../context/UserContext';
import { authWithGoogle, loginWithEmailAndPassword } from '../../auth/firebase';
import {toast} from 'react-toastify'


 const LoginSchema = Yup.object().shape({
  fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('FullName is required'),
   password: Yup.string()
     .min(6, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Password is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
 });

const Login = ({open, closeModal})=>{
  const{setUser} = useUserContext();
  const[error, setError] = useState(null)

  const onSubmit = async (values)=>{
    try {
      const data = await loginWithEmailAndPassword(values.email,values.password);
      setError(null)
      setUser(data.user)
      toast.success("Successfully logged in!")
      closeModal()
    } catch (error) {
      setUser(null)
      setError(error.message)
    }
  } 

  const onGoogleAuth = async ()=>{
    try {
      const data = await authWithGoogle();
      setError(null)
      setUser(data.user)
      toast.success("Successfully logged in!")
      closeModal()
    } catch (error) {
      setUser(null)
      setError(error.message)
    }
  }

  return (
    <Modal open={open} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width: 600,bgcolor: 'background.paper', boxShadow: 24,p: 4,}}>
      <h2 id="modal-modal-title">Login</h2>
      <Formik initialValues={{
        password: '',
        email: '',
      }}
      validationSchema={LoginSchema}
 
      onSubmit={onSubmit}>
      
     {({ errors, touched }) => (
      <Form method='post'>
        {error && <p>{error}</p>}
      <Field
        name="email"
        as={TextField}
        type="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.email && touched.email}
        helperText={touched.email && errors.email}
      />

      <Field
        name="password"
        as={TextField}
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.password && touched.password}
        helperText={touched.password && errors.password}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      <Button onClick={onGoogleAuth} variant="contained" color="primary" fullWidth>Login with Google</Button>
      </Form>
    )}

    </Formik>
    </Box>
   </Modal>
  );
}

export default Login;