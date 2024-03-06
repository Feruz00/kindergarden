import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Loader from "./Loader"
import { useCurrentUser } from "../services/useAuth"

interface Props{
    children: React.ReactNode
}
const ProtectedRoute:React.FC<Props> = ({children}) => {
    const {isLoading, isAuthenticated} = useCurrentUser()
    const navigate = useNavigate()
  
    useEffect( ()=>{
        if(!isAuthenticated && !isLoading) navigate('/login', {replace: true})
    },[isAuthenticated, navigate, isLoading] )
  
    if(isLoading) return <Loader />
  
    if(isAuthenticated) return (
        children
    )
}

export default ProtectedRoute