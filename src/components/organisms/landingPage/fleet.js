import styled from "styled-components";

function Fleet(props){

    const vehicles = [
        {
            url: "https://bd.gaadicdn.com/upload/userfiles/images/5e1ec6b4439b3.png",
            name: "Honda Activa 6G"
        },
        {
            url: "https://cdn.autoportal.com/bp-v3/img/models/bd/f/hero-splendor-plus-1464785915.png",
            name: "Hero Splendor Plus"
        },
        {
            url: "https://eshop.heromotocorp.com/pub/media/catalog/product/h/f/hf-deluxe-techno-blue_2.png",
            name: "Hero HF Deluxe"
        },
        {
            url: "https://5.imimg.com/data5/SELLER/Default/2021/6/PF/OX/WB/45461290/bajaj-pulsar-150-1000x1000.png",
            name: "Bajaj Pulsar 150"
        },
        {
            url: "https://palacehonda.com/wp-content/uploads/2020/09/dio-bs6-6g.png",
            name: "Honda Dio"
        },
    ];

    return (
        <Container>
            <h1>OUR FLEET</h1>
            <Cards>
                {
                    vehicles.map((e, idx)=>{
                        return (
                            <Card>
                                <h3>{e.name}</h3>
                                <img src={e.url} alt="" />
                                <button>BOOK NOW</button>
                            </Card>
                        );
                    })
                }
            </Cards>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 20px;

    h1{
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 10px;

    @media screen and (max-width: 850px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 550px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Card = styled.div`
    display: flex;
    height: 350px;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
    background-color: white;
    padding: 10px;

    h3{
        text-align: center;
        font-size: 1.2rem;
    }

    img{
        width: 80%;
        height: 80%;
        object-fit: contain;
        margin-bottom: 10px;
    }

    button{
        background-color: #fed250;
        color: black;
        font-size: 0.9rem;
        font-weight: 600;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
    }
`;

export default Fleet;