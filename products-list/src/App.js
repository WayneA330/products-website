import { Routes, Route } from "react-router-dom";
import Details from "./page/Details";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:product_details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
