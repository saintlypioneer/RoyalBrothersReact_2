import styled from "styled-components";

function Card({name, image, pickupDate, pickupTime, dropoffDate, dropoffTime, rate, amount}) {

    const options = { timeZone: "Asia/Kolkata", dateStyle: "long" };
    const formattedPickupDate = new Date(pickupDate).toLocaleDateString("en-IN", options);
    const formattedDropoffDate = new Date(dropoffDate).toLocaleDateString("en-IN", options);


    return (
        <Container>
            <p>{name}</p>
            <img src={image} alt="" />
            <TimeStamp>
                <div>
                    <span>{pickupTime}</span>
                    <span>{formattedPickupDate}</span>
                </div>
                <To>to</To>
                <div>
                    <span>{dropoffTime}</span>
                    <span>{formattedDropoffDate}</span>
                </div>
            </TimeStamp>
            <Book>
                <span>total: ₹ {amount}</span>
                <span className="rate">rate: ₹ {rate}/km</span>
                {/* <button onClick={handleBooking}>Book</button> */}
            </Book>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    box-shadow: rgba(100, 100, 111, 0.08) 0px 7px 29px 0px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover{
        box-shadow: rgba(100, 100, 111, 0.15) 0px 7px 29px 0px;
    }

    &>p{
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
    }

    img{
        height: 50%;
        object-fit: contain;
    }
`;

const TimeStamp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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

const Book = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    padding-top: 10px;

    &>.rate{
        font-weight: 500;
        color: grey;
        font-size: 0.8rem;
    }

    &>span{
        flex: 1;
        text-align: center;
        font-weight: 600;
        gap: 10px;
    }

    &>button{
        flex: 1;
        background-color: #fed250;
        color: black;
        padding: 5px 0;
        border-radius: 4px;
        font-weight: 600;
    }
`;

export default Card;