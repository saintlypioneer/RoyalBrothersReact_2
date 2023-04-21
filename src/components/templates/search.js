import styled from "styled-components";
import dayjs from "dayjs";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import Card from "../organisms/searchPage/Card";
import { useDispatch, useSelector } from "react-redux";
import { setTimeSpan } from "../../redux/bookingSlice";
import { useState } from "react";

function Search(props){

    const dispatch = useDispatch();
    const { pickup, dropoff, vehicles } = useSelector(state => state.booking);

    const [data, setData] = useState({
        pickup: {
        date: pickup.date,
        time: pickup.time,
        },
        dropoff: {
        date: dropoff.date,
        time: dropoff.time,
        }
    });

    function handleData(val, type){
        console.log(type);
        if (type=="pickup_date"){
        setData({
            ...data,
            pickup: {
            ...data.pickup,
            date: val
            }
        })
        } else if (type=="pickup_time"){
        setData({
            ...data,
            pickup: {
            ...data.pickup,
            time: val
            }
        })
        } else if (type=="dropoff_date"){
        setData({
            ...data,
            dropoff: {
            ...data.dropoff,
            date: val
            }
        })
        } else if (type=="dropoff_time"){
        setData({
            ...data,
            dropoff: {
            ...data.dropoff,
            time: val
            }
        })
        }

        dispatch(setTimeSpan(data));
    }

    return(
        <Container>
            <Left>
                <h1>Filter</h1>
                <DateTime>
                    <p>Pickup</p>
                    <div>
                        <DatePickerInput
                            minDate={new Date()}
                            maxDate={dayjs(new Date()).add(1, "month").toDate()}
                            placeholder="Date"
                            maw={400}
                            miw={"50%"}
                            mx="auto"
                            icon={<IconCalendar size="1.1rem" stroke={1.5}/>}
                            value={new Date(data.pickup.date)}
                            onChange={val => {
                                console.log(val);
                                handleData(val, "pickup_date");
                            }}
                        />
                        <input
                            className="timeSelector"
                            type={"time"}
                            value={data.pickup.time}
                            onChange={e => {
                              handleData(e.target.value, "pickup_time");
                            }}
                        />
                    </div>
                </DateTime>
                <DateTime>
                    <p>Dropoff</p>
                    <div>
                        <DatePickerInput
                            minDate={new Date()}
                            maxDate={dayjs(new Date()).add(1, "month").toDate()}
                            placeholder="Date"
                            maw={400}
                            miw={"50%"}
                            mx="auto"
                            icon={<IconCalendar size="1.1rem" stroke={1.5}/>}
                            value={new Date(data.dropoff.date)}
                            onChange={val => {
                                console.log(val);
                                handleData(val, "dropoff_date");
                            }}
                        />
                        <input
                            className="timeSelector"
                            type={"time"}
                            value={data.dropoff.time}
                            onChange={e => {
                              handleData(e.target.value, "dropoff_time");
                            }}
                        />
                    </div>
                </DateTime>
                <SearchBox>
                    <p>Search by bike model</p>
                    <div>
                        {
                            vehicles.map((e, idx)=>{
                                return(
                                    <Radio>
                                        <input type="radio" id={e.name} name="bike_modal" value={e.name} />
                                        <label for={e.name}>{e.name}</label>
                                    </Radio>
                                );
                            })
                        }
                    </div>
                </SearchBox>
            </Left>
            <Right>
                <Sort>
                    <span>Sort by</span>
                    <Tab className="active">Relevance</Tab>
                    <Tab>Price - Low to high</Tab>
                    <Tab>Price - High to Low</Tab>
                </Sort>
                <Results>
                    {
                        vehicles.map((e, idx)=>{
                            return (
                                <Card name={e.name} image={e.image} pickupDate={data.pickup.date} pickupTime={data.pickup.time} dropoffDate={data.dropoff.date} dropoffTime={data.dropoff.time} rate={e.hourly.monThur.within} vehInfo={e} />
                            );
                        })
                    }
                </Results>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 350px;
    padding: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }

    h1{
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const DateTime = styled.div`
  margin-bottom: 20px;

  & > p {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  & > div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    input{
      padding: 4px;
      width: 50%;
    }

    .timeSelector {
        /* background-color: olive; */
        border: 1px solid rgb(206, 212, 218);
        border-radius: 5px;
        padding-left: 5px;
    }
  }
`;

const SearchBox = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px;

    &>p{
        font-size: 1rem;
        margin-bottom: 5px;
    }

    &>div{
        height: 300px;
        overflow-y: scroll;
    }
`;

const Radio = styled.div`
    display: flex;
    gap: 10px;

    &>input{
        accent-color: #fed250;
    }
`;

const Right = styled.div`
    flex-grow: 1;
    padding: 10px;
`;

const Sort = styled.div`
    font-size: 0.8rem;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #fed250;
    padding: 0 10px;

    @media screen and (max-width: 400px) {
        display: none;
    }

    &>span{
        font-weight: 600;
        padding: 10px 0;
    }
`;

const Tab = styled.div`
    color: grey;
    padding: 10px 0;

    &.active{
        color: black;
        font-weight: 600;
        border-bottom: 2px solid #fed250;
    }
`;

const Results = styled.div`
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;

    @media screen and (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default Search;