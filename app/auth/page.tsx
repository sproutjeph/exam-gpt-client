"use client";

import React, { useState, useRef, ChangeEvent } from "react";

function Activation() {
  const [activationCode, setActivationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<HTMLInputElement[] | null[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Check if the input is a digit and update the state accordingly
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newActivationCode = [...activationCode];
      newActivationCode[index] = value;
      setActivationCode(newActivationCode);

      // Move focus to the next input field
      if (value !== "" && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
      console.log(newActivationCode);
    }
  };

  return (
    <div>
      <h1>User Activation</h1>
      <form>
        <div className="flex flex-col gap-3 mx-40 text-black bg-white">
          {activationCode.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className=""
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Activation;
