import { type JSX } from "react";
import type { MonthCalendar } from "../../types/CalendarTypes";
import { Grid, Typography, useTheme } from "@mui/material";

type CalendarProps = {
  calendar: MonthCalendar[];
  selectedWeek: number;
  selectedMonth: number;
};

function Calendar({
  calendar,
  selectedWeek,
  selectedMonth,
}: CalendarProps): JSX.Element {
  const theme = useTheme();
  return (
    <Grid container justifyContent="center" alignItems="center" spacing="1vh">
      {calendar[selectedMonth].monthCalendar[selectedWeek].map((day, index) =>
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
            borderRadius="2vh"
            spacing="0.5vh"
            sx={{
              filter: "blur(2px)",
              backgroundColor: "rgba(60, 60, 60, 0.3)",
            }}
          ></Grid>
        )
      )}
    </Grid>
  );
}

export default Calendar;
