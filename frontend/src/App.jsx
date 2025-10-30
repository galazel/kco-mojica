import Landing from "./views/Landing";
import Checkout from "./views/Checkout"

import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Admin from "./views/Admin";

function App() {
  return <>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
  </>;
}

export default App;
