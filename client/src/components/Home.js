import React, { Component } from 'react';
import { 
  Header,
  Container,
  Segment,
  Divider,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header textAlign='center' as='h1' style={styles.welcome_header}>Utah Wedding Receptions</Header>
        {/* <Image rounded src={welcome_bg} style={styles.welcome_img} /> */}
        <Segment color='inverted teal' style={styles.welcome_options}>
          <Header as='h5'>Ready to tie the knot?</Header>
          <Link to='/Login'>
          <Button primary fluid>Login</Button>
          </Link>
            <Divider horizontal>Or</Divider>
          <Link to='/Register'>
            <Button secondary fluid>Sign Up Now</Button>
          </Link>
        </Segment>
      </Container>
    );
  }
}

const styles = {
  welcome_img: {
    position: 'fixed',
    top: 125,
    left: 17,
    height: 500,
    borderRadius: 40,
    opacity: 0.9,
    minWidth: 900
  },
  welcome_header:{
    marginTop: 15,
    fontSize: 50
  },
  welcome_options:{
    position: 'fixed',
    right: 100,
    width: 300
  }
}

export default Home;
