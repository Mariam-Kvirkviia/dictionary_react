import React from "react";

export default function Photo(props) {
  if (props.photo) {
    return (
      <section className=" col-12 my-4 py-4">
        <div className="row">
          {props.photo.map(function (ph, index) {
            return (
              <div className="col-md-4 p-4">
                <img
                  className="img-fluid"
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
