import Container from '@material-ui/core/Container'
import  Box from '@material-ui/core/Box'

import React from 'react'

const Loading = () => {
    return (
         <Container maxWidth="xs" style={{ marginTop: 170 }}>
          <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
              <h1>Loading!....</h1>
          </Box>
             
        </Container>   
    )
}

export default Loading
