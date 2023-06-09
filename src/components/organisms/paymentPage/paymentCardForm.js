import styled from "styled-components";

function PaymentCardForm({handleData}) {
    return (
        <Container>
            <form>
                <label for="cardnumber">Card Number</label>
                <input name="number" onChange={e=>handleData(e)} id="cardnumber" type="text" placeholder="Enter you card details" />
                <label for="cardname">Name on the card</label>
                <input name="name" onChange={e=>handleData(e)} id="cardname" type="text" placeholder="Enter name on the card" />
                <Expiry>
                    <div>
                        <label>Expiry</label>
                        <br/>
                        <input name="expiryMonth" onChange={e=>handleData(e)} id="month" type="number" placeholder="MM" />&nbsp;&nbsp;
                        <input name="expiryYear" onChange={e=>handleData(e)} id="year" type="number" placeholder="YY" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <br/>
                        <input name="cvv" onChange={e=>handleData(e)} id="cvv" type="password" placeholder="CVV" />
                    </div>
                </Expiry>
            </form>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    max-width: 400px;
    border-radius: 5px;

    input{
        padding: 5px 10px;
        border-radius: 5px;
        margin-bottom: 8px;
        margin-top: 4px;

        &:focus{
            outline: black;
        }
    }

    label{
        font-weight: 400;
    }

    form{

        &>input{
            width: 100%;
        }
    }
`;

const Expiry = styled.div`
    display: flex;
    justify-content: space-between;

    div:first-child{
        /* for date */
        
    }

    input{
        width: 80px;
    }
`;

export default PaymentCardForm;