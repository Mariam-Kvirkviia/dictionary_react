import React from "react";
import "./Dictionary.css";
import Example from "./Example";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";
export default function Result(props) {
  if (props.info.meanings) {
    return (
      <div>
        <h2 className="word">{props.info.word}</h2>
        <Phonetics phonetics={props.info.phonetics} />
        {props.info.meanings.map(function (defini, index) {
          return (
            <div key={index}>
              <h4>
                {" "}
                <em>{defini.partOfSpeech}</em>
              </h4>
              <p>
                <strong>Definition : </strong>
                {defini.definitions[0].definition}
              </p>
              <Example ex={defini.definitions[0].example} />

              <Synonyms syn={defini.definitions[0].synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
