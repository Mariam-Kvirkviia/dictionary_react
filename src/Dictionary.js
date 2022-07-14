import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photo from "./Photo";
export default function Dictionary(props) {
  let [input, setInput] = useState(props.defaultWord);
  let [info, setInfo] = useState({});
  let [load, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);
  function showData(response) {
    setInfo(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Default();
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  function showPhotos(response) {
    setPhoto(response.data.photos);
  }
  function Default() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(url).then(showData);
    let photosKey = `563492ad6f9170000100000161da69222ff345a8acb89b1728deaa06`;
    let photosUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=3`;
    axios
      .get(photosUrl, { headers: { Authorization: `Bearer ${photosKey}` } })
      .then(showPhotos);
  }
  function Load() {
    setLoaded(true);
    Default();
  }
  if (load) {
    return (
      <div>
        <section className=" col-12 my-4 py-4">
          <h3>What word do you want to look up?</h3>
          <form className="text-center m-4" onSubmit={handleSubmit}>
            <input
              className="search col-8"
              type="search"
              defaultValue={props.defaultWord}
              placeholder="Enter a word"
              onChange={handleChange}
            />
          </form>
        </section>

        <div className="row justify-content-center ">
          <div>
            <Result info={info} />
            <Photo photo={photo} />
          </div>
        </div>
      </div>
    );
  } else {
    Load();
    return null;
  }
}
