"use client";

import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};
