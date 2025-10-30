import Landing from "./views/Landing";
import Checkout from "./views/Checkout"
import Account from "./views/Account"

import { Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
    </Routes>
  </>;
}

export default App;
