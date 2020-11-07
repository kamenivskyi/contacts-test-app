import React from "react";
import { IItem } from "../../interfaces";

interface IListItems {
  items: IItem[];
}

const ListItems: React.FC<IListItems> = (props) => {
  return (
    <div>
      {props.items?.map((item: IItem, index) => {
        // console.log(item)
        return index < 10 ? <div>{item.email}</div> : null;
      })}
    </div>
  );
};

export default ListItems;
