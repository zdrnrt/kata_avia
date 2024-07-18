import React from "react";
import "./Item.scss";

export default function Item() {
  return (
    <label className="filter__item filter-item">
      <input type="checkbox" value="all" className="filter-item__input" />
      <span className="filter-item__checkbox"></span>
      <span className="filter-item__title">Все</span>
    </label>
  );
}
