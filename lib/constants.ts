import * as yup from 'yup';

//export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
//export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const DEFAULT_AVATARS_BUCKET = 'avatars'

export type Profile = {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}

export type IFormInput = {
  email: string 
  password: string | number
  callbackUrl? : string
}

export type AuthState = {
    authView: string
    setAuthView: (to:string) => void
    //userId: string | number 
   // password: string
    loading: boolean
    error: string | string[] | undefined
};

export const registerSchema = yup.object({
 // name: yup.string().required('The name field is required'),
  email: yup.string().email('You must provide a valid email address').required('Email field is required'),
  password: yup.string().required('Password field is required'),
  //phone: yup.string().required('The phone field is required').length(10, 'phone number must be 10 digits'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Password mismatch!').required('Password field is required')
})

export const loginSchema = yup.object({
 // name: yup.string().required('The name field is required'),
  email: yup.string().email('You must provide a valid email address').required('Email field is required'),
  password: yup.string().required('Password field is required'),
  //phone: yup.string().required('The phone field is required').length(10, 'phone number must be 10 digits'),
  //passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'password mismatch!').required('This field is required')
})