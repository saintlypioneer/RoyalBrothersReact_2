import { useToast } from '@chakra-ui/react';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../organisms/authPage/login';
import Signup from '../organisms/authPage/signup';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Auth(props){

    // checking if the path is for signup
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    const isSignup = (type=="signup")?true:false;
    console.log(isSignup);

    // toast
    const toast = useToast();
    const {isError, email, isLoading} = useSelector(state=>state.user);
    if (isError){
        toast({
            title: 'Error creating/validating user',
            description: "Do you already have an account?",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: "bottom-right"
        });
    }
    else if (email!="" && isLoading==false){
        // data fetched and validated
        toast({
            title: 'User logged in',
            // description: "Do you already have an account?",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: "bottom-right"
        });
        return(
            <Navigate to="/" />
        );
    }

    if (isSignup){
        return(
            <Signup />
        );
    }

    return (
        <Login />
    );
}


export default Auth;