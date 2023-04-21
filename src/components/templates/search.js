import styled from "styled-components";
import dayjs from "dayjs";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

function Search(props){

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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
                            miw={"50%"}
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
                <Results></Results>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 300px;
    padding: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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

const Results = styled.div``;

export default Search;