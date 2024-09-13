import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const data = useSelector((store) => store.User);
  console.log(data);

  return (
    <div>{data.isLoging ? <>{children}</> : <Navigate to={"/signin"} />}</div>
  );
}

export default ProtectedRoute;
