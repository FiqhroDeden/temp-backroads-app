import React from "react";
import { pageLinks } from "../data";

const PageLink = ({ type }) => {
  return (
    <>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={type} rel="noreferrer">
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default PageLink;
