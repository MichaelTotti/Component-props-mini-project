import React from "react";

function About(props) {
    const image= props.image;
  return (
    <aside>
      <img src={props.image ? (image) : "https://via.placeholder.com/215" } alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;