import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button
  } from '@chakra-ui/react'


  function CustomDrawer({ isOpen, onOpen, onClose }) {
    
    const btnRef = React.useRef()
  
    return (
      <>
        <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <DrawerButtons>
              <DrawerCard>
              <Link to="/tarrif">Tarrif</Link>
                </DrawerCard>
              <DrawerCard>
              <Link to="/search">Search</Link>
              </DrawerCard>
              <DrawerCard>
                <Link to="/blog">Blog</Link>
              </DrawerCard>
              <DrawerCard>Partner With You</DrawerCard>
              <DrawerCard><Link to='/tour'>Bike Tour</Link></DrawerCard>
              <DrawerCard>Indian Bike Routes</DrawerCard>
              <DrawerCard>About Us</DrawerCard>
              <DrawerCard>Terms & Condition</DrawerCard>
              <DrawerCard>Privacy Policy</DrawerCard>
              <DrawerCard>FAQ</DrawerCard>
              <DrawerCard>Reach Us</DrawerCard>
            </DrawerButtons>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      </>
    )
  }

  const DrawerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DrawerCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default CustomDrawer;