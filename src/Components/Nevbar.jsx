import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { Image } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Nevbar() {
  // const breakpoints = {
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  return (
    <div>
      <Box
        h={"100px"}
        display={"grid"}

        gridTemplateColumns={{
          xl: "10% 55% 15% 10%",
          md: "70% 30% ",
          base: "55% 50%",
        }}
        alignItems={"center"}
        // alignContent={"center"}
        justifyContent={{ xl: "space-around", md: "start" }}
        p={{ xl: "0px 0px", md: " 10px 20px", base: "10px 20px" }}
      >
        <Box>
          <Link to={"/"}>
            <Image src="https://gramentheme.com/html/addina/assets/imgs/furniture/logo/logo.svg" />{" "}
          </Link>
        </Box>
        <Box
          display={{ xl: "grid", md: "none", base: "none" }}
          gridTemplateColumns={"10% 10% 10% 10% 10% 10%"}
        >
          <Box>
            <Menu>
              <MenuButton fontWeight={"bold"} _hover={{ color: "#B28B5E" }}>
                Home
              </MenuButton>
              <MenuList>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Pharmacy Store
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Furniture Store
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  grocery Store
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            fontWeight={"bold"}
            _hover={{ color: "#B28B5E", cursor: "pointer" }}
          >
            <Text>About</Text>
          </Box>
          <Box>
            <Menu>
              <MenuButton fontWeight={"bold"} _hover={{ color: "#B28B5E" }}>
                Shop
              </MenuButton>
              <MenuList>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Product
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  product Detalis
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Wishlist
                </MenuItem>

                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Cart
                </MenuItem>

                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Checkout
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton fontWeight={"bold"} _hover={{ color: "#B28B5E" }}>
                Pages
              </MenuButton>
              <MenuList>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  About Us
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Find a Store
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  protfolio
                </MenuItem>

                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  protfolio Detalis
                </MenuItem>

                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  faq
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Coming Soon
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  404
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box>
            <Menu>
              <MenuButton fontWeight={"bold"} _hover={{ color: "#B28B5E" }}>
                Blog
              </MenuButton>
              <MenuList>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Blog Default
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Blog Grid
                </MenuItem>
                <MenuItem
                  fontWeight={"bold"}
                  _hover={{
                    bgColor: "#B28B5E",
                    color: "white",
                    transition: "all 0.5s",
                  }}
                >
                  Blog Detalis
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            fontWeight={"bold"}
            _hover={{ color: "#B28B5E", cursor: "pointer" }}
          >
            <Text>Contact</Text>
          </Box>
        </Box>
        <Box
          display={{ xl: "flex", md: "none", base: "none" }}
          flexDirection={"row"}
          position={"relative"}
        >
          <Input
            type="text"
            placeholder="Search..."
            borderRadius={"50px"}
            pr={"50px"}
            w={"100%"}
            focusBorderColor="#CBD5E0"
          />
          <Button
            bgColor={"#B28B5E"}
            fontSize={"40px"}
            color={"white"}
            borderRadius={"50%"}
            w={"45px"}
            position={"absolute"}
            top={"0"}
            right={"0"}
            _hover={{ bgColor: "#B28B5E" }}
          >
            <IoSearch />
          </Button>
        </Box>
        <Box
          // fontSize={"60px"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"0px"}
        >
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            bg={"transparent"}
            fontSize={{ xl: "60px", md: "30px", base: "40px" }}
            _hover={{ bg: "transparent" }}
          >
            <FaSignInAlt />
          </Button>

          {/* <Link to={"/addcart"}> */}
          <Button
            onClick={() => {
              navigate("/addcart");
            }}
            // w={"60px"}
            bg={"transparent"}
            fontSize={{ xl: "60px", md: "30px", base: "40px" }}
            _hover={{ bg: "transparent" }}
          >
            <IoCartOutline />
          </Button>
          {/* </Link> */}

          {/* <IoMenu /> */}

          <Box>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              bgColor={"transparent"}
              color={"black"}
              fontSize={"30px"}
              _hover={{ bgColor: "white" }}
            >
              <IoMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bgColor={"#191919"}>
                <DrawerCloseButton
                  color={"white"}
                  mt={"10px"}
                  borderRadius={"50%"}
                  w={"40px"}
                  h={"40px"}
                  fontSize={"15px"}
                  bgColor={"#B28B5E"}
                />
                <DrawerHeader mt={"10px"} borderBottom={"2px solid #252525"}>
                  <Image
                    color={"white"}
                    src="https://gramentheme.com/html/addina/assets/imgs/furniture/logo/logo-light.svg"
                  />
                </DrawerHeader>

                <DrawerBody mt={"20px"} lineHeight={"2"}>
                  <Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>Home</Text>
                    </Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>About</Text>
                    </Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>Shop</Text>
                    </Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>Pages</Text>
                    </Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>Blog</Text>
                    </Box>
                    <Box color={"white"} fontSize={"20px"} fontWeight={"bold"}>
                      <Text>Contact</Text>
                    </Box>
                    {/* <Box>
                      <Button>Sign Up</Button>
                    </Box> */}
                  </Box>
                  <Box mt={"20px"}>
                    <Box fontSize={"30px"} color={"white"} fontWeight={"bold"}>
                      Contact Info
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} mt={"20px"}>
                      <Box
                        border={"1px solid  #252525"}
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"50%"}
                        color={"white"}
                        p={"10.5px"}
                        transition={"all 1s"}
                        _hover={{ bgColor: "#B28B5E", border: "none" }}
                      >
                        <LuMapPin />
                      </Box>
                      <Box>
                        <Text color={"white"} ml={"10px"}>
                          12/A, Mirnada City Tower, NYC
                        </Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} mt={"20px"}>
                      <Box
                        border={"1px solid  #252525"}
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"50%"}
                        color={"white"}
                        p={"10.5px"}
                        transition={"all 1s"}
                        _hover={{ bgColor: "#B28B5E", border: "none" }}
                      >
                        <MdOutlinePhone />
                      </Box>
                      <Box>
                        <Text color={"white"} ml={"10px"}>
                          +088889797697
                        </Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} mt={"20px"}>
                      <Box
                        border={"1px solid  #252525"}
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"50%"}
                        color={"white"}
                        p={"10.5px"}
                        transition={"all 1s"}
                        _hover={{ bgColor: "#B28B5E", border: "none" }}
                      >
                        <CgMail />
                      </Box>
                      <Box>
                        <Text color={"white"} ml={"10px"}>
                          support@mail.com
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Nevbar;
