import styled from "styled-components";
import dayjs from "dayjs";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setTimeSpan } from "../../../redux/bookingSlice";
import { useNavigate } from "react-router-dom";

function CTA() {

  const dispatch = useDispatch();
  const { pickup, dropoff } = useSelector(state => state.booking);

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
  }

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(data);
    dispatch(setTimeSpan(data));

    // if everything okay
    // navigate to search page
    
      navigate("/search");
  }

  return (
    <MainContainer>
      <Container>
        <h1>Search your next ride</h1>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <DateTime>
            <p>Pickup</p>
            <div>
              <DatePickerInput
                minDate={new Date()}
                maxDate={dayjs(new Date()).add(1, "month").toDate()}
                placeholder="Date"
                maw={400}
                miw={"45%"}
                mx="auto"
                icon={<IconCalendar size="1.1rem" stroke={1.5} />}
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
                miw={"45%"}
                mx="auto"
                icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                value={new Date(data.dropoff.date)}
                onChange={val => {
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
              {/* <TimeInput
                        placeholder="Time"
                        miw={"45%"}
                        maw={400}
                        mx="auto" 
                        icon={<IconClock size="1rem" stroke={1.5} />}
                        value={dropoffTime}
                        onChange={setDropoffTime}
                     /> */}
            </div>
          </DateTime>
          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
    background-image: url("https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;

    @media (max-width:600px) {
        flex-direction: row;
        align-items: flex-end;
    }
`;

const Container = styled.div`
  background-color: ${props => props.isDark ? '#2C3333' : 'white'};
  width: fit-content;
  min-width: 400px;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  color: ${props => props.isDark ? "white" : "#2C3333"};

  .timeSelector {
    width: 100%;
    /* background-color: olive; */
    border: 1px solid rgb(206, 212, 218);
    border-radius: 5px;
    padding-left: 5px;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .submit {
    background-color: #fed250;
    color: black;
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const DateTime = styled.div`
  margin-bottom: 20px;

  & > p {
    font-size: 1.1rem;
    margin-bottom: 5px;
    font-weight: 700;
  }

  & > div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    input{
      padding: 4px;
    }
  }
`;

export default CTA;