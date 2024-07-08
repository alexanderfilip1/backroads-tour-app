import React from "react";
import Title from "./Title";
import Tour from "./Tour";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title={"feautured"} subTitle={"tours"} />
      <div className="section-center featured-center">
        <Tour />
      </div>
    </section>
  );
}
