import { useEffect, useState } from "react";
const year = 2024;

export default function Calender() {
  const [month, setMonth] = useState<number>(0);
  const [date, setDate] = useState<number>(1);

  useEffect(() => {
    // set today as default
    const date = new Date();
    setMonth(date.getMonth() + 1);
    setDate(date.getDate());
  }, []);

  useEffect(() => {
    // set new date when month changed
    const date = new Date(year, month - 1, 1);
    const day = date.getDay();
    console.log(date.toLocaleString(), day);
  }, [month]);
  return (
    <section className="calenderContainer">
      <div className="header">
        <button className="selector" onClick={() => setMonth(month - 1)}>
          {"<"}
        </button>
        <p className="headerText">{`${year}年${month}月`}</p>
        <button className="selector" onClick={() => setMonth(month + 1)}>
          {">"}
        </button>
      </div>

      <div>{date}</div>
      <div></div>
    </section>
  );
}
