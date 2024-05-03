import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'


const PrivateRouter = () => {
  const { currentUser } = useUserContext()

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRouter