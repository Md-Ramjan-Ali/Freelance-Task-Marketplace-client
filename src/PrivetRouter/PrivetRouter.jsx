import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Loading/Loading';


const PrivetRouter = ({children}) => {

  const { user, loading } = use(AuthContext);



  if (loading) {
    return <Loading></Loading>
  }

  if(!user){
   return <Navigate to="/auth/login"></Navigate>;
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivetRouter;