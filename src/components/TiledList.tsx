import React from "react";
import { IItem } from "../interfaces";
import moment from "moment";

interface Props {
  items: IItem[];
}

const TiledList = ({ items }: Props) => {
  return (
    <div className="row">
      {items?.map((item: IItem, index) => {
        const {
          email,
          name,
          phone,
          nat,
          location,
          login,
          picture: { large },
          dob: { date, age },
        } = item;

        const formattedDate = moment(date).format("dddd, M/D/YYYY, h:mm:ss A");
        return index < 10 ? (
          <div className="col s12 m4 l3" key={`tiled-list${login.uuid}`}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <div className="card-image">
                  <img src={large} alt="" />
                </div>
                <span className="card-title">
                  {name?.title}.{name?.first} {name?.last}
                </span>
                <p>
                  Birthday
                  {formattedDate}
                  <br />
                  {age} years
                </p>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default TiledList;
