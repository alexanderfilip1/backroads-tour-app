import React from "react";
import Title from "./Title";
import Service from "./Service";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title={"our"} subTitle={"services"} />
      <div className="section-center services-center">
        <Service />
      </div>
    </section>
  );
}
