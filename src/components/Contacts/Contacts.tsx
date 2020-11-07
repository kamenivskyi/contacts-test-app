import React from "react";
import FiltersForm from "../FiltersForm/FiltersForm";

import "./Contacts.css";

interface Props {}

const Contacts = (props: Props) => {
  return (
    <section className="contacts">
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
      <main>
        <FiltersForm />
      </main>
      <footer>Footer</footer>
    </section>
  );
};

export default Contacts;
