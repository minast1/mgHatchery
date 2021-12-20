import Auth from '../components/Auth'
import { Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
//import Layout from '../components/Layout';
import { Provider , createStore} from '../lib/store'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '95vh',
    //backgroundColor: 'grey'
    
   backgroundColor: theme.palette.grey[200],
    //marginTop: -20
  }
}))
export default function Home() {
  const classes  = useStyles() 
 

  return (
    <Container maxWidth={false} disableGutters>
        
           <Auth />
      {/*<Layout/>*/}
    </Container>
  )
}
