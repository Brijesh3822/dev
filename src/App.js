import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useState } from "react";


function App() {
  const [total, setTotal] = useState();
  return (
    <div>
    
      <AllRoutes total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
