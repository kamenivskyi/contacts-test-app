import React from "react";
import { IItem } from "../../interfaces";

interface IListItems {
  items: IItem[];
}

const ListItems = ({ items }: IListItems) => {
  return (
    <div>
      {items?.map(({ email, name }: IItem, index) => {
        // console.log(item)
        return index < 10 ? (
          <div key={email}>
            {email}
            <p>{name?.first}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ListItems;
