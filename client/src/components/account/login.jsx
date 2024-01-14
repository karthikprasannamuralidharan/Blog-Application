import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

// Component styling and layout
const Component = styled(Box)`
    width: 400px; // Set the width of the box to 400px
    margin: auto; // Center the box horizontally
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6); // Add a slight border-like shadow
    margin-top: 64px; // Add space at the top
`;

// Logo styling
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
});

// Wrapper styling for content
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px; // Add margin between elements
    }
`;

// Login button styling
const LoginButton = styled(Button)`
    text-transform: none;
    height: 48px;
    border-radius: 2px;
    background-color: #FB641B;
    color: #ffff;
`;

// Text styling
const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
`;

// SignUp button styling
const SignUpButton = styled(Button)`
    text-transform: none;
    height: 48px;
    border-radius: 2px;
    background-color: #ffff;
    color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 0.2);
`;

const SignUpInitialValues = {
    name: '',
    username: '',
    password: ''
}

// Main Login component
const Login = () => {

    // URL for the logo image
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    // State to manage the current account state (login or signup)
    const [account, toggleAccount] = useState('login');

    const [signUp, setSignUp] = useState(SignUpInitialValues);

    // Function to toggle between 'login' and 'signup'
    const toggleSignUp = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    // Function to log input changes
    const OnInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value});
        // console.log({[e.target.name]: e.target.value});
    }
    
    return(
        <Component>
            <Box>
                {/* Logo */}
                <Image src={imageURL} alt="login_logo" />
                
                {/* Conditional rendering based on account state */}
                {account === 'login' ?
                    // Login Form
                    <Wrapper>
                        <TextField variant='standard' label='Enter Username'/>
                        <TextField variant='standard' label='Enter Password'/>
                        <LoginButton variant='contained'>Login</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignUpButton onClick={() => toggleSignUp()}>Create an account</SignUpButton>
                    </Wrapper>
                    :
                    // Signup Form
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => OnInputChange(e)} name='name' label='Enter Name'/>
                        <TextField variant='standard' onChange={(e) => OnInputChange(e)} name='Username' label='Enter Username'/>
                        <TextField variant='standard' onChange={(e) => OnInputChange(e)} name='Password' label='Enter Password'/>
                        <LoginButton variant='contained'>Sign up</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignUpButton onClick={() => toggleSignUp()}>Already have an account</SignUpButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    );
}

export default Login;
