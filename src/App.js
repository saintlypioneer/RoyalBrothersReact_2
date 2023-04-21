import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/allRoutes';
import styled from 'styled-components';
import Navbar from  "./components/organisms/navbar";
import Footer from './components/organisms/footer';
import { fetchVehicles } from './redux/bookingSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchVehicles());
  }, [])

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
