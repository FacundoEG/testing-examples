import React from "react";
import { Button } from "./components/Button";

export function App() {
  const handleClick = () => alert("Clicked!");
  return <Button label="Click Me" onClick={handleClick} />;
}
