import Head from 'next/head'
import type { AppProps } from 'next/app'
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../lib/theme';
import { AuthSession } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient';
import { Container } from '@material-ui/core'
import { Provider , createStore} from '../lib/store'
import {useStore} from '../lib/sessionStore'
import router from 'next/router'



function MyApp({ Component, pageProps }: AppProps) {
// const [session, setSession] = React.useState<AuthSession | null>(null)
  const Usession = useStore(state => state.Usession)
  const setSession = useStore(state => state.setSession)
  
  React.useEffect(() => {
    const userSession = supabase.auth.session();
      
    if (!userSession) {
            router.push('/')
    } else {
     // router.push('/Dashboard')
      setSession(userSession)
     }
    
    supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
       if (!session) {
            router.push('/')
       } else {
           router.push('/Dashboard')
           setSession(session)
       }
      
    })

  }, [])

  React.useEffect(() => {
       // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    }, [])
  

    if (pageProps.protected && !Usession) {
      return (
        <Container maxWidth="xs" style={{marginTop : 170}}>
              <h1>Unauthorized!....</h1>
        </Container>
      )
      
    }
  
  return (
     <Provider createStore={createStore}>
   <React.Fragment>
 <Head>
    <title>My App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
   <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
         </ThemeProvider>
        </React.Fragment>
        </Provider>  
  )
}




export default MyApp
