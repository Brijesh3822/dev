import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nevbar from "./Nevbar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import { IoBagCheck } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { DECREMENT_QTY, INCREMENT_QTY, REMOVE_QTY } from "../Redux/ActionType";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AddCart() {
  const { cartdata } = useSelector((store) => store.items);
  console.log(cartdata);

  const [total, setTotal] = useState();
  useEffect(() => {
    function handelTotal() {
      const total = cartdata.reduce((pr, cr) => {
        return pr + cr.price * cr.qty;
      }, 0);
      console.log(total);
      setTotal(total);
    }
    handelTotal();
  }, [cartdata]);
  const dispatch = useDispatch();
  function handelQtyIncrement(el) {
    dispatch({ type: INCREMENT_QTY, payload: el });
  }
  function handelQtyDecrement(el) {
    if (el.qty <= 0) {
      dispatch({ type: REMOVE_QTY, payload: el.id });
    } else {
      dispatch({ type: DECREMENT_QTY, payload: el });
    }
  }
  // const removeQty = (data) => {
  //   if (data.qty <= 0) {
  //     dispatch({ type: REMOVE_CART, payload: data.id });
  //   } else {
  //     dispatch({ type: REMOVE_QTY, payload: data });
  //   }
  // };
  // const addQty = (data) => {
  //   dispatch({ type: ADD_QTY, payload: data });
  // };
  return (
    <div>
      <Header />
      <Nevbar />
      {/* {cart.map((data) => {
        return (
          <>
            <Image src={data.img} alt="" />
          </>
        );
      })} */}

      <Box
        display={"grid"}
        // flexDirection={"column"}
        gridTemplateColumns={{ xl: "2% 10%", md: "8% 20%", base: " 10% 40%" }}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"30px"}
        fontWeight={"bold"}
      >
        <IoBagCheck />
        <Text>My Cart</Text>
      </Box>
      <Box
        display={{ xl: "grid", md: "grid", base: "flex" }}
        flexDirection={{ xl: "none", md: "none", base: "column" }}
        gridTemplateColumns={{ xl: "58% 40%", }}
        gap={"20px"}
        p={"10px"}
      >
        <Box borderBottom={"2px solid gray"} borderTop={"2px solid gray"}>
          {cartdata.map((el) => {
            return (
              <>
                <Box
                  display={"grid"}
                  gridTemplateColumns={{
                    xl: "25% 25% 25% 25% ",
                    md: "25% 25% 25% 25%",
                    base: "50% 50% ",
                  }}
                  justifyItems={{ xl: "none", md: "none", base: "center" }}
                  alignItems={"center"}
                  p={"20px"}
                >
                  <Box w={"160px"}>
                    <Image src={el.Img}></Image>
                  </Box>
                  <Box fontSize={"20px"} fontWeight={"bold"} color={"gray"}>
                    {el.name}{" "}
                  </Box>
                  <Box fontSize={"20px"} fontWeight={"bold"} color={"gray"}>
                    {el.price}
                  </Box>
                  <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                    <Button
                      onClick={() => {
                        handelQtyDecrement({ id: el.id, qty: el.qty - 1 });
                      }}
                      transition={"all 1s"}
                      _hover={{ bgColor: "#B38B5E", color: "white" }}
                    >
                      -
                    </Button>
                    <Text fontSize={"20px"}>{el.qty}</Text>
                    <Button
                      onClick={() =>
                        handelQtyIncrement({ id: el.id, qty: el.qty + 1 })
                      }
                      transition={"all 1s"}
                      _hover={{
                        bgColor: "#B38B5E",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </Button>
                    {/* <Button
                      onClick={() => addQty({ id: el.id, qty: el.qty + 1 })}
                    >
                      +
                    </Button> */}
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>

        <Box
          p={{ xl: "50px 200px", md: "50px 200px", base: "50px 0px" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
        >
          <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
            <Input type="text" placeholder="Enter Promo code" />
            <Button
              transition={"all 1s"}
              _hover={{ bgColor: "#B38B5E", color: "white" }}
            >
              Sumbit
            </Button>
          </Box>
          <Box lineHeight={"2"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"20px"}>Shipping Price</Text>
              <Text>${total}</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"20px"}>Discount</Text>
              <Text>$00</Text>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              borderBottom={"2px solid gray"}
            >
              <Text fontSize={"20px"}>Shipping Charge</Text>
              <Text textDecoration={"line-through"}>$10</Text>
            </Box>
            <Box
              fontSize={"20px"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text>Total</Text>
              <Text fontWeight={"bold"}>${total}</Text>
            </Box>
          </Box>

          <Link to={"/payment"}>
            <Button
              w={"100%"}
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              alignItems={"center"}
              transition={"all 1s"}
              _hover={{ bgColor: "#B38B5E", color: "white", cursor: "pointer" }}
            >
              <FaLock /> <Text fontSize={"20px"}>CheckOut</Text>
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default AddCart;
