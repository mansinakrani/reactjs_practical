import * as React from "react";
import "./Date.css";
import { useEffect, useState } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="sticky-notes">
      <table className="box">
        <tbody>
          <tr>
            <td className="date" rowSpan={2} colSpan={2}>
              {date.getDate()}
            </td>
            <td className="month">
              {date.toLocaleString("en-us", { month: "short" })}
            </td>
            <td className="day" rowSpan={2}>
              {weekday[date.getUTCDay()]}
            </td>
          </tr>
          <tr>
            <td className="year">{date.getFullYear()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DateTime;