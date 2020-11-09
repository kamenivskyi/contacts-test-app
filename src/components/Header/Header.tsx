import React from "react";
import clsx from "clsx";

interface HeaderProps {
  setGridView(value: string): void;
  gridView: string;
}

const Header = ({ setGridView, gridView }: HeaderProps) => {
  const onSetTableView = (value: string) => () => setGridView(value);

  return (
    <header className="header">
      <div className="row valign-wrapper">
        <div className="col s8">
          <h1 className="col s6">Contacts</h1>
        </div>
        <ul className="col s4 d-flex">
          <li>
            <button className="btn-small" onClick={onSetTableView("table")}>
              <i className="material-icons">refresh</i>
            </button>
          </li>
          <li>
            <button
              className={clsx("btn-small", {
                active: gridView === "table",
              })}
              onClick={onSetTableView("table")}
            >
              <i className="material-icons">format_list_bulleted</i>
            </button>
          </li>
          <li>
            <button
              className={clsx("btn-small", {
                active: gridView === "tiled",
              })}
              onClick={onSetTableView("tiled")}
            >
              <i className="material-icons">view_module</i>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
