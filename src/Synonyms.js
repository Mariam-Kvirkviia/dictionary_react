import React from "react";

export default function Synonyms(props) {
  if (props.syn.length) {
    return (
      <ul className="synonyms">
        {" "}
        <strong>Synonyms : </strong>{" "}
        {props.syn.map(function (syn, index) {
          return <li key={index}> {syn} </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
