import React from "react";
import { 
  Container,
} from '@material-ui/core'

import mainPic from './images/mainPic.jpg'
import Header from "./components/Posts/Header/Header";
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    <Container>
      <Header />
      <img className={classes.image} src={mainPic} alt='traveller looking at mountains'/>
    </Container>
  );
}

export default App;
