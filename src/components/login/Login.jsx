import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import Modal from '@mui/material/Modal';


 const LoginSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('First Name is required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Last Name is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
 });

const Login = ({open, closeModal})=>{
  return (
    <Modal open={open} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width: 600,bgcolor: 'background.paper', boxShadow: 24,p: 4,}}>
      <h2 id="modal-modal-title">Login</h2>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={LoginSchema}

      onSubmit={()=>{}}>

     {({ errors, touched }) => (
      <Form>
      <Field
        name="firstName"
        as={TextField}
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.firstName && touched.firstName}
        helperText={touched.firstName && errors.firstName}
      />
      <Field
        name="lastName"
        as={TextField}
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.lastName && touched.lastName}
        helperText={touched.lastName && errors.lastName}
      />
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
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Form>
    )}

    </Formik>
    </Box>
   </Modal>
  );
}

export default Login;