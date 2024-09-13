import React from "react";
import { Route, Routes } from "react-router-dom";

import AddCart from "../Components/AddCart";
import Homepage from "../Components/Homepage";
import Payment from "../Components/Payment";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import ProtectedRoute from "../ProtectedRoute";

function AllRoutes({ total, setTotal }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/addcart"
          element={
            <ProtectedRoute>
              <AddCart total={total} setTotal={setTotal} />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/payment"
          element={<Payment total={total} setTotal={setTotal} />}
        ></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
