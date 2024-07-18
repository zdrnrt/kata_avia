import React from "react";
import "./Item.scss";

export default function Item() {
  return (
    <div className="ticket-item ticket-list__item">
      <header className="ticket-item__header">
        <div className="ticket-item__price">{"{13 400}"} Р</div>
        <div className="ticket-item__company">
          <img
            src="https://pics.avs.io/99/36/{IATA_CODE_HERE}.png"
            className="ticket-item__company-logo"
          />
        </div>
      </header>
      <div className="ticket-item__segment segment">
        <div className="segment__item">
          <div className="segment__key">MOW – HKT</div>
          <div className="segment__value">10:45 – 08:00</div>
        </div>
        <div className="segment__item">
          <div className="segment__key">В пути</div>
          <div className="segment__value">21ч 15м</div>
        </div>
        <div className="segment__item">
          <div className="segment__key">2 пересадки</div>
          <div className="segment__value">HKG, JNB</div>
        </div>
      </div>
      <div className="ticket-item__segment segment">
        <div className="segment__item">
          <div className="segment__key">MOW – HKT</div>
          <div className="segment__value">10:45 – 08:00</div>
        </div>
        <div className="segment__item">
          <div className="segment__key">В пути</div>
          <div className="segment__value">21ч 15м</div>
        </div>
        <div className="segment__item">
          <div className="segment__key">2 пересадки</div>
          <div className="segment__value">HKG, JNB</div>
        </div>
      </div>
    </div>
  );
}
