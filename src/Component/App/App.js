import React from "react";
import "./App.scss";
import Header from "../Header";
import FilterList from "../Filter/List";
import TabList from "../Tab/List";
import TicketList from "../Ticket/List";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="app__filter">
          <FilterList />
        </div>
        <div className="app__content">
          <TabList />
          <TicketList />
        </div>
      </div>
    </div>
  );
}
