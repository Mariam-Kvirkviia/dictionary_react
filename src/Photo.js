import React from "react";

export default function Photo(props) {
  if (props.photo) {
    return (
      <section className=" col-12 my-4 py-4">
        <div className="row mx-4 photos">
          {props.photo.map(function (ph, index) {
            return (
              <div className=" p-4">
                <img
                  className="img-fluid photo"
                  key={index}
                  src={ph.src.tiny}
                  alt="whatyou are looking for"
                />
              </div>
            );
          })}
        </div>{" "}
      </section>
    );
  } else {
    return null;
  }
}
