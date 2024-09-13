import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Action";
import { SIGNUP_DATA } from "../Redux/ActionType";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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
        flexDirection={{ xl: "column", md: "column", base: "" }}
        justifyContent={"center"}
        p={{ xl: "50px 400px", md: "10px 10px", base: "10px 10px" }}
      >
        <Box boxShadow="lg" p="" rounded="md" bg="white">
          <Box display={"grid"} justifyContent={"center"}>
            <Text fontSize={"40px"} fontWeight={"bold"} color={"gray"}>
              Sign UP
            </Text>
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{ xl: "50% 50%", md: "50% 50%", base: "80%" }}
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
    </div>
  );
}

export default Signup;
