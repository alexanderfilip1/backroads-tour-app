import React from "react";

export default function SocialLinks(props) {
  const socialLinks = [
    { id: 1, href: "https://www.facebook.com", iconClass: "fab fa-facebook" },
    { id: 2, href: "https://www.twitter.com", iconClass: "fab fa-twitter" },
    {
      id: 3,
      href: "https://www.squarespace.com",
      iconClass: "fab fa-squarespace",
    },
  ];
  return socialLinks.map((link) => {
    const { id, href, iconClass } = link;
    const className = props.className;
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          <i className={iconClass}></i>
        </a>
      </li>
    );
  });
}
