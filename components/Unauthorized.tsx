import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'




const Unauthorized = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: 250 }}>
          <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
                <h1>Unauthorized Access....</h1>
                <Link style={{ color: 'red', fontSize: 25 }} href="/">Please Sign In</Link>
          </Box>
             
        </Container>  
    )
}

export default Unauthorized
