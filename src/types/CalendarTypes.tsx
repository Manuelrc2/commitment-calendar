export type Appointment = {
  id: number;
  name: string;
  description: string;
  stake: number;
  startsAt: Date;
  endsAt: Date;
};
export type AppointmentDto = {
  id: number;
  name: string;
  description: string;
  stake: number;
  startsAt: Date | null;
  endsAt: Date | null;
};
export type MonthCalendar = {
  date: Date;
  monthCalendar: (DaySchedule | null)[][];
};
export type MonthlyData = {
  date: Date;
  daysSchedules: DaySchedule[];
};
export type DaySchedule = {
  date: Date;
  appointments: Appointment[];
};
