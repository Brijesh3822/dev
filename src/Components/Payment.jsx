import React from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import { Box, Button, Image, Input, Link, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Payment({ total, setTotal }) {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <Nevbar />
      <Box
        display={"grid"}
        justifyItems={"center"}
        p={{ xl: "20px 100px", md: "20px 100px", base: "20px 10px" }}
      >
        <Box lineHeight={"2"}>
          <Text fontSize={"40px"} fontWeight={"bold"} color={"gray"}>
            Payment Detalis
          </Text>
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Total :- ${total}
          </Text>
        </Box>
      </Box>
      <Box
        display={{ xl: "grid", md: "flex" }}
        gridTemplateColumns={{ xl: "45% 45%" }}
        justifyContent={"space-between"}
        flexDirection={{ xl: "none", md: "column" }}
        gap={{ xl: "none", md: "20px", base: "40px" }}
        p={{ xl: "0px 200px", md: "0px 10px" }}
      >
        <Box
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
          w={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Text fontSize={"30px"} fontWeight={"bold"} color={"gray"}>
            Enetr Your Shipping Address
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ xl: "row", md: "row", base: "column" }}
          >
            <Box pl={"10px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                mt={"20px"}
              >
                <Text fontSize={"20px"}>Name</Text>
                <Input
                  type="text"
                  // placeholder="Enter Your Name "
                  w={"300px"}
                ></Input>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                mt={"20px"}
              >
                <Text fontSize={"20px"}>Phone Number</Text>
                <Input
                  type="text"
                  // placeholder="Enter Phone Number "
                  w={"300px"}
                ></Input>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                mt={"20px"}
              >
                <Text fontSize={"20px"}>Street Address</Text>
                <Input
                  type="text"
                  // placeholder="Street Address "
                  w={"300px"}
                ></Input>
              </Box>
            </Box>
            <Box>
              <Image src="https://static.vecteezy.com/system/resources/previews/015/093/866/original/delivery-person-loading-parcels-in-truck-vector.jpg" />
            </Box>
          </Box>
        </Box>

        <Box
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
          w={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Text fontSize={"30px"} fontWeight={"bold"} color={"gray"}>
            Enetr Your Card Details
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{ xl: "50% 50%", md: "50% 50%", base: "80%" }}
          >
            <Box pl={"10px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                mt={"20px"}
              >
                <Text fontSize={"20px"}>Card Holder Name</Text>
                <Input
                  type="text"
                  // placeholder="Enter Your Name "
                  w={"300px"}
                ></Input>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                mt={"20px"}
              >
                <Text fontSize={"20px"}>Card Number</Text>
                <Input
                  type="text"
                  // placeholder="Enter Phone Number "
                  w={"300px"}
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                  mt={"20px"}
                >
                  <Text fontSize={"20px"}>Cvv</Text>
                  <Input
                    type="text"
                    // placeholder="Street Address "
                    w={"100px"}
                  ></Input>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                  mt={"20px"}
                >
                  <Text fontSize={"20px"}>MM/YY</Text>
                  <Input
                    type="text"
                    // placeholder="Street Address "
                    w={"100px"}
                  ></Input>
                </Box>
              </Box>
            </Box>
            <Box p={"20px"}>
              <Image src="https://cbx-prod.b-cdn.net/COLOURBOX17190455.jpg?width=800&height=800&quality=70" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display={"grid"} justifyContent={"center"} m={"40px 0px"}>
     
          <Button
          onClick={()=>{
            navigate('/')
          }}
            w={"300px"}
            fontSize={"20px"}
            transition={"all 1s"}
            _hover={{ bgColor: "#B38B5E", color: "white" }}
          >
            Sumbit
          </Button>
       
      </Box>

      <Footer />
    </div>
  );
}

export default Payment;
