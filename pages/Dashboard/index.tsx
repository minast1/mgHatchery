import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useStore } from '../../lib/sessionStore';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'
import Copyright from '../../components/Copyright';
import Main from '../../components/Main';
import Invoice from '../../components/Invoice';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  searchForm: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: 300 
    },
    width: 500,
    border: '1px solid lightgray',
    borderRadius : 5
  },
  iconButton: { padding: 10 },
  input: {
  
    "& input:focus $searchForm": {
             border: '1px solid yellow'
       },
    marginLeft: theme.spacing(1),
    flex: 1 ,
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const router = useRouter()
   
  return (
    <div className={classes.root}>
        <Layout/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
              <Main /> 
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async(
    context: GetStaticPropsContext
) => {
    return {
        props: {
            protected: true
        }
    }
}

   