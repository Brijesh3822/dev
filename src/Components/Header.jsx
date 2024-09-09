import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

function Header() {
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
      <Box
        bgColor={"#B28B5E"}
        color={"white"}
        display={{ xl: "grid", md: "grid", base: "none" }}
        alignItems={{ xl: "center" }}
        gridTemplateColumns={{
          xxl: "22% 34% 20%",
          xl: "18% 30% 12%",
          md: "40% 30%",
        }}
        justifyContent={{ xl: "space-around", md: "space-around" }}
        py={"10px"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"7% 50%"}
          alignItems={"center"}
          fontSize={"20px"}
        >
          <MdOutlinePhoneInTalk />
          <Text>+380961381876</Text>
        </Box>
        <Box
          fontWeight={"bold"}
          display={{ xl: "block", md: "none", sm: "none" }}
        >
          <Text>TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03 ”</Text>
        </Box>
        <Box display={"flex"} gap={"60px"}>
          <Menu>
            <MenuButton fontWeight={"bold"} rightIcon={<FaChevronDown />}>
              English
            </MenuButton>
            <MenuList color={"black"} w={"20px"}>
              <MenuItem>Spanish</MenuItem>
              <MenuItem>Hindi</MenuItem>
              <MenuItem>Gujrati</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontWeight={"bold"} rightIcon={<FaChevronDown />}>
              USD
            </MenuButton>
            <MenuList color={"black"}>
              <MenuItem>EUR</MenuItem>
              <MenuItem>CHF</MenuItem>
              <MenuItem>KWD</MenuItem>
              <MenuItem>GBP</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontWeight={"bold"} rightIcon={<FaChevronDown />}>
              Setting
            </MenuButton>
            <MenuList color={"black"}>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Wishlist</MenuItem>
              <MenuItem>Cart</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
