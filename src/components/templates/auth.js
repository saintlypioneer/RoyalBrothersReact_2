import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../organisms/authPage/login';
import Signup from '../organisms/authPage/signup';

function Auth(props){

    // checking if the path is for signup
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    const isSignup = (type=="signup")?true:false;
    console.log(isSignup);

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