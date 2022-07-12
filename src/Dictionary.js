import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [input, setInput] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${input}`);
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  return (
    <form className="text-center m-5" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a word" onChange={handleChange} />
    </form>
  );
}
