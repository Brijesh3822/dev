import React from "react";
import { Route, Routes } from "react-router-dom";

import AddCart from "../Components/AddCart";
import Homepage from "../Components/Homepage";
import Payment from "../Components/Payment";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/addcart" element={<AddCart />}></Route>

        <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
