import { useState } from "react";

export default function StartPage({ onStart }) {
  const [code, setCode] = useState("");
  const [productType, setProductType] = useState("normal"); // normal | highTier

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 to-blue-400">
      <h1 className="text-4xl font-bold text-white mb-6">核心天赋觉醒</h1>
      <input
        className="p-3 rounded-lg mb-4 w-64"
        placeholder="请输入兑换码"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <select className="p-2 rounded-lg mb-4" value={productType} onChange={(e)=>setProductType(e.target.value)}>
        <option value="normal">普通版 0.99 元</option>
        <option value="highTier">高阶版 9.9 元</option>
      </select>
      <button
        className="px-6 py-3 bg-white font-bold rounded-lg shadow-lg"
        onClick={() => onStart(code, productType)}
      >
        开始测评
      </button>
    </div>
  );
}
