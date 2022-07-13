import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Audio(props) {
  if (props.audio) {
    return <ReactAudioPlayer src={props.audio} controls />;
  } else {
    return null;
  }
}
