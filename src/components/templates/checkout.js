import styled from "styled-components";

function Checkout(props){
    return (
        <Container>
            <Summary>
                <h1>SUMMARY</h1>
                <div>
                    <div id="image">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/PF/OX/WB/45461290/bajaj-pulsar-150-1000x1000.png" alt="" />
                    </div>
                    <Details>
                        <TimeStamp>
                            <div>
                                <span>02:00 pm</span>
                                <span>21 Apr 2023</span>
                            </div>
                            <To>to</To>
                            <div>
                                <span>09:30 am</span>
                                <span>24 Apr 2023</span>
                            </div>
                        </TimeStamp>
                        <div id="address">
                            Yeshwanthpur (BMTC Bus Station)
                            Parking level 1 , public tv building ,Yeshwanthpur BMTC, behind Gayathri Temple Rd, Dr.Ambedkar Nagar, Yeswanthpur, Bengaluru, Karnataka 560022
                        </div>
                        <div id="rates">
                            <p>
                                <span>Weekday - 9.5 hrs * rupee17.0/hr</span>
                                <span>₹ 161.5</span>
                            </p>
                            <p>
                                <span>Weekday - 9.5 hrs * rupee17.0/hr</span>
                                <span>₹ 161.5</span>
                            </p>
                        </div>
                        <div id="total">
                            <span>Total</span>
                            <span>₹ 1140.32</span>
                        </div>
                        <div id="helmets">
                            <span>Number of Helmet (?)</span>
                            <select placeholder="hemlets">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div id="distanceLimit">
                            <span>Km limit (?)</span>
                            <span>111 km</span>
                        </div>
                        <div id="excessCharge">
                            <span>Excess km charges (?)</span>
                            <span>₹ 4.0/km</span>
                        </div>
                    </Details>
                </div>
            </Summary>
            <Total>
                <h1>CHECKOUT</h1>
                <div>
                    <p>
                        <span>Booking Fee</span>
                        <span>₹ 1147.50</span>
                    </p>
                    <p>
                        <span>CGST (14%)</span>
                        <span>₹ 160.65</span>
                    </p>
                    <p>
                        <span>SGST (14%)</span>
                        <span>₹ 160.65</span>
                    </p>
                    <p>
                        <span>Refundable Deposit</span>
                        <span>₹ 0.00</span>
                    </p>
                    <p>
                        <span>Total Payable Amount</span>
                        <span>₹ 1468.80</span>
                    </p>
                </div>
                <button>Make Payment</button>
            </Total>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`;

const Summary = styled.div`
    flex: 3;
    max-width: 700px;
    padding: 20px;

    @media screen and (max-width: 1000px){
        width: 100%;
        max-width: none;
    }

    h1{
        font-size: 1.3rem;
        font-weight: 600;
    }
    
    &>div{
        display: flex;
        align-items: center;
        background-color: white;

        #image{
            flex: 3;
            
            &>img{
                width: 100%;
            }
        }

        @media screen and (max-width: 1000px) {
            flex-direction: column;

            #image{
                &>img{
                    width: 100%;
                }
            }
        }
    }
`;

const Details = styled.div`
    flex: 5;
    
    #address{
        width: 100%;
        font-size: 0.9rem;
        text-align: justify;
        margin: 10px 0;
        color: grey;
    }

    #rates{
        width: 100%;
        margin: 10px 0;
        font-size: 0.9rem;

        p{
            display: flex;
            justify-content: space-between;
            gap: 10px;

            span:last-child{
                font-weight: 600;
            }
        }
    }

    #total{
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin: 10px 0;
    }

    #helmets{
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

        select{
            min-width: 50px;
            border: 1px solid #fed250;
            border-radius: 4px;

            &:focus{
                outline: none;
            }
        }
    }

    #distanceLimit, #excessCharge{
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: gray;
    }
`;

const TimeStamp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    &>div{
        display: flex;
        flex-direction: column;

        &>span:first-child{
            font-weight: 600;
        }

        &:last-child{
            text-align: end;
        }
    }
`;

const To = styled.div`
    width: 36px;
    height: 36px;
    color: white;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

const Total = styled.div`
    flex: 1;
    padding: 20px;
    max-width: 300px;
    min-width: 300px;
    background-color: white;
    font-size: 0.8rem;

    @media screen and (max-width: 700px){
        width: 100%;
        max-width: 100%;
        min-width: 100%;
    }

    button{
        width: 100%;
        background-color: #fed250;
        padding: 5px 10px;
        border-radius: 4px;
        margin-top: 10px;
    }

    h1{
        font-size: 1.3rem;
        font-weight: 600;
    }

    div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &>p{
            display: flex;
            justify-content: space-between;

            &:last-child{
                /* for total cost */
                font-size: 0.9rem;
                font-weight: 600;
            }
        }
    }
`;

export default Checkout;