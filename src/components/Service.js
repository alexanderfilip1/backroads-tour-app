import React from "react";

export default function Service() {
  const serviceList = [
    {
      id: 1,
      icon: "fas fa-wallet fa-fw",
      title: "saving money",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
      id: 2,
      icon: "fas fa-tree fa-fw",
      title: "endless hiking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
    {
      id: 3,
      icon: "fas fa-socks fa-fw",
      title: "amazing comfort",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    },
  ];
  return serviceList.map((service) => {
    const { id, icon, title, text } = service;
    return (
      <article className="service" key={id}>
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    );
  });
}
