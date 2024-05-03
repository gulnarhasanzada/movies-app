import * as Yup from 'yup';
import { Formik, Form, Field} from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { useUserContext } from '../../context/UserContext';
import { useState } from 'react';

const RegisterSchema = Yup.object().shape({
  displayName: Yup.string()
    .min(2, 'Too Short!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Register = () => {
  const{createUser, signUpProvider} = useUserContext();
  const[error, setError] = useState(null);

  const initialValues={
    email: '',
    password: '',
    displayName: ''
  }

  const onSubmit = async (values)=>{
    try {
      await createUser(values.email,values.password, values.displayName);
      setError(null)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width: {xs: '90vw', md:600},bgcolor: 'background.paper', boxShadow: 24,p: 4,}}>
      <h2 id="modal-modal-title">Register</h2>
      
      <Formik initialValues={initialValues} validationSchema={RegisterSchema}  onSubmit={onSubmit} autocomplete="off">
      {({ errors, touched }) => (
        <Form>
          {error && <p>{error}</p>}
          <Field
            name="displayName"
            as={TextField}
            type="text"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={errors.displayName && touched.displayName}
            helperText={touched.displayName && errors.displayName}
          />
          <br />
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
          <br />
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
          <br />
          <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
          <Button onClick={signUpProvider} variant="contained" color="secondary" fullWidth sx={{mt:2}}>Continue With Google</Button>
        </Form>
      )}
    </Formik>
    </Box>
  )
}

export default Register
