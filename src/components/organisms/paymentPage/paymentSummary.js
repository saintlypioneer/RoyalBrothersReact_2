import styled from "styled-components";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PaymentSummary(props) {

    const totalSeconds = 180;
    const [seconds, setSeconds] = useState(totalSeconds); // 3 minutes in seconds
    const [percent, setPercent] = useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (seconds<=0){
                clearInterval(interval);
                console.log("OUT");
                window.alert("Time out!!");
                navigate ("/");
                return;
            }
            setSeconds((seconds)=>seconds-1);
        }, 1000);

        return ()=>clearInterval(interval);
    }, [seconds, percent]);

    useEffect(() => {
        setPercent(seconds / totalSeconds * 100); // calculate the percentage
    }, [seconds]);

    const {amount} = useSelector(state=>state.booking);

    return (
        <Container>
            <Payable>
                <h3>Payable</h3>
                <div>
                    <p className="title">Total Payable Amount</p>
                    <p className="amount">₹ {amount || 0}</p>
                </div>
            </Payable>
            <Timer>
                <CircularProgress value={percent} color='green.400' size="100px" thickness="4px" >
                    <CircularProgressLabel>{seconds}s</CircularProgressLabel>
                </CircularProgress>
            </Timer>
        </Container>
    );
}

const Container = styled.div`
    flex: 2;
    margin: 5px;
`;

const Payable = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;

    h3{
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgba(0,0,0,0.2);
        padding-left: 10px;
    }

    div{
        text-align: center;

        .title{
            font-weight: 400;
            margin: 10px 0;
        }

        .amount{
            font-weight: 700;
            margin: 10px 0;
        }
    }
`;

const Timer = styled.div`
    text-align: center;
    margin-top: 10px;
`;

export default PaymentSummary;