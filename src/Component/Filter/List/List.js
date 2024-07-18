import React from "react";
import "./List.scss";
import Item from "../Item";

export default function List() {
  return (
    <div className="filter">
      <header className="filter__header">
        <h3 className="filter__title">Количество пересадок</h3>
      </header>
      <div className="filter__list">
        <Item />
      </div>
    </div>
  );
}
