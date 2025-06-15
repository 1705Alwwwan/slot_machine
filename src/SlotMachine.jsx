import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SlotMachine = () => {
  const symbols = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐", "💎"];
  const [slots, setSlots] = useState(["🍒", "🍋", "🍊"]);
  const [result, setResult] = useState("");

  const randomSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const spinSlots = () => {
    setResult("");
    let spins = 10;
    const interval = setInterval(() => {
      const newSlots = [randomSymbol(), randomSymbol(), randomSymbol()];
      setSlots(newSlots);
      spins--;

      if (spins === 0) {
        clearInterval(interval);
        checkResult(newSlots);
      }
    }, 100);
  };

  const checkResult = (slots) => {
    const [s1, s2, s3] = slots;
    if (s1 === s2 && s2 === s3) {
      setResult(`🎉 Selamat kamu menang dengan simbol ${s1}!`);
    } else {
      setResult("😢 Coba lagi...");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">🎰 Slot Machine</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="slot-container bg-white rounded-4 p-5 shadow text-center">
            <div
              className="slots d-flex justify-content-center mb-4"
              style={{ fontSize: "64px", fontWeight: "bold", letterSpacing: "20px" }}
            >
              {slots.map((symbol, index) => (
                <span key={index}>{symbol}</span>
              ))}
            </div>
            <button
              className="btn btn-primary spin-button px-5 py-3"
              style={{ fontSize: "20px" }}
              onClick={spinSlots}
            >
              Putar
            </button>
            <div
              id="result"
              className={`mt-4 fw-bold ${
                result.includes("menang") ? "text-success" : "text-danger"
              }`}
              style={{ fontSize: "20px" }}
            >
              {result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
