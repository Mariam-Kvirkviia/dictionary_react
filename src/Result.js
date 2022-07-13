import React from "react";
import "./Dictionary.css";
import Example from "./Example";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";
export default function Result(props) {
  if (props.info.meanings) {
    return (
      <div>
        <section className=" col-12 my-4 py-4">
          <h2 className="word">{props.info.word}</h2>
          <Phonetics phonetics={props.info.phonetics} />
        </section>
        {props.info.meanings.map(function (defini, index) {
          return (
            <div key={index}>
              <section className=" col-12 my-4 py-4">
                <h3>
                  {" "}
                  <em>{defini.partOfSpeech}</em>
                </h3>

                <p>
                  <strong>Definition : </strong>
                  {defini.definitions[0].definition}
                </p>

                <Example ex={defini.definitions[0].example} />
              </section>

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
