import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";
import CustomDrawer from "./landingPage/drawer";
import CityModal from "./landingPage/cityModal";

function Navbar(props) {

    // for sideDrawer
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
    // for city modal
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

    return (
        <Container>
            {/* Menu Drawer */}
            <CustomDrawer isOpen={isDrawerOpen} onOpen={onDrawerOpen} onClose={onDrawerClose} />
            {/* City Modal */}
            <CityModal isOpen={isModalOpen} onOpen={onModalOpen} onClose={onModalClose} />
            <Left>
                <button onClick={onDrawerOpen}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <rect x="0" y="0" width="20" height="2"></rect>
                        <rect x="0" y="7" width="20" height="2"></rect>
                        <rect x="0" y="14" width="20" height="2"></rect>
                    </svg>
                </button>
                <Link to="/"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" /></Link>
            </Left>
            <Center>
            <Link to="/tarrif"><button>Tarrif</button></Link>
            <Link to="#"><button>New</button></Link>
            <Link to="#"><button>Careers</button></Link>
            <Link to="#"><button>Partner</button></Link>
            </Center>
            <Right>
                <button onClick={onModalOpen} id="city">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <span>Agra</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M6.3 9.7l5 5c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 13.6 7.7 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4z" />
                    </svg>

                </button>
                <Authenticate>
                <Link to="/auth"><button>Login</button></Link>
                <Link to="/auth?type=signup"><button>Sign up</button></Link>
                </Authenticate>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 10px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    z-index: 10;

    button{
        height: fit-content;
        padding: 5px;
        background-color: white;
        border: none;
        font-size: 1.1rem;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        width: 150px;
    }
`;

const Center = styled.div`
    display: flex;
    flex-grow: 1;
    gap: 10px;
    margin-left: 20px;
    font-weight: 400;

    @media screen and (max-width: 850px) {
        display: none;
    }
`;

const Right = styled.div`
    display: flex;
    gap: 10px;

    button{
        border: 1px solid #fed250;
        padding: 5px 10px;
        font-size: 1rem;
        border-radius: 4px;
        margin: 5px;
        transition: 0.3s all;
    }

    #city{
        display: flex;
        align-items: center;
        gap: 5px;

        &:hover{
            background-color: #fed250;
        }
    }
`;

const Authenticate = styled.div`
    display: flex;
    border-left: 1px solid grey;
    padding-left: 8px;

    @media screen and (max-width: 550px) {
        display: none;
    }

    button{
        padding: 8px;
        color: #666;
        border: none;

        &:first-child:hover{
            background-color: grey;
            color: black;
        }

        &:last-child:hover{
            background-color: #fed250;
        }
    }
    
`;

export default Navbar;