import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { useUserContext } from '../../context/UserContext';
import Modal from '@mui/material/Modal';

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Register = ({open, closeModal}) => {
  const{register, error} = useUserContext();
  const initialValues={
    email: '',
    password: ''
  }

  const onSubmit = (values)=>{
    register(values.email, values.password)
  }

  return (
    <Modal open={open} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width: 600,bgcolor: 'background.paper', boxShadow: 24,p: 4,}}>
      <h2 id="modal-modal-title">Register</h2>
      
      <Formik initialValues={initialValues} validationSchema={RegisterSchema}  onSubmit={onSubmit} autocomplete="off">
      {({ errors, touched }) => (
        <Form>
          {error && <p>{error}</p>}
          <Field
            name="email"
            as={TextField}
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <ErrorMessage name="email" />
          <br />
          <Field
            name="password"
            as={TextField}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="password" />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">Register</Button>
        </Form>
      )}
    </Formik>
    </Box>
   </Modal>
  )
}

export default Register
