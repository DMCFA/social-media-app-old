import React from "react";
import { 
  Container,
  Grow,
  Grid
} from '@material-ui/core'

import mainPic from './images/mainPic.jpg'
import Header from "./components/Posts/Header/Header";
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    <Container className={classes.body}>
      <Header />
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={4}>
                
              </Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
  );
}

export default App;
