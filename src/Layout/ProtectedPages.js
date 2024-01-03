import React from 'react'
import { Navigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
function ProtectedPages({ children }) {
    const {token, setToken} = useToken();
  
    if (!token) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login"  />;
    }
  
    return children;
  }
  
// function ProtectedPages() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default ProtectedPages
