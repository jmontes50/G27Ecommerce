import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const { user } = useContext(AuthContext);

  if(user === null){ //si es que no esta logueado
    return <Navigate to="/login" replace={true} />
  }else{
    //en caso si este logueado, retornamos lo que este dentro de este componente
    return children;
  }
}

export default ProtectedRoute