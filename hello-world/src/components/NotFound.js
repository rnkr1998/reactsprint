import React from 'react';
import { Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core';

const NotFound = () => (
    <div>

<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
  <Typography variant="h2" component="h2" color='red'>
 404! Page Not Found
</Typography>
  </Grid>   

</Grid> 

   
    </div>
);

export default NotFound;