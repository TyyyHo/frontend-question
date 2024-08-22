const year = 2024;

export const useCalender = (month: number) => {
  const dateList: Date[] = [];
  const daysOflastMonth = new Date(year, month - 1, 0).getDate();
  const daysOfthisMonth = new Date(year, month, 0).getDate();
  const lostDays = new Date(year, month - 1, 1).getDay();

  // last month
  for (let i = 0; i < lostDays; i++) {
    dateList.push(new Date(year, month - 2, daysOflastMonth - lostDays + i + 1));
  }

  // this month
  for (let i = 1; i <= daysOfthisMonth; i++) {
    dateList.push(new Date(year, month - 1, i));
  }

  // next month
  for (let i = 1; dateList.length < 35; i++) {
    dateList.push(new Date(year, month, i));
  }

  return dateList;
};
