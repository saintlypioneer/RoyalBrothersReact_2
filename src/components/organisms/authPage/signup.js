import { useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

// using reducers
import {createUser} from "../../../redux/userSlice";
import {useDispatch} from "react-redux";

function Signup(props) {

    const toast = useToast();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        name: "",
        mobile: "",
        password: "",
        password2: ""
    });

    function handleData(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleFormSubmit(e){
        e.preventDefault();

        // check all the values if they are empty
        if (data.email=="" || data.name=="" || data.mobile=="" || data.password==""){
            // show toast
            toast({
                title: 'Fill in all the details',
                // description: "We've created your account for you.",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "bottom-right"
            });return;
        }

        // check if passwords match
        if (data.password!=data.password2){
            // show toast
            toast({
                title: 'Passwords don\'t match',
                // description: "We've created your account for you.",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "bottom-right"
            });return;
        }

        // ALL CHECKS PASSED
        dispatch(createUser(data));

        console.log(data);
    }

    // handling password visibility
    const password1 = useRef(null);
    const password2 = useRef(null);
    function handlePasswordVisibility(idx){
        if (idx==1){
            // password 1
            const currType = password1.current.type;
            password1.current.type = (currType=="text"?"password":"text");
        } else if (idx==2){
            // password 1
            const currType = password2.current.type;
            password2.current.type = (currType=="text"?"password":"text");
        }
    }

    return (
        <Container>
            <h1>Rent . Ride . Explore</h1>
            <Form>
                <Tabs>
                    <Link to="/auth" style={{
                        flexGrow: "1"
                    }}><Tab>LOGIN</Tab></Link>
                    <Link to="/auth?type=signup" style={{
                        flexGrow: "1"
                    }}><Tab className='active'>SIGN UP</Tab></Link>
                </Tabs>
                <form onSubmit={e=>handleFormSubmit(e)}>
                    <Input>
                        <label>Name</label>
                        <div>
                            <input onChange={e=>handleData(e)} type='text' placeholder='Name as per Aadhaar' name="name" />
                        </div>
                    </Input>
                    <Input>
                        <label>Email</label>
                        <div>
                            <input onChange={e=>handleData(e)} type='email' placeholder='email ID' name="email" />
                        </div>
                    </Input>
                    <Input>
                        <label>Mobile</label>
                        <div>
                            <input onChange={e=>handleData(e)} type='tel' placeholder='mobile no.' name="mobile" />
                        </div>
                    </Input>
                    <Input>
                        <label>Password</label>
                        <div>
                            <input ref={password1} onChange={e=>handleData(e)} type='password' placeholder='password' name="password" />
                            <button type="button" onClick={()=>handlePasswordVisibility(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                    </Input>
                    <Input>
                        <label>Confirm password</label>
                        <div>
                            <input ref={password2} onChange={e=>handleData(e)} type='password' placeholder='confirm password' name="password2" />
                            <button type="button" onClick={()=>handlePasswordVisibility(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </div>
                    </Input>
                    <button type='submit'>Sign Up</button>
                </form>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 95%;
    max-width: 500px;
    background-color: white;
    margin: 20px auto 20px auto;
    padding: 10px;

    h1{
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }
`;

const Tabs = styled.div`
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #fed250;
`;

const Tab = styled.div`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
    padding: 10px;

    &.active{
        border-bottom: 3px solid #fed250;
    }
`;

const Form = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    form{
        padding: 20px 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        &>button{
            width: 100%;
            max-width: 300px;
            background-color: #fed250;
            color: black;
            padding: 8px 10px;
            font-weight: 600;
            border-radius: 4px;
            margin-top: 10px;
        }
    }
`;

const Input = styled.div`
    width: 100%;
    max-width: 300px;
    
    div{
        border-radius: 4px;
        display: flex;
        align-items: center;
        background-color: white;
        padding: 5px 10px;
        background-color: #f5f5f5;
    }

    label{
        font-size: 0.8rem;
        color: grey;
    }

    input{
        flex-grow: 1;
        padding: 5px 10px;
        background-color: transparent;

        &:focus{
            outline: none;
        }
    }

    svg{
        width: 24px;
        height: 24px;
    }
`;

export default Signup;