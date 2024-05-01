import React from 'react'
import {Navigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const PrivateRouter = ({
    user,
    redirectPath = '/',
    children,
  }) => {
    if (!user) {
      toast.warning("Please login to see details!")
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
}

export default PrivateRouter