import React, { useState } from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import { Box, Button, grid, Menu, Text, Image } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { Ri24HoursFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { GoHeart } from "react-icons/go";
import { transform } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Homepage() {
  const data = [
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product2.png",
      name: "Brasslegged Armchair",
      price: "150.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product3.png",
      name: "Leather Chair",
      price: "200.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product4.png",
      name: "Chair pillow",
      price: "49.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product1.png",
      name: "Alexander roll Armsofa",
      price: "150.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product2.png",
      name: "Brasslegged Armchair",
      price: "150.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product3.png",
      name: "Leather Chair",
      price: "200.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product4.png",
      name: "Chair pillow",
      price: "49.00",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product1.png",
      name: "Alexander roll Armsofa",
      price: "150.00",
    },
  ];

  const length = data.length;
  // console.log(length);
  // const index = {
  //   startIndex: 1,
  //   endIndex: 4,
  // };
  // const [startIndex, setStartIndex] = useState(1);
  // const [endIndex, setEndIndex] = useState(4);
  const [current, setCurrent] = useState({ startPoint: 0, endPoint: 4 });
  const interval = setInterval(() => {
    // setCurrent(current.startPoint + 1);
    // setCurrent(current.endPoint + 1);
  });
  function handellLeft() {
    if (current.startPoint > 0) {
      setCurrent({
        startPoint: current.startPoint - 1,
        endPoint: current.endPoint - 1,
      });
    }
    // else {
    //   alert("not working");
    // }
  }

  function handelRight() {
    if (current.endPoint < data.length) {
      setCurrent({
        startPoint: current.startPoint + 1,
        endPoint: current.endPoint + 1,
      });
    }
    // else {
    //   alert("not working");
    // }
  }

  const product = [
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product1.png",
      name: "stylish grey chair",
      price: "150.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product2.png",
      name: "Chair pillow",
      price: "190.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product3.png",
      name: "seater gray sofa",
      price: "300.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product4.png",
      name: "wooden chair",
      price: "129.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product5.png",
      name: "Alexander sofa",
      price: "150.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product6.png",
      name: "stylish grey chair",
      price: "150.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product7.png",
      name: "chair nobody armchair",
      price: "80.00",
      Categories: "All Collection",
    },
    {
      Img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/product8.png",
      name: "realistic sofa ",
      price: "49.00",
      Categories: "All Collection",
    },
  ];
  function handelAllPorduct() {
    // const newProduct=product.filter((el)=>{
    //   return el.Categories==newcategories;
    // })
  }
  // if (!Array.isArray(data) || data.length <= 0) {
  //   return null;
  // }
  // const {useState, useEffect} = React;

  // const Countdown = () => {
  //   const [countdownDate, setCountdownDate] = useState(new Date('12/9/2024').getTime());
  //   const [state, setState] = useState({
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   });

  //   useEffect(() => {
  //     setInterval(() => setNewTime(), 1000);
  //   }, []);

  //   const setNewTime = () => {
  //     if (countdownDate) {
  //       const currentTime = new Date().getTime();

  //       const distanceToDate = countdownDate - currentTime;

  //       let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
  //       let hours = Math.floor(
  //         (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  //       );
  //       let minutes = Math.floor(
  //         (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
  //       );
  //       let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

  //       const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //       days = `${days}`;
  //       if (numbersToAddZeroTo.includes(hours)) {
  //         hours = `0${hours}`;
  //       } else if (numbersToAddZeroTo.includes(minutes)) {
  //         minutes = `0${minutes}`;
  //       } else if (numbersToAddZeroTo.includes(seconds)) {
  //         seconds = `0${seconds}`;
  //       }

  //       setState({ days: days, hours: hours, minutes, seconds });
  //     }
  //   };

  const testimonial = [
    {
      name: "Ralph Edwards",
      work: "UI/UX Designer",
    },
    {
      name: "Jerome Bell",
      work: "Web Designer",
    },
    {
      name: "Annette Black",
      work: "Dog Trainer",
    },
    // {
    //   name: "Ralph Edwards",
    //   work: "UI/UX Designer",
    // },
    // {
    //   name: "Jerome Bell",
    //   work: "Web Designer",
    // },
    // {
    //   name: "Annette Black",
    //   work: "Dog Trainer",
    // },
  ];

  const bestseller = [
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-01.png",
      name: "Stylish Grey Chair",
      price: "66.00 ",
    },
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-02.png",
      name: "Chair Pillow",
      price: "66.00 ",
    },
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-03.png",
      name: "Alexander roll ..",
      price: " 66.00",
    },
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-04.png",
      name: "Wooden Chair",
      price: "66.00",
    },
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-05.png",
      name: "Chair Pillow",
      price: "66.00 ",
    },
    {
      img: "https://gramentheme.com/html/addina/assets/imgs/furniture/product/fs-06.png",
      name: "seater gray sofa",
      price: "66.00 ",
    },
  ];
  // const breakpoints = {
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  // };
  return (
    <div>
      <Header />
      <Nevbar />
      <Box
        bgImage={
          "https://gramentheme.com/html/addina/assets/imgs/furniture/banner/bg.png"
        }
        bgSize={{ md: "100px" }}
        height={{ xl: "820px" }}
        bgColor={"#F6F4ED"}
        display={"grid"}
        gridTemplateColumns={{ xl: "50% 50%" }}
        p={{ md: "50px 0px", base: "40px 20px" }}
      >
        <Box
          display={"grid"}
          justifyContent={{ xl: "center", md: "center", base: "start" }}
          alignContent={"center"}
          p={{ md: " 50px 0px" }}
        >
          <Box w={"140px"} h={"40px"} bgColor={"#EBE5D8"}>
            <Text fontWeight={"bold"} color={"#B28B5E"} py={"8px"} ml={"8px"}>
              NEW ARRIVAL...
            </Text>
          </Box>
          <Box
            fontSize={{ xl: "80px", md: "80px", base: "50px" }}
            fontWeight={"bold"}
            lineHeight={"1"}
            mt={"20px"}
          >
            <Text>Elevate</Text>
            <Text>Your Home</Text>
            <Text>Aesthetics</Text>
          </Box>
          <Box
            w={{ xl: "450px", md: "450px", base: "auto" }}
            mt={"40px"}
            color={"#636363"}
          >
            <Text>
              A furniture e-commerce company operates in the digital space,
              offering a wide range of furniture products for sale through an
              online platform.
            </Text>
          </Box>
          <Box mt={"20px"}>
            <Button
              h={"60px"}
              w={"140px"}
              bgColor={"#B28B5E"}
              borderRadius={"none"}
              color={"white"}
              _hover={{
                bgColor: "#F6F4EF",
                color: "#B28B5E",
                transition: "all 1s",
                border: "1px solid #B28B5E ",
              }}
            >
              BUY NOW <FaChevronRight />
            </Button>

            <Button
              ml={"20px"}
              h={"60px"}
              w={"180px"}
              bgColor={"#F6F4EF"}
              borderRadius={"none"}
              color={"#B28B5E"}
              border={"1px solid #B28B5E"}
              _hover={{
                bgColor: "#B28B5E",
                color: "white",
                transition: "all 1s",
                border: "1px solid #B28B5E ",
              }}
            >
              VIEW DETALIS <FaChevronRight />
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ md: "center" }}
        >
          <Box
            h={{ xl: "550px", md: "550px", base: "300px" }}
            w={{ xl: "550px", md: "550px", base: "300px" }}
            bgColor={"#D3BFA6"}
            borderRadius={"50%"}
            mt={{ xl: "0px", md: "0px", base: "40px" }}
            ml={{ xl: "100px", md: "100px", base: "50px" }}
            position={"relative"}
          >
            <Box
              width={{ xl: "700px", md: "550px", base: "auto" }}
              position={"absolute"}
              top={"0"}
              bottom={"0"}
              right={"0"}
            >
              <Image src="https://gramentheme.com/html/addina/assets/imgs/product/details/details-04.png" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        // border={"2px solid red"}
        h={"150px"}
        display={"grid"}
        alignItems={"center"}
        gridTemplateColumns={{
          xl: "20% 20% 20% 20%",
          md: "40% 40%",
          base: "80%",
        }}
        justifyContent={"center"}
        p={{ xl: "0px 0px", md: "50px 0px", base: "70px 0px" }}
        gap={{ xl: "0px ", md: "0px", base: "10px" }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xl: "20% 50%",
            md: "30% 50%",
            base: "40% 50%",
          }}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Box fontSize={"60px"} color={"#B38B5E"}>
            <FaShippingFast />
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Free Delivery</Text>
            <Text color={"#636363"}>Free shipping on all order</Text>
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            xl: "20% 50%",
            md: "30% 50%",
            base: "40% 50%",
          }}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Box fontSize={"60px"} color={"#B38B5E"}>
            <GoCreditCard />
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Money Return</Text>
            <Text color={"#636363"}>Back guarantee under 7 day</Text>
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            xl: "20% 50%",
            md: "30% 60%",
            base: "40% 50%",
          }}
          justifyItems={"center"}
          alignItems={"center"}
          mt={{ md: "20px" }}
        >
          <Box fontSize={"60px"} color={"#B38B5E"}>
            <Ri24HoursFill />
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Online Support 24/7</Text>
            <Text color={"#636363"}>Support online 24 hours a day</Text>
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{
            xl: "20% 50%",
            md: "30% 50%",
            base: "40% 50%",
          }}
          justifyItems={"center"}
          alignItems={"center"}
          mt={{ md: "20px" }}
        >
          <Box fontSize={"60px"} color={"#B38B5E"}>
            <FaHandHoldingUsd />
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Reliable</Text>
            <Text color={"#636363"}>Trusted by 1000+ brands</Text>
          </Box>
        </Box>
      </Box>

      <Box
        h={{ xl: "500px", md: "700px" }}
        display={"grid"}
        gridTemplateColumns={{ xl: "50% 1% 50%", md: "80%" }}
        mt={{ xl: "0px", md: "100px", base: "300px" }}
        justifyContent={{ xl: "center", md: "center" }}
        gap={"10px"}
      >
        <Box
          display={"grid"}
          justifyItems={{ xl: "end", md: "end", base: "start" }}
          alignItems={"center"}
        >
          <Box
            w={{ xl: "650px", md: "650px", base: "400px" }}
            h={" 320px"}
            bgImage={
              "https://gramentheme.com/html/addina/assets/imgs/furniture/product/off-01.png"
            }
          >
            <Box p={"70px 50px"}>
              <Text color={"#B38B5E"} fontWeight={"bold"}>
                GET 30% OFF
              </Text>
              <Text fontWeight={"bold"} fontSize={"30px"}>
                Wicker Hanging
              </Text>

              <Text fontWeight={"bold"} fontSize={"30px"}>
                Chairs
              </Text>
              <Button
                mt={"30px"}
                h={" 60px"}
                w={"160px"}
                bgColor={"#B28B5E "}
                borderRadius={"none"}
                color={"white"}
                _hover={{
                  bgColor: "#D3BFA6",
                  color: "#B28B5E",
                  transition: "all 0.5s",
                  border: "1px solid #B28B5E ",
                }}
              >
                BUY NOW <FaChevronRight />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box></Box>

        <Box display={"grid"} alignItems={"center"}>
          <Box display={"grid"} justifyItems={"start"} alignItems={"center"}>
            <Box
              w={{ xl: "650px", md: "650px", base: "400px" }}
              h={" 320px"}
              bgImage={
                "https://gramentheme.com/html/addina/assets/imgs/furniture/product/off-02.png"
              }
            >
              <Box p={"70px 50px"}>
                <Text color={"#B38B5E"} fontWeight={"bold"}>
                  GET 15% OFF
                </Text>
                <Text fontWeight={"bold"} fontSize={"30px"}>
                  Brasslegged
                </Text>

                <Text fontWeight={"bold"} fontSize={"30px"}>
                  Armchair
                </Text>
                <Button
                  mt={"30px"}
                  h={" 60px"}
                  w={"160px"}
                  bgColor={"#B28B5E "}
                  borderRadius={"none"}
                  color={"white"}
                  _hover={{
                    bgColor: "#D3BFA6",
                    color: "#B28B5E",
                    transition: "all 0.5s",
                    border: "1px solid #B28B5E ",
                  }}
                >
                  BUY NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        h={"100px"}
        display={"grid"}
        justifyItems={"center"}
        mt={{ md: "50px", base: "100px" }}
      >
        <Box>
          <Text
            fontWeight={"bold"}
            color={"#B28B5E"}
            bgColor={"#f3eee7"}
            w={"100px"}
            pl={"8px"}
          >
            TOP SALE
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={{ xl: "60px", md: "60px", base: "40px" }}
          >
            Featured Product
          </Text>
        </Box>
      </Box>

      <Box
        h={{ xl: "600px", md: "600px" }}
        display={"grid"}
        justifyItems={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box
          // w={"1420px"}
          h={{ xl: "500px", md: "800px" }}
          display={"grid"}
          gridTemplateColumns={{ xl: "repeat(4,1fr)", md: "repeat(2,1fr)" }}
          // display={"flex"}
          gap={"10px"}
          width={"80vw"}
          mt={{ xl: "0px", md: "0px", base: "50px" }}
        >
          {data
            .slice(current.startPoint, current.startPoint + 4)
            .map((data) => {
              return (
                <Box overflow={"hidden"}>
                  <Box
                    p={{
                      xl: " 60px 40px 40px 60px",
                      md: "40px 20px 20px 90px",
                      base: "0px 10px 40px 40px",
                    }}
                    bgColor={"#F5F1E6"}
                    position={"relative"}
                    // transition={"all 5s ease-in"}
                    _hover={{
                      zIndex: "1",
                      //  transform: "scale(1.1,1.1)"
                      // transition: "all 0.5s ease-in",
                    }}
                  >
                    <Image
                      h={"240px"}
                      src={data.Img}
                      transition={"all 0.5s"}
                      _hover={{
                        transform: " scale(1.1,1.1)",
                        cursor: "pointer",
                      }}
                    />

                    <Box
                      h={"50px"}
                      w={"240px"}
                      display={"grid"}
                      gridTemplateColumns={"20% 20% 20%"}
                      justifyContent={"center"}
                      gap={"10px"}
                      position={"absolute"}
                      top={{ xl: "280", md: "240", base: "220" }}
                      left={{ xl: "60px", md: "40px", base: "50px" }}
                      right={"10px"}
                      zIndex={"-1"}
                      // border={"2px solid red"}
                    >
                      <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                        <Box m={"8px"}>
                          <IoCartOutline fontSize={"30px"} color={"white"} />
                        </Box>
                      </Box>
                      <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                        <Box m={"9px"}>
                          <GrView fontSize={"30px"} color={"white"} />
                        </Box>
                      </Box>
                      <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                        <Box m={"9px"}>
                          <GoHeart fontSize={"30px"} color={"white"} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box h={"100px"} mt={"10px"}>
                    <Text fontSize={"20px"} fontWeight={"bold"}>
                      {data.name}
                    </Text>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      fontSize={" 20px"}
                      color={"#f2dd99"}
                      mt={"5px"}
                    >
                      <MdOutlineStarBorderPurple500 />
                      <MdOutlineStarBorderPurple500 />
                      <MdOutlineStarBorderPurple500 />
                      <MdOutlineStarBorderPurple500 />
                      <MdOutlineStarBorderPurple500 />
                    </Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"#B28B5E "}
                    >
                      {data.price}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          <Button
            position={"absolute"}
            left={{ xxl: "150px", xl: "150px", md: "50px" }}
            top={{ xxl: "200px", xl: "200px", md: "390px" }}
            borderRadius={"50%"}
            h={"60px"}
            w={"60px"}
            bgColor={"white"}
            display={{ xl: "block", md: "block", base: "none" }}
            _hover={{ bgColor: "#B28B5E", color: "white" }}
            onClick={handellLeft}
          >
            <FaChevronLeft />
          </Button>
          <Button
            position={"absolute"}
            // left={"0px"}
            top={{ xxl: "200px", xl: "200px", md: "390px" }}
            right={{ xxl: "150px", xl: "150px", md: "50px" }}
            borderRadius={"50%"}
            h={"60px"}
            w={"60px"}
            bgColor={"white"}
            p={"20px"}
            display={{ xl: "block", md: "block", base: "none" }}
            _hover={{ bgColor: "#B28B5E", color: "white" }}
            onClick={handelRight}
          >
            <FaChevronRight />
          </Button>
        </Box>
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={{ xl: " 50% 50%", md: "100%" }}
        h={{ xl: "600px", md: "600px", base: "900px" }}
        mt={{ xl: "0px", md: "300px" }}
        gap={{ md: "10px" }}
      >
        <Box
          display={"grid"}
          justifyItems={"end"}
          alignItems={"center"}
          bgColor={"#F5F1E6"}
        >
          <Box
            w={{ xl: "500px", md: "600px" }}
            mr={{ xl: "100px", md: "100px", base: "25px" }}
            bgColor={"#B28B5E"}
            p={"20px"}
          >
            <Box h={"340px"} p={"40px"}>
              <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>
                HOT DEAL furniture
              </Text>
              <Text fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                Live Furniture
              </Text>
              <Text fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                Your Love
              </Text>
              <Button
                borderRadius={"none"}
                mt={"20px"}
                w={"160px"}
                h={"50px"}
                fontWeight={"bold"}
                transition={"all 1s"}
                _hover={{ transform: " scale(0.95,0.95)" }}
              >
                BUY NOW <FaChevronRight />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          bgImage={
            "https://gramentheme.com/html/addina/assets/imgs/furniture/rating/bg-image.png"
          }
          bgRepeat={"no-repeat"}
          // bgSize={{ base: "500px" }}
          display={"grid"}
          justifyItems={"center"}
          alignItems={"end"}
          h={{ xl: "auto", md: "470px", base: "400px" }}
        >
          <Box
            w={"240px"}
            h={"150px"}
            mb={"160px"}
            bgColor={"white"}
            p={"20px"}
          >
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Dining Table
            </Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              mt={"10px"}
              color={" #E9C64A"}
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </Box>
            <Text mt={"10px"} fontWeight={"bold"} color={" #B38B5E"}>
              USD 190.00
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        p={{
          xxl: "50px 100px",
          xl: "100px 200px",
          md: "50px 100px",
          base: "25px 0px",
        }}
        mt={{ xl: "0px", md: "300px" }}
      >
        <Box>
          <Box w={"120px"} textAlign={"center"} bgColor={"#F3EEE7"}>
            <Text fontWeight={"bold"} color={"#B38B5E "}>
              THIS MONTH
            </Text>
          </Box>

          <Box
            display={"flex"}
            flexDirection={{ xl: "row", md: "row", base: "column" }}
            justifyContent={"space-between"}
          >
            <Box>
              <Text fontSize={"60px"} fontWeight={"bold"}>
                Trendy Collection
              </Text>
            </Box>
            <Box
              display={{ xl: "flex", md: "none" }}
              alignItems={"end"}
              gap={"10px"}
            >
              <Button
                bg={"none"}
                textDecoration={"underline"}
                textDecorationThickness={"2px"}
                textUnderlineOffset={"8px"}
                textDecorationColor={"#B38B5E"}
                fontWeight={"bold"}
                _hover={{ bg: "none" }}
                onClick={handelAllPorduct}
              >
                All Collection
              </Button>
              <Button
                bg={"none"}
                fontWeight={"bold"}
                _hover={{
                  bg: "none",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textDecorationColor: "gray",
                  textUnderlineOffset: "8px",
                }}
              >
                New In
              </Button>
              <Button
                bg={"none"}
                _hover={{
                  bg: "none",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textDecorationColor: "gray",
                  textUnderlineOffset: "8px",
                }}
              >
                Top Rated
              </Button>
              <Button
                bg={"none"}
                _hover={{
                  bg: "none",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textDecorationColor: "gray",
                  textUnderlineOffset: "8px",
                }}
              >
                Tensing Items
              </Button>
            </Box>
          </Box>
          <Box>
            <Box
              display={"grid"}
              gridTemplateColumns={{ xl: "20% 20% 20% 20%", md: " 40% 40%" }}
              gap={"20px"}
              justifyContent={"center"}
              mt={"20px"}
            >
              {product.map((data) => {
                return (
                  <Box overflow={"hidden"}>
                    <Box
                      p={{
                        xl: "40px 40px 40px 60px",
                        md: " 40px 20px 40px 20px",
                        base: " 10px 20px 55px 20px",
                      }}
                      bgColor={"#F5F1E6"}
                      position={"relative"}
                      // transition={"all 5s ease-in"}

                      _hover={{
                        zIndex: "1",
                        // //  transform: "scale(1.1,1.1)"
                        transition: "all 0.5s ease-in",
                      }}
                    >
                      <Image
                        h={"240px"}
                        src={data.Img}
                        transition={"all 0.5s"}
                        _hover={{
                          transform: " scale(1.1,1.1)",
                          cursor: "pointer",
                        }}
                      />

                      <Box
                        h={"50px"}
                        w={"240px"}
                        display={"grid"}
                        gridTemplateColumns={"20% 20% 20%"}
                        justifyContent={"center"}
                        gap={"10px"}
                        position={"absolute"}
                        top={{ xl: "260", md: "260", base: "240" }}
                        left={{ xl: "60px", md: "0px" }}
                        // right={"0"}
                        zIndex={"-1"}
                        _hover={{ transition: "all 1s" }}
                      >
                        <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                          <Box m={"8px"}>
                            <IoCartOutline fontSize={"30px"} color={"white"} />
                          </Box>
                        </Box>
                        <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                          <Box m={"9px"}>
                            <GrView fontSize={"30px"} color={"white"} />
                          </Box>
                        </Box>
                        <Box borderRadius={"50%"} bgColor={"#B28B5E"}>
                          <Box m={"9px"}>
                            <GoHeart fontSize={"30px"} color={"white"} />
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box h={"100px"} mt={"10px"}>
                      <Text fontSize={"20px"} fontWeight={"bold"}>
                        {data.name}
                      </Text>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        fontSize={" 20px"}
                        color={"#f2dd99"}
                        mt={"5px"}
                      >
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                        <MdOutlineStarBorderPurple500 />
                      </Box>
                      <Text
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        color={"#B28B5E "}
                      >
                        {data.price}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          m={{
            xxl: "50px 50px",
            xl: "40px 100px",
            md: "20px 0px",
            base: "40px 0px",
          }}
          display={"grid"}
          gridTemplateColumns={{ xl: "57% 40%", md: "100%", base: "100%" }}
          gap={"40px"}
        >
          <Box
            bgImage={
              "https://gramentheme.com/html/addina/assets/imgs/furniture/ad/ad-discount.png"
            }
            bgRepeat={"no-repeat"}
            p={{ xxl: "40px", xl: "20px", md: "20px", base: "30px" }}
          >
            <Box
              border={"2px solid white"}
              p={{
                xxl: "40px 40px",
                xl: "80px 40px",
                md: "80px 40px",
                base: "40px 40px",
              }}
              color={"white"}
            >
              <Text fontSize={"20px"} fontWeight={"bold"}>
                HOT DEAL furniture
              </Text>
              <Text fontSize={"50px"} fontWeight={"bold"} mt={"10px"}>
                Furniture limit offer
              </Text>
              <Text fontSize={"50px"} fontWeight={"bold"}>
                30% Off
              </Text>
              <Button
                w={"180px"}
                h={"60px"}
                mt={"20px"}
                bg={"transparent"}
                border={"2px solid white"}
                borderRadius={"none"}
                color={"white"}
                transition={"all 1.5s"}
                _hover={{ bgColor: "#B28B5E", border: "none" }}
              >
                BUY NOW <FaChevronRight />
              </Button>
            </Box>
          </Box>
          <Box
            bgImage={
              "https://gramentheme.com/html/addina/assets/imgs/furniture/ad/ad-timer.png"
            }
            p={"20px"}
          >
            <Box
              border={"2px solid white"}
              display={"grid"}
              justifyItems={"center"}
              h={"430px"}
              p={"40px 0px"}
            >
              <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>
                HOT DEAL fURNITURE
              </Text>
              <Text
                fontSize={{ xl: "40px", md: "40px", base: "30px" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Deals OF the Week
              </Text>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  xl: "20% 20% 20% 20%",
                  md: "20% 20% 20% 20%",
                  base: " 40% 40%",
                }}
                gap={{ xxl: "20px", xl: "30px", md: "30px", base: "30px" }}
                justifyContent={"center"}
                w={{ xl: "400px", md: "400px", base: "a" }}
              >
                <Box
                  display={"grid"}
                  alignItems={"center"}
                  textAlign={"center"}
                  bgColor={"#4D737D"}
                  w={{ xxl: "80px", xl: "100px", md: "100px", base: "100px" }}
                >
                  <Box fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                    99
                  </Box>
                  <Box
                    fontSize={{ xl: "20px", md: "20px", base: "15px" }}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    DAYS
                  </Box>
                </Box>

                <Box
                  display={"grid"}
                  alignItems={"center"}
                  textAlign={"center"}
                  bgColor={"#4D737D"}
                  w={{ xxl: "80px", xl: "100px", md: "100px", base: "100px" }}
                >
                  <Box fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                    12
                  </Box>
                  <Box
                    fontSize={{ xl: "20px", md: "20px", base: "15px" }}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    HRS
                  </Box>
                </Box>

                <Box
                  display={"grid"}
                  alignItems={"center"}
                  textAlign={"center"}
                  bgColor={"#4D737D"}
                  w={{ xxl: "80px", xl: "100px", md: "100px", base: "100px" }}
                >
                  <Box fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                    54
                  </Box>
                  <Box
                    fontSize={{ xl: "20px", md: "20px", base: "15px" }}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    MINS
                  </Box>
                </Box>

                <Box
                  display={"grid"}
                  alignItems={"center"}
                  textAlign={"center"}
                  bgColor={"#4D737D"}
                  w={{ xxl: "80px", xl: "100px", md: "100px", base: "100px" }}
                >
                  <Box fontSize={"40px"} fontWeight={"bold"} color={"white"}>
                    59
                  </Box>
                  <Box fontSize={"20px"} fontWeight={"bold"} color={"white"}>
                    SEC
                  </Box>
                </Box>
              </Box>

              <Button
                w={"180px"}
                h={"60px"}
                mt={"20px"}
                bg={"transparent"}
                border={"2px solid white"}
                borderRadius={"none"}
                color={"white"}
                transition={"all 1.5s"}
                _hover={{ bgColor: "#B28B5E", border: "none" }}
              >
                BUY NOW <FaChevronRight />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bgImage={
          "https://gramentheme.com/html/addina/assets/imgs/furniture/testimonial/bg.jpg"
        }
        p={{ xl: "140px 0px", md: "140px 0px", base: "20px 0px" }}
        display={"grid"}
        justifyItems={"center"}
        alignContent={"center"}
      >
        <Box
          bgColor={"#444444"}
          w={"140px"}
          textAlign={"center"}
          h={"32px"}
          p={"5px"}
        >
          <Text color={"white"} fontWeight={"bold"}>
            TESTIMONIAL
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ xl: "60px", md: "60px", base: "40px" }}
            fontWeight={"bold"}
            color={"white"}
          >
            Client Feedback
          </Text>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xl: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
          justifyContent={"center"}
          gap={"10px"}
          m={{ xl: "10px 300px", md: "10px 50px" }}
        >
          {testimonial.map((data) => {
            return (
              <Box>
                <Box bgColor={"white"} p={"40px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"10px"}
                    mt={"10px"}
                    color={" #E9C64A"}
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </Box>
                  <Text fontWeight={"bold"} fontSize={"20px"} mt={"10px"}>
                    {data.name}
                  </Text>
                  <Text color={"#555555"}>{data.work}</Text>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur the adipiscing elit
                    vestibulum viverra eget felis interdum fusce odio lacus.
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box></Box>
      </Box>

      <Box p={{ xl: "120px 300px", md: "120px 50px", base: "50px 0px" }}>
        <Box w={"120px"} textAlign={"center"} bgColor={"#F3EEE7"}>
          <Text fontWeight={"bold"} color={"#B28B5E"}>
            THIS WEEK
          </Text>
        </Box>

        <Box>
          <Text fontSize={"60px"} fontWeight={"bold"}>
            Best Sellers
          </Text>
        </Box>
        <Box
          display={"grid"}
          mt={"20px"}
          gridTemplateColumns={{ xl: "30% 30% 30%", md: "45% 45%" }}
          gap={{ xl: "40px", md: "40px", base: "20px" }}
        >
          {bestseller.map((data) => {
            return (
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  xl: "45% 45%",
                  md: "48% 49%",
                  base: "48% 49%",
                }}
                gap={"20px"}
              >
                <Box>
                  <Image h={{ md: "120px" }} src={data.img} />
                </Box>
                <Box mt={{ xl: "10px", md: "0px" }}>
                  <Text
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    _hover={{ color: "#B28B5E", cursor: "pointer" }}
                  >
                    {data.name}
                  </Text>
                  <Text fontSize={"20px"} fontWeight={"bold"} color={"#B28B5E"}>
                    USD {data.price}
                  </Text>
                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(5,1fr)"}
                    color={"#EAC74A"}
                    mt={"10px"}
                  >
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        p={{ xl: "100px 0px", md: "100px 0px", base: "50px 0px" }}
        display={"grid"}
        justifyItems={{ xl: "center", md: "center", base: "center" }}
        alignContent={"center"}
        bgColor={"#f5f1e6"}
      >
        <Box w={"120px"} textAlign={"center"} bgColor={"#ebe2d2"}>
          <Text fontWeight={"bold"} color={"#B28B5E"}>
            READ BLOG
          </Text>
        </Box>

        <Box>
          <Text fontSize={"60px"} fontWeight={"bold"}>
            Recent Blog
          </Text>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xl: "50% 50%", md: "100%" }}
          gap={"20px"}
          mt={"10px"}
        >
          <Box
            w={{ xl: "600px", md: "600px", base: "auto" }}
            display={"grid"}
            gridTemplateColumns={{ xl: "50% 50%", md: "50% 50%", base: "100%" }}
            bgColor={"white"}
          >
            <Box p={"40px"}>
              <Box bgColor={"#F3EEE7"} w={"120px"} borderRadius={"20px"}>
                <Text
                  color={"#B28B5E"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  _hover={{ color: "gray" }}
                >
                  Chair Design
                </Text>
              </Box>
              <Box mt={"10px"} display={"flex"} gap={"10px"}>
                <Text
                  color={"gray"}
                  fontWeight={"bold"}
                  _hover={{ color: "#B28B5E" }}
                >
                  By Alex Manie
                </Text>
                <Text color={"gray"} fontWeight={"bold"}>
                  07 jan, 2024
                </Text>
              </Box>
              <Text
                fontSize={"25px"}
                fontWeight={"bold"}
                mt={"10px"}
                _hover={{ color: "#B28B5E" }}
              >
                Arrangement that's nearly perfect.
              </Text>
              <Button
                mt={"10px"}
                w={"60px"}
                h={"60px"}
                borderRadius={"50%"}
                bgColor={"#F0E8DF"}
                color={"#B28B5E"}
                _hover={{ bgColor: "#B28B5E", color: "white" }}
              >
                <FaChevronRight />
              </Button>
            </Box>
            <Box p={{ xl: "20px", md: "20px", base: "40px" }}>
              <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/blog/blog-image1.jpg" />
            </Box>
          </Box>

          <Box
            w={{ xl: "600px", md: "600px", base: "auto" }}
            display={"grid"}
            gridTemplateColumns={{
              xl: "50% 50%",
              md: "50% 50%",
              base: " 100%",
            }}
            bgColor={"white"}
          >
            <Box p={"40px"}>
              <Box bgColor={"#F3EEE7"} w={"120px"} borderRadius={"20px"}>
                <Text
                  color={"#B28B5E"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  _hover={{ color: "gray" }}
                >
                  Sofa Design
                </Text>
              </Box>
              <Box mt={"10px"} display={"flex"} gap={"10px"}>
                <Text
                  color={"gray"}
                  fontWeight={"bold"}
                  _hover={{ color: "#B28B5E" }}
                >
                  By Alex Manie
                </Text>
                <Text color={"gray"} fontWeight={"bold"}>
                  07 jan, 2024
                </Text>
              </Box>
              <Text
                fontSize={"25px"}
                fontWeight={"bold"}
                mt={"10px"}
                _hover={{ color: "#B28B5E" }}
              >
                Eworkstation arrangement that's
              </Text>
              <Button
                mt={"10px"}
                w={"60px"}
                h={"60px"}
                borderRadius={"50%"}
                bgColor={"#F0E8DF"}
                color={"#B28B5E"}
                _hover={{ bgColor: "#B28B5E", color: "white" }}
              >
                <FaChevronRight />
              </Button>
            </Box>
            <Box p={{ xl: "20px", md: "20px", base: "40px" }}>
              <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/blog/blog-image2.jpg" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box h={"600px"} p={{ xl: "100px 200px", md: "50px 20px" }}>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xl: "30% 30% 30%", md: "45% 45%" }}
          p={"20px"}
          gap={"40px"}
        >
          <Box p={"30px"} lineHeight={"1.6"} bgColor={"#d9f3fb"}>
            <Text fontSize={"30px"} fontWeight={"bold"}>
              Exclusive offers for you
            </Text>
            <Text color={"gray"} fontSize={"20px"}>
              Get weekly deals, valuable health information and more.
            </Text>
            <Button
              mt={"20px"}
              w={"160px"}
              h={"60px"}
              border={"1px solid black"}
              borderRadius={"none"}
              bgColor={"#d9f3fb"}
              transition={"all 1s"}
              _hover={{ color: "white", bgColor: "#B28B5E", border: "none" }}
            >
              SING UP <FaChevronRight />
            </Button>
          </Box>
          <Box p={"30px"} lineHeight={"1.6"} bgColor={"#f9ffe0"}>
            <Text fontSize={"30px"} fontWeight={"bold"}>
              Join Our Community
            </Text>
            <Text color={"gray"} fontSize={"20px"}>
              Get weekly deals, valuable health information and more.
            </Text>
            <Button
              mt={"20px"}
              w={"220px"}
              h={"60px"}
              border={"1px solid black"}
              borderRadius={"none"}
              bgColor={"#f9ffe0"}
              transition={"all 1s"}
              _hover={{ color: "white", bgColor: "#B28B5E", border: "none" }}
            >
              JOIN FREE NOW
              <FaChevronRight />
            </Button>
          </Box>
          <Box p={"30px"} lineHeight={"1.6"} bgColor={"#ffe2e5"}>
            <Text fontSize={"30px"} fontWeight={"bold"}>
              Get our FREE app Now!
            </Text>
            <Text color={"gray"} fontSize={"20px"}>
              Get weekly deals, valuable health information and more.
            </Text>
            <Box
              display={"grid"}
              gridTemplateColumns={" 50% 50%"}
              mt={"20px"}
              gap={"10px"}
            >
              <Image
                src="https://gramentheme.com/html/addina/assets/imgs/app/play-store.png"
                bgColor={"black"}
                p={{ xl: "20px", md: "7px" }}
                transition={"all 1s"}
                _hover={{ transform: "translateY(-0.25em)", cursor: "pointer" }}
              />
              <Image
                src="https://gramentheme.com/html/addina/assets/imgs/app/apple-store.png"
                bgColor={"black"}
                p={{ xl: "20px", md: "6px" }}
                transition={"all 1s"}
                _hover={{ transform: "translateY(-0.25em)", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xl: "20% 20% 20% 20% 20%", md: "30% 30% 30%" }}
          mt={"40px"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/brand/brand-01.png" />
          <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/brand/brand-02.png" />
          <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/brand/brand-03.png" />
          <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/brand/brand-04.png" />
          <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/brand/brand-05.png" />
        </Box>
      </Box>

      <Box

      // h={"500px"}
      // bgColor={"#191919"}
      // p={"100px 300px"}
      // display={"grid"}
      // gridTemplateColumns={"25% 25% 25% 25%"}
      // gap={"40px"}
      >
        <Box
          bgColor={"#191919"}
          p={{ xl: "100px 300px", md: "50px 50px", base: "50px 50px" }}
          display={"grid"}
          gridTemplateColumns={{ xl: "25% 25% 25% 25%", md: "50% 50%" }}
          gap={"40px"}
          mt={{ xl: "0px", md: "400px", base: "940px" }}
        >
          <Box>
            <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/logo/logo-light.svg" />
            <Text color={"gray"} mt={"10px"} fontWeight={"bold"}>
              It helps designers plan out where the content will sit, the
              content to be written and approved.
            </Text>

            <Box
              display={"grid"}
              gridTemplateColumns={" 20% 20% 20% 20%"}
              mt={"40px"}
              gap={"10px"}
            >
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50%"}
                bgColor={"white"}
                fontSize={"20px"}
                p={"10px"}
                transition={"all 1s"}
                _hover={{
                  bgColor: "#B28B5E",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <FaFacebookF />
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50%"}
                bgColor={"white"}
                fontSize={"20px"}
                p={"10px"}
                transition={"all 1s"}
                _hover={{
                  bgColor: "#B28B5E",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <FaTwitter />
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50%"}
                bgColor={"white"}
                fontSize={"20px"}
                p={"10px"}
                transition={"all 1s"}
                _hover={{
                  bgColor: "#B28B5E",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <FaLinkedinIn />
              </Box>
              <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50%"}
                bgColor={"white"}
                fontSize={"20px"}
                p={"10px"}
                transition={"all 1s"}
                _hover={{
                  bgColor: "#B28B5E",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <FaInstagram />
              </Box>
            </Box>
          </Box>
          <Box>
            <Text color={"white"} fontSize={"25px"} fontWeight={"bold"}>
              Services
            </Text>
            <Box mt={"20px"} lineHeight={"2"}>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Log In
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Wishlist
              </Text>
              <Text
                color={"#BABABA "}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Return Policy
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Privacy policy
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Shopping FAQs
              </Text>
            </Box>
          </Box>

          <Box>
            <Text color={"white"} fontSize={"25px"} fontWeight={"bold"}>
              Company
            </Text>
            <Box mt={"20px"} lineHeight={"2"}>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Home
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                About us
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Pages
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Blog
              </Text>
              <Text
                color={"#BABABA"}
                fontWeight={"bold"}
                fontSize={"20px"}
                _hover={{ color: "white", cursor: "pointer" }}
              >
                Contact us
              </Text>
            </Box>
          </Box>
          <Box>
            <Text color={"white"} fontSize={"25px"} fontWeight={"bold"}>
              Contact
            </Text>
            <Text color={"#555555"} mt={"20px"} fontWeight={"bold"}>
              4517 Washington Ave. Manchester, Kentucky 39495
            </Text>

            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={"20px"}
              mt={"20px"}
            >
              <Box
                h={"50px"}
                w={"50px"}
                borderRadius={"50%"}
                bgColor={"#B28B5E"}
                fontSize={"25px"}
                color={"white"}
                p={"12px"}
              >
                <FaMapMarkerAlt />
              </Box>
              <Box
                color={"#BABABA"}
                fontWeight={"bold"}
                _hover={{ color: "#B28B5E", cursor: "pointer" }}
              >
                711-2880 Nulla St.
              </Box>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={"20px"}
              mt={"20px"}
            >
              <Box
                h={{ xl: "50px" }}
                w={"50px"}
                borderRadius={"50%"}
                bgColor={"#B28B5E"}
                fontSize={"25px"}
                color={"white"}
                p={"12px"}
              >
                <FaPhone />
              </Box>
              <Box
                color={"#BABABA"}
                fontWeight={"bold"}
                _hover={{ color: "#B28B5E", cursor: "pointer" }}
              >
                +964 742 44 763
                <Text color={"#555555"}>Mon - Sat: 9 AM - 5 PM</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
