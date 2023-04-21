import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Signup(props) {

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
                <form>
                    <Input>
                        <label>Name</label>
                        <div>
                            <input type='text' placeholder='Name as per Aadhaar' name="name" />
                        </div>
                    </Input>
                    <Input>
                        <label>Email</label>
                        <div>
                            <input type='email' placeholder='emailID' name="email" />
                        </div>
                    </Input>
                    <Input>
                        <label>Password</label>
                        <div>
                            <input type='password' placeholder='password' name="password" />
                        </div>
                    </Input>
                    <Input>
                        <label>Password</label>
                        <div>
                            <input type='password' placeholder='password' name="password" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
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

        button{
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