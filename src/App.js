import React from 'react';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Image from '@material-ui/core/Image'


const App = () => {
    return ( 
        <Container>
        <div className="App">
            <Typography variant="h4">Welcome to my Material UI site</Typography>
            <Button variant="contained" color="primary">Hello</Button>
            <Image ><img
        src={`${burger.png}?w=164&h=164&fit=crop&auto=format`}
     
      /></Image>
        </div>
        </Container>
     );
}
 
export default App;

