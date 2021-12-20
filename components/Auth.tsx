
import {useStore } from '../lib/store';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';
import { authStore } from '../lib/authStore';

  
const Auth = () => {

  const { authView } = authStore();
  return (
  <>
       {
          authView === 'sign_in' ? (<SignIn/>) : (<SignUp/>) 
      }
      </>
     )
     
}

export default Auth