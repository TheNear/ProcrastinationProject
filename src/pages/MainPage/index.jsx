import React from "react";
import SidePanel from "../../components/SidePanel";

export default function MainPage() {
  return (
    <div className="main-wrapper">
      <SidePanel />
      <div className="main-window" />
    </div>
  );
}
