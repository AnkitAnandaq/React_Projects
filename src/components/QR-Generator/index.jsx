import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">QR Code Generator</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className={`w-full p-3 rounded-lg text-white ${
            input && input.trim() !== ""
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
      </div>
      {qrCode && (
        <div className="mt-8">
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={200}
            bgColor="#fff"
          />
        </div>
      )}
    </div>
  );
}
