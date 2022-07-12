import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
export default function Dictionary() {
  let [input, setInput] = useState("");
  let [info, setInfo] = useState({});
  function showData(response) {
    setInfo(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(url).then(showData);
  }
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <form className="text-center m-5" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleChange}
        />
      </form>
      <div className="row justify-content-center m-3">
        <div className="info col-md-6">
          <Result info={info} />
        </div>
      </div>
    </div>
  );
}
