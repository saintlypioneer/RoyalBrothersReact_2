import styled from "styled-components";
import dayjs from "dayjs";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

function CTA() {
    return (
        <MainContainer>
            <Container>
            <h1>Search your next ride</h1>
            <form>
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
                            icon={<IconCalendar size="1.1rem" stroke={1.5}
                            />}
                        />
                        <input
                            className="timeSelector"
                            type={"time"}
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
                        />
                        <input
                            className="timeSelector"
                            type={"time"}
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