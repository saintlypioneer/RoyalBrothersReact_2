import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/allRoutes';
import styled from 'styled-components';
import Navbar from  "./components/organisms/navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

const Container = styled.div``;

export default App;
