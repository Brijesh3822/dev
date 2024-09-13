import React, { useState } from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../Redux/Action";
import { SIGNUP_DATA } from "../Redux/ActionType";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";

function Signin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signupdata } = useSelector((store) => store.User);
  // console.log(signupdata);
  const dispatch = useDispatch();
  function handelChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(loginData);
    // dispatch(login(loginData));

    const newSignData = signupdata.find((el) => {
      // console.log(el.email);
      // console.log(el.password);
      // console.log(loginData.email);
      // console.log(loginData.password);

      if (el.email == loginData.email && el.password == loginData.password) {
        navigate("/addcart");
      } else {
        alert("Email or Password worng");
      }
    });

    console.log(loginData);
    // if (newSignData) {

    // } else {

    // }
  }

  return (
    <div>
      <Header />
      <Nevbar />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={{ xl: "50px 400px", md: "10px 10px", base: "10px 10px" }}
      >
        <Box boxShadow="lg" p="" rounded="md" bg="white">
          <Box display={"grid"} justifyContent={"center"}>
            <Text fontSize={"40px"} fontWeight={"bold"} color={"gray"}>
              Login Detalis
            </Text>
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{ xl: "50% 50%", md: "50% 50%", base: "100%" }}
          >
            <Box display={"grid"} gap={"20px"} p={"40px"}>
              <Box display={"grid"}>
                <Text fontSize={"20px"}>Enter Your Email </Text>
                <Input
                  type="text"
                  w={"300px"}
                  name={"email"}
                  onChange={handelChange}
                />
              </Box>

              {/* <Box>
                <Text fontSize={"20px"}>Enter Your Email </Text>
                <Input
                  type="email"
                  w={"300px"}
                  name={"email"}
                  onChange={handelChange}
                />
              </Box> */}
              <Box>
                <Text fontSize={"20px"}>Enter Your Password </Text>
                <Input
                  type="password"
                  w={"300px"}
                  name={"password"}
                  onChange={handelChange}
                />
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
              <Box
                display={"flex"}
                flexDirection={{ xl: "row", md: "row", base: "column" }}
                alignItems={"center"}
              >
                <Button
                  onClick={() => {
                    // navigate("/signin");
                  }}
                  bgColor={"transparent"}
                  color={"blue"}
                  _hover={{ bgColor: "transparent" }}
                >
                  Forgot password?
                </Button>
                <Button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  bgColor={"transparent"}
                  color={"red"}
                  _hover={{ bgColor: "transparent" }}
                >
                  Don't have an account?
                </Button>
              </Box>
              {/* <Box>
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
              </Box> */}
            </Box>
            <Box>
              <Image src="https://cdni.iconscout.com/illustration/premium/thumb/account-login-protection-illustration-download-in-svg-png-gif-file-formats--security-secure-pack-files-folders-illustrations-7271014.png" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
}

export default Signin;
