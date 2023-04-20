import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/allRoutes';
import styled from 'styled-components';
import Navbar from  "./components/organisms/navbar";
import Footer from './components/organisms/footer';

function App() {
  return (
    <Container>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

export default App;
