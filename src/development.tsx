// This is how the calendar is currently generated, it should be done in the backend,

import type {
  Appointment,
  DaySchedule,
  MonthCalendar,
  MonthlyData,
} from "./types/CalendarTypes";

// returning (DaySchedule | null)[][]
export const getCalendar = (
  monthlyData: MonthlyData,
  daysPerWeekNumber: number
): MonthCalendar => {
  monthlyData = castDates(monthlyData);
  const firstWeekDayOfMonth = monthlyData.daysSchedules[0].date.getDay();
  const nullDaysAtStart = (firstWeekDayOfMonth - 1 + 7) % 7;
  const currentSlots = nullDaysAtStart + monthlyData.daysSchedules.length;
  const nullDaysAtEnd =
    (daysPerWeekNumber - (currentSlots % daysPerWeekNumber)) %
    daysPerWeekNumber;
  const calendar = new Array(nullDaysAtStart)
    .fill(null)
    .concat(monthlyData.daysSchedules)
    .concat(new Array(nullDaysAtEnd).fill(null));
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
    date: monthlyData.date,
    monthCalendar: chunckedCalendar,
  };
};

const castDates = (monthlyData: MonthlyData) => {
  const castedDaysSchedules: DaySchedule[] = monthlyData.daysSchedules.map(
    (daySchedule) =>
      ({
        date: new Date(daySchedule.date),
        appointments: daySchedule.appointments.map(
          (appointment) =>
            ({
              ...appointment,
              startsAt: new Date(appointment.startsAt),
              endsAt: new Date(appointment.endsAt),
            } as Appointment)
        ),
      } as DaySchedule)
  );
  return {
    date: new Date(monthlyData.date),
    daysSchedules: castedDaysSchedules,
  } as MonthlyData;
};
