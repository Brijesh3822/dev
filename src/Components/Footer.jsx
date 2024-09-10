import { Box, Button, grid, Menu, Text, Image } from "@chakra-ui/react";
import React from "react";
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


function Footer() {
  return (
    <div>
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
          mt={{ xl: "0px", md: "400px", base: "auto" }}
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

export default Footer;
