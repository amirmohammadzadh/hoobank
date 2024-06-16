import React from "react";

export default function FooterItem(props) {
  console.log(props.paragraphs, props.title);
  return (
    <div className="footer__item">
      <h1 className="footer__item__title">{props.title}</h1>
      {props.paragraphs.map((paragraph) => (
        <>
          <p className="footer__paragraph">{paragraph}</p>
        </>
      ))}
    </div>
  );
}
