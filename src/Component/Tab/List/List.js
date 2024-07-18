import React from "react";
import Item from "../Item";
import "./List.scss";

export default function List() {
  return (
    <div className="tab">
      <div className="tab__list">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
