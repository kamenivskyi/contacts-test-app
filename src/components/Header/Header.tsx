import React from "react";

const Header = () => {
  return (
    <header>
      <div className="row valign-wrapper">
        <div className="col s8">
          <h1 className="col s6">Contacts</h1>
        </div>
        <ul className="col s4 d-flex">
          <li>
            <button className="btn">
              <i className="material-icons">refresh</i>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="material-icons">format_list_bulleted</i>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="material-icons">view_module</i>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
