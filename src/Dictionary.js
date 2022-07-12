import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [input, setInput] = useState("");
  let [info, setInfo] = useState({});
  function showData(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setInfo({
      name: response.data[0].word,
      partOfSpeach: response.data[0].meanings[0].partOfSpeech,
      def: response.data[0].meanings[0].definitions[0].definition,
    });
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
      <div className="row justify-content-center">
        <div className="info col-6 ">
          <h4>{info.name}</h4>
          <h4>{info.partOfSpeach}</h4>
          <p>{info.def}</p>
        </div>
      </div>
    </div>
  );
}
