import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { useUserContext } from '../../context/UserContext';

const LoginSchema = Yup.object().shape({
   password: Yup.string()
     .min(6, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Password is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
 });

const Login = ()=>{
  const{signUpProvider, signIn} = useUserContext();
  const[error, setError] = useState(null)

  const onSubmit = async (values)=>{
    try {
      await signIn(values.email,values.password);
      setError(null)
    } catch (error) {
      setError(error.message)
    }
  } 
  
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    width: {xs: '90vw', md:600},bgcolor: 'background.paper', boxShadow: 24,p: 4,}}>
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
      <Button onClick={signUpProvider} variant="contained" color="secondary" fullWidth sx={{mt:2}}>Login with Google</Button>
      </Form>
    )}

    </Formik>
    </Box>

  );
}

export default Login;