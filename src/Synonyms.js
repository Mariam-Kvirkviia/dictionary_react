import React from "react";

export default function Synonyms(props) {
  if (props.syn.length) {
    return (
      <section className=" col-12 my-4 py-4">
        <ul className="synonyms">
          {" "}
          <strong>Synonyms : </strong>{" "}
          {props.syn.map(function (syn, index) {
            return <li key={index}> {syn} </li>;
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
