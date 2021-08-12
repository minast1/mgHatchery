
import {useStore } from '../lib/store';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';
import { Container } from '@material-ui/core';
  
const Auth = () => {

  const { authView } = useStore();
  return (
  <>
       {
          authView === 'sign_in' ? (
   <SignIn/>
         ) : authView === 'sign_up' ? (
             <SignUp/>
           ) : authView === 'forgotten_password' ? (
               <PasswordReset/>
    ) : null
      }
      </>
     )
  
    

     
}

export default Auth