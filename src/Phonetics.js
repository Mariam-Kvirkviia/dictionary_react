import React from "react";
import Audio from "./Audio";

export default function Phonetics(props) {
  return props.phonetics.map(function (ph, index) {
    return (
      <div key={index}>
        <p>{ph.text}</p>
        <Audio audio={ph.audio} />
      </div>
    );
  });
}
