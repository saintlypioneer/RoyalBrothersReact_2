import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAmount } from "../../redux/bookingSlice";

function Checkout(props){

    const {vehicleInfo} = useSelector(state=>state.booking.booking);
    const {pickup, dropoff} = useSelector(state=>state.booking);

    const options = { timeZone: "Asia/Kolkata", dateStyle: "long" };
    const formattedPickupDate = new Date(pickup.date).toLocaleDateString("en-IN", options);
    const formattedDropoffDate = new Date(dropoff.date).toLocaleDateString("en-IN", options);
    const date1 = new Date(`${formattedPickupDate} ${pickup.time}`);
    const date2 = new Date(`${formattedDropoffDate} ${dropoff.time}`);
    const hourDifference = Math.abs(date2 - date1) / 36e5;
    const total = (vehicleInfo.hourly.monThur.within*hourDifference).toFixed(2);
    const amountIncludingGST = (parseFloat(total)+2*parseFloat(total*0.14)).toFixed(2);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCheckout(){
        // clicked on make payment button
        console.log("Checking out");
        dispatch(setAmount(amountIncludingGST));
        navigate("/payment");
    }

    return (
        <Container>
            <Summary>
                <h1>SUMMARY</h1>
                <div>
                    <div id="image">
                        <img src={vehicleInfo.image} alt="" />
                    </div>
                    <Details>
                        <TimeStamp>
                            <div>
                                <span>{pickup.time}</span>
                                <span>{formattedPickupDate}</span>
                            </div>
                            <To>to</To>
                            <div>
                                <span>{dropoff.time}</span>
                                <span>{formattedDropoffDate}</span>
                            </div>
                        </TimeStamp>
                        <div id="address">
                            Yeshwanthpur (BMTC Bus Station)
                            Parking level 1 , public tv building ,Yeshwanthpur BMTC, behind Gayathri Temple Rd, Dr.Ambedkar Nagar, Yeswanthpur, Bengaluru, Karnataka 560022
                        </div>
                        <div id="rates">
                            <p>
                                <span>Weekday - 9.5 hrs * rupee17.0/hr</span>
                                <span>₹ {vehicleInfo.hourly.monThur.within.toFixed(2)}</span>
                            </p>
                            <p>
                                <span>Weekday - 9.5 hrs * rupee17.0/hr</span>
                                <span>₹ {vehicleInfo.hourly.friSun.over.toFixed(2)}</span>
                            </p>
                        </div>
                        <div id="total">
                            <span>Total</span>
                            <span>₹ {total}</span>
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
                        <span>₹ {total}</span>
                    </p>
                    <p>
                        <span>CGST (14%)</span>
                        <span>₹ {(parseFloat(total*0.14)).toFixed(2)}</span>
                    </p>
                    <p>
                        <span>SGST (14%)</span>
                        <span>₹ {(parseFloat(total*0.14)).toFixed(2)}</span>
                    </p>
                    <p>
                        <span>Refundable Deposit</span>
                        <span>₹ 0.00</span>
                    </p>
                    <p>
                        <span>Total Payable Amount</span>
                        <span>₹ {(parseFloat(total)+2*parseFloat(total*0.14)).toFixed(2)}</span>
                    </p>
                </div>
                <button onClick={handleCheckout}>Make Payment</button>
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
        font-weight: 600;
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