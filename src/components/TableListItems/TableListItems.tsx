import React from "react";
import { IItem } from "../../interfaces";

interface IListItems {
  items: IItem[];
}

const TableListItems = ({ items }: IListItems) => {
  return (
    <table className="striped responsive-table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Full name</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Nationality</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item: IItem, index) => {
          const {
            email,
            name,
            phone,
            nat,
            location,
            picture: { thumbnail },
            dob: { date },
          } = item;

          console.log(item);

          return index < 10 ? (
            <tr key={email}>
              <td>
                <img src={thumbnail} className="circle" alt="" />
              </td>
              <td>
                <a href="">
                  {name?.title}.{name?.first} {name?.last}
                </a>
              </td>
              <td>{date}</td>
              <td>
                <a href="">
                  <i className="tiny material-icons">content_copy</i>
                  {email}
                </a>
              </td>
              <td>
                <a href="">
                  <i className="tiny material-icons">content_copy</i>
                  {phone}
                </a>
              </td>
              <td>
                <a href="">
                  <i className="tiny material-icons">content_copy</i>
                </a>
                /{location.country}/
                <br />
                {location.postcode} {location.street.name}
              </td>
              <td>
                <span className="badge">{nat}</span>
              </td>
            </tr>
          ) : null;
        })}
      </tbody>
    </table>
  );
};

export default TableListItems;
