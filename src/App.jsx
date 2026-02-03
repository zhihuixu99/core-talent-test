import { useState } from "react";
import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";

function App() {
  const [started, setStarted] = useState(false);
  const [code, setCode] = useState("");
  const [productType, setProductType] = useState("normal");

  const handleStart = (inputCode, type) => {
    setCode(inputCode);
    setProductType(type);
    setStarted(true);
  };

  return (
    <div className="h-screen w-screen">
      {!started ? <StartPage onStart={handleStart} /> : <TestPage code={code} productType={productType} />}
    </div>
  );
}

export default App;
