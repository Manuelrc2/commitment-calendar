// This is how the calendar is currently generated, it should be done in the backend,

import type {
  DaySchedule,
  MonthCalendar,
  MonthlyData,
} from "./types/CalendarTypes";

// returning (DaySchedule | null)[][]
export const getCalendar = (
  monthlyData: MonthlyData,
  daysPerWeekNumber: number
): MonthCalendar => {
  const numberOfMonthDays = new Date(
    monthlyData.date.getFullYear(),
    monthlyData.date.getMonth() + 1,
    0
  ).getDate();
  const calendarWeeksNumber =
    Math.ceil(numberOfMonthDays / daysPerWeekNumber) +
    (monthlyData.monthAppointments[0].day.getDay() === 0 ? 1 : 0);
  const firstDayNumberWithinWeek =
    (monthlyData.monthAppointments[0].day.getDay() + 6) % 7;
  const calendar = new Array(firstDayNumberWithinWeek)
    .fill(null)
    .concat(monthlyData.monthAppointments)
    .concat(
      new Array(
        calendarWeeksNumber * daysPerWeekNumber -
          numberOfMonthDays -
          firstDayNumberWithinWeek
      ).fill(null)
    );
  const chunckedCalendar: (DaySchedule | null)[][] = calendar.reduce(
    (acc, item, index) => {
      const chunkIndex = Math.floor(index / daysPerWeekNumber);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(item);
      return acc;
    },
    [] as [][]
  );
  return {
    date: monthlyData.monthAppointments[0].day,
    monthCalendar: chunckedCalendar,
  };
};
