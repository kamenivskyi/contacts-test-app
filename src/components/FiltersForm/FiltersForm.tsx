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
            <option selected disabled>
              Gender
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
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
