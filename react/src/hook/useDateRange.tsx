import { useReducer } from "react";

interface DateRangeAction {
  type: "setStartDate" | "setEndDate" | "setBoth";
  newDate: Date;
}
interface DateRangeState {
  startDate: Date | null;
  endDate: Date | null;
}

const initialDate: DateRangeState = {
  startDate: null,
  endDate: null,
};

const reducer = (state: DateRangeState, action: DateRangeAction): DateRangeState => {
  switch (action.type) {
    case "setBoth":
      return initialDate;
    case "setStartDate":
      return { ...state, startDate: action.newDate };
    case "setEndDate":
      return { ...state, endDate: action.newDate };
    default:
      return state;
  }
};

export const useDateRange = () => {
  const [dateRange, dispatch] = useReducer(reducer, initialDate);

  const handleDate = (date: Date, type?: "reset") => {
    if (type === "reset") {
      dispatch({ type: "setBoth", newDate: date });
      return;
    }

    if (dateRange.startDate === null) {
      dispatch({ type: "setStartDate", newDate: date });
    } else {
      if (date < dateRange.startDate) {
        dispatch({ type: "setStartDate", newDate: date });
      } else {
        dispatch({ type: "setEndDate", newDate: date });
      }
    }
  };

  return { dateRange, handleDate };
};
