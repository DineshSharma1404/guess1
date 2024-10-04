import { Routes, Route } from "react-router-dom";
import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import ThirdPage from "./Component/ThirdPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/SecondPage" element={<SecondPage />} />
      <Route path="/ThirdPage" element={<ThirdPage />} />
    </Routes>
  );
}

export default App;
