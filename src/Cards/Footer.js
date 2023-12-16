import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.7)', // Use RGBA with alpha value
    color: 'white',
    textAlign: 'center',
  };


  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://instagram.com/ankurchoudhary04">
          Ankur Choudhary
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
// TODO remove, this demo shouldn't need to reset the theme.

export default function StickyFooter() {
  return (
        <div>
              <Container style={footerStyle}>
            <Typography>
            This website is build By @Ankur Choudhary 
            </Typography>
            <Copyright />
          </Container>
        </div>
  );
}