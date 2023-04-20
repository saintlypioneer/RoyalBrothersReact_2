import styled from "styled-components";
import CTA from "../organisms/landingPage/cta";
import Fleet from "../organisms/landingPage/fleet";
import LandingPageSlider from "../organisms/landingPage/landingPageSlider";
import LandingPageLogoCloud from "../organisms/landingPage/landingPageLogoCloud";

function Home(props){
    return (
        <Container>
            <CTA />
            <Fleet />
            <LandingPageSlider />
            <LandingPageLogoCloud />
        </Container>
    );
}

const Container = styled.div``;

export default Home;