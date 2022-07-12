import React from "react";

export default function Example(props) {
  if (props.ex) {
    return (
      <p>
        <strong>Example : </strong> {props.ex}
      </p>
    );
  } else {
    return null;
  }
}
