import { useState } from "react";
import { useCalender } from "../hook/useCalender";
import { useDateRange } from "../hook/useDateRange";
const year = 2024;
const today = new Date();
const currentMonth = today.getMonth() + 1;
console.log(today);

export default function Calender() {
  const [month, setMonth] = useState<number>(currentMonth);
  const { dateRange, handleDate } = useDateRange();

  const dateList = useCalender(month);

  function handleMonth(type: "plus" | "minus") {
    if (type === "plus" && month < 12) {
      setMonth(month + 1);
    } else if (type === "minus" && month > 1) {
      setMonth(month - 1);
    }
  }

  return (
    <section className="calenderContainer">
      <button style={{ marginBottom: "2rem" }} onClick={() => handleDate(today, "reset")}>
        Reset
      </button>
      <div className="header">
        <button className="selector" onClick={() => handleMonth("minus")}>
          {"<"}
        </button>
        <p className="headerText">{`${year}年${month}月`}</p>
        <button className="selector" onClick={() => handleMonth("plus")}>
          {">"}
        </button>
      </div>

      <div className="calender">
        {dateList.map((date, index) => {
          return (
            <button
              key={index}
              disabled={date.getMonth() + 1 !== month}
              className={`dayButton
                ${date.getMonth() + 1 === month ? "" : "nonCurrentMonth"}
                ${date.getMonth() === today.getMonth() && date.getDate() === today.getDate() ? "today" : ""}
                ${
                  date.getMonth() === dateRange.startDate?.getMonth() &&
                  date.getDate() >= dateRange.startDate?.getDate() &&
                  date.getDate() <= dateRange.endDate?.getDate()!
                    ? "chosenDay"
                    : ""
                }
                `}
              onClick={() => handleDate(date)}
            >
              {date.getDate()}日
            </button>
          );
        })}
      </div>
    </section>
  );
}
