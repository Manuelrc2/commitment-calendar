import { useMemo, type JSX } from "react";
import type { DaySchedule, MonthlyData } from "../../types/CalendarTypes";
import { Box, Grid, Typography, useTheme } from "@mui/material";

type CalendarProps = {
  monthlyData: MonthlyData;
  daysPerWeekNumber: number;
  selectedWeek: number;
};

function Calendar({
  monthlyData,
  daysPerWeekNumber,
  selectedWeek,
}: CalendarProps): JSX.Element {
  const theme = useTheme();
  const calendar: (DaySchedule | null)[][] = useMemo(() => {
    const numberOfMonthDays = new Date(
      monthlyData.date.getFullYear(),
      monthlyData.date.getMonth() + 1,
      0
    ).getDate();
    const calendarWeeksNumber = Math.ceil(
      numberOfMonthDays / daysPerWeekNumber
    );
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
    return calendar.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / daysPerWeekNumber);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(item);
      return acc;
    }, [] as [][]);
  }, [monthlyData, daysPerWeekNumber]);
  return (
    <Grid container justifyContent="center" alignItems="center" spacing="1vh">
      {calendar[selectedWeek].map((day, index) =>
        day ? (
          <Grid
            key={index}
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            width="10vw"
            height="60vh"
            boxShadow={theme.shadows[24]}
            borderRadius="2vh"
            spacing="0.5vh"
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              height="18%"
              width="100%"
              spacing="0.1vh"
            >
              <Typography color={theme.palette.text.primary} fontWeight="bold">
                {day.day.toLocaleDateString("en-US", { weekday: "long" })}
              </Typography>
              <Typography
                color={theme.palette.text.secondary}
                fontWeight="bold"
              >
                {day.day.toLocaleDateString("en-US", { day: "2-digit" })}
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              height="80%"
            >
              {day.appointments.map((appointment, i) => (
                <Grid
                  key={i}
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  width="9.5vw"
                  height="6vh"
                  borderRadius="1vh"
                  sx={{ backgroundColor: "rgba(255, 202, 202, 0.3)" }}
                >
                  <Typography color={theme.palette.text.secondary}>
                    {appointment.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid
            key={index}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="10vw"
            height="60vh"
            boxShadow={theme.shadows[24]}
            borderRadius="2vh"
            spacing="0.5vh"
          >
            <Typography color={theme.palette.text.secondary}>...</Typography>
          </Grid>
        )
      )}
    </Grid>
  );
}

export default Calendar;
