import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import {
  Box,
  Button,
  Image,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Action";
import { SIGNUP_DATA } from "../Redux/ActionType";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";
import background from "./Image/Frame.png";
import send from "./Image/send.png";

import coin from "./Image/Vector.png";
import user from "./Image/x.png";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  function handelClick() {
    setIsOpen(!isOpen);
  }
  // const [submit, setSumbit] = useState(false);
  const dispatch = useDispatch();

  function validValue(data) {
    let errors = {};

    // Correct email validation
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Invalid email format.";
    }

    if (data.name.length < 10) {
      errors.name = "Name is too short. Enter at least 10 characters.";
    }

    if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    return errors;
  }

  function handelChange(e) {
    // const value =;
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    // if (!value.trim()) {
    //   setError("this field required.");
    // } else {
    //   setError("");
    // }
    // console.log(signUpData);
  }

  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    const validationErrors = validValue(signUpData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(signup(signUpData));
      navigate("/signin");
    }
    console.log(signUpData);
  }

  return (
    <div>
      <Header />
      <Nevbar />

      <Box
        display={"flex"}
        flexDirection={{
          xl: "column",
          md: "column",
          base: "",
          basemd: "",
          basesm: "",
        }}
        justifyContent={"center"}
        p={{
          xl: "50px 400px",
          md: "10px 10px",
          base: "10px 10px",
          basemd: "10px 10px",
          basesm: "10px 10px",
        }}
      >
        <Box boxShadow="lg" p="" rounded="md" bg="white">
          <Box display={"grid"} justifyContent={"center"}>
            <Text fontSize={"40px"} fontWeight={"bold"} color={"gray"}>
              Sign UP
            </Text>
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              xl: "50% 50%",
              md: "50% 50%",
              base: "80%",
              basesm: "80%",
              basemd: "80%",
            }}
          >
            <Box display={"grid"} gap={"20px"} p={"40px"}>
              <Box display={"grid"}>
                <Text fontSize={"20px"}>Enter Your Name </Text>
                <Input
                  type="text"
                  w={"300px"}
                  name={"name"}
                  value={signUpData.name}
                  onChange={handelChange}
                />
                {errors.name ? (
                  <Text color={"red"}>
                    Name is too short.Enter 10 characters
                  </Text>
                ) : null}
              </Box>

              <Box>
                <Text fontSize={"20px"}>Enter Your Email </Text>
                <Input
                  type="email"
                  w={"300px"}
                  name={"email"}
                  value={signUpData.email}
                  onChange={handelChange}
                />
                {/* {errors.email && <Text color="red">{errors.email}</Text>} */}
                {errors.name ? <Text color={"red"}>invaild Email </Text> : null}
              </Box>
              <Box>
                <Text fontSize={"20px"}>Enter Your Password </Text>
                <Input
                  type="password"
                  w={"300px"}
                  name={"password"}
                  value={signUpData.password}
                  onChange={handelChange}
                />
                {errors.name ? (
                  <Text color={"red"}>Password is must be Eight Number </Text>
                ) : null}
              </Box>
              <Box>
                <Button
                  onClick={handelSubmit}
                  w={"300px"}
                  fontSize={"20px"}
                  transition={"all 1s"}
                  _hover={{ bgColor: "#B38B5E", color: "white" }}
                >
                  Submit
                </Button>
              </Box>
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Text>Already have an account? </Text>
                <Button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  bgColor={"transparent"}
                  color={"blue"}
                  _hover={{ bgColor: "transparent" }}
                >
                  Sign In
                </Button>
              </Box>
              <Box>
                <Button
                  w={"300px"}
                  fontSize={"20px"}
                  transition={"all 1s"}
                  display={"flex"}
                  gap={"10px"}
                  _hover={{ bgColor: "#B38B5E", color: "white" }}
                >
                  <FcGoogle /> <Text>Sign UP With Google</Text>
                </Button>
              </Box>
            </Box>
            <Box>
              <Image src="https://img.freepik.com/premium-vector/man-sits-table-with-laptop-potted-plant_782516-43276.jpg" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />

      {/* <Box
        border={"2px solid red"}
        w={"600px"}
        h={"600px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient={
          "linear-gradient(194.51deg, #27292C 16.82%, #000000 103.6%)"
        }
      >
          <Box
            // border={"2px solid red "}
            w={"400px"}
            h={"200px"}
            bgImage={background}
            borderRadius={"30px"}
            p={"20px"}
            position={"relative"}
            filter={isOpen ? "opacity(30%)" : "opacity(100%)"}
          >
          <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
            <Box
              // border={"2px solid red"}
              w={"38px"}
              h={"35px"}
              borderRadius={"12px"}
              boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
              bgGradient={
                "linear-gradient(320.66deg, #181716 14.75%, #312c2a 84.81%)"
              }
              // bgColor={" #a29d9d1a"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image w={"20px"} h={"20px"} src={send} />
            </Box>
            <Box
              color={"white"}
              fontWeight={"600"}
              display={"flex"}
              alignItems={"center"}
            >
              Send SMS
            </Box>
          </Box>
          <Box mt={"20px"}>
            <Box>
              <RangeSlider
                defaultValue={[100]}
                min={0}
                w={"360px"}
                max={300}
                step={30}
              > */}
      {/* <RangeSliderTrack
                  bgGradient={
                    "linear-gradient(320.66deg, #181716 14.75%, #312c2a 84.81%)"
                  }
                  h={"10px"}
                  borderRadius={"10px"}
                >
                  <RangeSliderFilledTrack
                    bgGradient={
                      "linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
                    }
                  />
                </RangeSliderTrack>
                <RangeSliderThumb
                  boxSize={5}
                  index={0}
                  bgGradient={
                    "linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
                  }
                  _focus={{ boxShadow: "0 0 3px 3px #e8b661" }}
                />
              </RangeSlider>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              mt={"-5px"}
            >
              <Box color={"darkgray"}>250 Coin</Box>
              <Box color={"darkgray"}>500 User</Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"row"} mt={"5px"} gap={"15px"}>
            <Box
              // border={"2px solid red"}
              w={"100px"}
              h={"60px"}
              borderRadius={"18px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              bgGradient={ */}
      {/* "linear-gradient(320.66deg, #181716 14.75%, #312c2a 84.81%)"
              }
              boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <Image src={coin} w={"20px"} />
                </Box>
                <Box color={"white"} fontWeight={"600"}>
                  250
                </Box>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <Image src={user} w={"20px"} />
                </Box> */}
      {/* <Box color={"white"} fontWeight={"600"}>
                  125
                </Box>
              </Box>
            </Box>
            <Box
              // border={"2px solid red"}
              w={"240px"}
              h={"60px"}
              borderRadius={"18px"}
              boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
              bgGradient={
                "linear-gradient(194.51deg, #27292C 16.82%, #000000 103.6%)"
              }
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              // border={"1px solid #a29d9d"}
            >
              <Box
                color="transparent"
                backgroundClip="text"
                bgImage="linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
                fontWeight="600"
              >
                Send
              </Box>
            </Box>
          </Box>
        </Box> */}

      {/* //   {/* {setIsOpen} */}
      {/* //   {isOpen ? ( */}
      {/* //     <Box */}
      {/* //       // backdropFilter={"opacity(60%)"}
      //       position={"absolute"}
      //       w={"400px"}
      //       h={"200px"}
      //       display={"flex"}
      //       flexDirection={"column"}
      //       justifyContent={"center"}
      //       alignItems={"center"}
      //       gap={"5px"}
      //     >
      //       <Box>
      //         <Image src={send} w={"40px"} />
      //       </Box>
      //       <Box color={"darkgrey"}> Send Custamer SMS</Box>

      //       <Box */}
      {/* //         bgGradient={ */}
      {/* //           "linear-gradient(320.66deg, #181716 14.75%, #312c2a 84.81%)"
      //         }
      //         borderRadius={"15px"}
      //         w={"230px"}
      //         h={"50px"}
      //         display={"flex"}
      //         justifyContent={"center"}
      //         alignItems={"center"}
      //       >
      //         <Button */}
      {/* //           color="transparent"
      //           backgroundClip="text"
      //           bgImage="linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
      //           fontWeight="600"
      //           _hover={{ bgColor: "transparent" }}
      //         >
      //           Unlock Feature Now
      //         </Button> */}
      {/* //       </Box> */}
      {/* //     </Box> */}
      {/* //   ) : (
      //     false
      //   )}
      // </Box> */}

      {/* // <Box */}
      {/* //   bgColor={"black"}
      //   w={"600px"}
      //   display={"flex"}
      //   justifyContent={"center"}
      // >
      //   <Button onClick={handelClick}> Click </Button>
      // </Box> */}
    </div>
  );
}

export default Signup;
