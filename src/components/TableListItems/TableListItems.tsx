import React, { useRef } from "react";
import moment from "moment";

import { IItem } from "../../interfaces";

interface IListItems {
  items: IItem[];
}

const TableListItems = ({ items }: IListItems) => {
  const fullNameRef: any = useRef();
  const phoneRef: any = useRef();
  const emailRef: any = useRef();

  const handleCopyToClipboard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fullNameRef.current.select();
    document.execCommand("copy");

    e.currentTarget.focus();
    // setCopySuccess('Copied!');
    // console.log(e.currentTarget.textContent);
    // console.log(fullNameRef.current!);
  };

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
            dob: { date, age },
          } = item;

          // console.log(item)

          const formattedDate = moment(date).format(
            "dddd, M/D/YYYY, h:mm:ss A"
          );

          return index < 10 ? (
            <tr key={email}>
              <td>
                <img src={thumbnail} className="circle" alt="" />
              </td>
              <td>
                <a href="" onClick={handleCopyToClipboard} ref={fullNameRef}>
                  {name?.title}.{name?.first} {name?.last}
                </a>
              </td>
              <td>
                {formattedDate}
                <br />
                {age} years
              </td>
              <td>
                <a href="" ref={emailRef}>
                  <i className="tiny material-icons">content_copy</i>
                  {email}
                </a>
              </td>
              <td>
                <a href="" ref={phoneRef}>
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
