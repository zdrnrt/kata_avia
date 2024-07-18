import React from "react";
import "./List.scss";
import Item from "../Item";

export default function List() {
  return (
    <div className="ticket-list">
      <Item />
      <Item />
      <Item />
    </div>
  );
}
