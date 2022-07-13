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
      <section className=" col-12 my-4 py-4">
        <h3>What word do you want to look up?</h3>
        <form className="text-center m-4" onSubmit={handleSubmit}>
          <input
            className="search col-8"
            type="search"
            placeholder="Enter a word"
            onChange={handleChange}
          />
        </form>
      </section>

      <div className="row justify-content-center ">
        <div>
          <Result info={info} />
        </div>
      </div>
    </div>
  );
}
