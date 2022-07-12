import React from "react";
import "./Dictionary.css";
export default function Result(props) {
  if (props.info.meanings) {
    return (
      <div>
        <h3 className="word">{props.info.word}</h3>
        {props.info.meanings.map(function (defini, index) {
          return (
            <div key={index}>
              <h4>
                {" "}
                <em>{defini.partOfSpeech}</em>
              </h4>
              <p> {defini.definitions[0].definition}</p>
              <p> {defini.definitions[0].example}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
