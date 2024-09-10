import React from 'react'
import Header from './Header';
import Nevbar from './Nevbar';
import { Box } from '@chakra-ui/react';

function Payment() {
  return (
    <div>
      <Header />
      <Nevbar />
      <Box display={"grid"} justifyItems={"center"} >

        
        <Box border={"2px solid red"} p={"100px"}></Box>
      </Box>
    </div>
  );
}

export default Payment;
