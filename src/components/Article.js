import React from "react";

function article(props) {

  const { title, preview, minutes, date="/ January 1, 1970"} = props;
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default article;