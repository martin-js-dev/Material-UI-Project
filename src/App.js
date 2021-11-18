import React from 'react';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'



const App = () => {
    return ( 
        <Container>
        <div className="App">
            <Typography variant="h4">Welcome to my Material UI site</Typography>
            <Button variant="contained" color="primary">Hello</Button>
            
        </div>
        </Container>
     );
}
 
export default App;

