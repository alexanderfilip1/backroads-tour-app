import React from "react";
import PageLinks from "./PageLinks";
export default function MobileNav() {
  return (
    <div className="mobileNav active">
      <ul className="mobileNav--list">
        <PageLinks className={"nav-link"} />
      </ul>
    </div>
  );
}
