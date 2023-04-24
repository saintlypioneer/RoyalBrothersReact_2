import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchTrips } from "../../redux/bookingSlice";
import { useEffect } from "react";
import Card from "../organisms/myRidesPage/card";

function MyRides(props){

    const {token} = useSelector(state=>state.user);

    const dispatch = useDispatch()
    const {rides} = useSelector(state=>state.booking);
    
    useEffect(()=>{
        dispatch(fetchTrips(token));
    }, []);

    console.log(rides);

    return (
        <Container>
            {
                rides.map((e, idx)=>{
                    return (
                        <Card name={e.vehicleName} image={e.vehicleImage} pickupDate={e.dateFrom} pickupTime={e.timeFrom} dropoffDate={e.dateTo} dropoffTime={e.timeTo} rate={e.rate.toFixed(2)} amount={e.amount} />
                    );
                })
            }
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
    padding: 20px;

    @media screen and (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default MyRides;