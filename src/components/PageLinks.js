import React from "react";

export default function PageLinks(props) {
  const links = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
  ];
  return links.map((link) => {
    const { id, href, text } = link;
    const linkClass = props.className;
    return (
      <li key={id}>
        <a href={href} className={linkClass}>
          {text}
        </a>
      </li>
    );
  });
}
