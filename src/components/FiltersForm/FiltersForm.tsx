import React from "react";

interface Props {}

const FiltersForm = (props: Props) => {
  return (
    <form className="row">
      <div className="col s5">
        <input
          placeholder="Search by full name"
          type="text"
          className="validate"
        />
      </div>
      <div className="col s7">
        <div className="row">
          <select className="browser-default col s3" defaultValue="Gender">
            <option disabled>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">All</option>
          </select>
          <input
            className="validate col s5"
            placeholder="Nationality"
            type="text"
          />
          <button type="button" className="btn col s2 offset-s2">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default FiltersForm;
