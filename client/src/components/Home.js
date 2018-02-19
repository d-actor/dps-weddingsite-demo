import React, { Component } from 'react';
import { 
  Header,
  Container,
  Segment,
  Divider,
  Button,
  Image,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Wed1 from '../images/wed1.jpeg';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header textAlign='center' as='h1' style={styles.welcome_header}>Utah Wedding Receptions</Header>
          <Image rounded src={Wed1} style={styles.welcome_img} />
          <Segment color='inverted teal' style={styles.welcome_options}>
            <Header as='h5' textAlign='center'>Ready to tie the knot?</Header>
            <Link to='/Login'>
            <Button primary fluid>Login</Button>
            </Link>
              <Divider horizontal>Or</Divider>
            <Link to='/Register'>
              <Button secondary fluid>Sign Up Now</Button>
            </Link>
          </Segment>
        </Container>
        <Menu inverted style={styles.footer} >
          <Menu.Item style={styles.footer_item} >
            DevPoint Studios | 2018
          </Menu.Item>
        </Menu>
      </div>
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
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'teal',
    textAlign: 'center',
  },
  footer_item:{
    marginLeft: window.innerWidth / 2.5
  },
}

export default Home;
