import { Button, Grid, Typography, useTheme } from "@mui/material";
import type { JSX } from "react";
import type { MonthCalendar } from "../../types/CalendarTypes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type DateNavegatorProps = {
  calendar: MonthCalendar[];
  selectedWeekState: [number, React.Dispatch<React.SetStateAction<number>>];
  selectedMonthState: [number, React.Dispatch<React.SetStateAction<number>>];
  setFetchNextMonths: React.Dispatch<React.SetStateAction<boolean>>;
  setFetchPreviousMonths: React.Dispatch<React.SetStateAction<boolean>>;
};
function DateNavegator({
  calendar,
  selectedWeekState: [selectedWeek, setSelectedWeek],
  selectedMonthState: [selectedMonth, setSelectedMonth],
  setFetchNextMonths,
  setFetchPreviousMonths,
}: DateNavegatorProps): JSX.Element {
  const theme = useTheme();
  const changeSelectedWeek = (direction: "forwards" | "backwards") => {
    if (direction == "forwards") {
      if (selectedWeek + 1 > calendar[selectedMonth].monthCalendar.length - 1) {
        if (selectedMonth === calendar.length - 1) {
          setFetchNextMonths(true);
        } else {
          setSelectedMonth((prev) => prev + 1);
          setSelectedWeek(0);
        }
      } else {
        setSelectedWeek((prev) => prev + 1);
      }
    } else {
      if (selectedWeek - 1 < 0) {
        if (selectedMonth === 0) {
          setFetchPreviousMonths(true);
        } else {
          setSelectedMonth((prev) => prev - 1);
          setSelectedWeek(calendar[selectedMonth].monthCalendar.length - 1);
        }
      } else {
        setSelectedWeek((prev) => prev - 1);
      }
    }
  };
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      height="10vh"
      width="50vw"
      boxShadow={theme.shadows[24]}
      borderRadius="2vh"
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Button onClick={() => changeSelectedWeek("backwards")}>
        <ArrowBackIosIcon />
      </Button>
      <Typography color={theme.palette.text.primary} fontWeight="bold">
        {calendar.length > 0 &&
          calendar[selectedMonth].date.toLocaleDateString("en-US", {
            month: "long",
          }) +
            " " +
            calendar[selectedMonth].date.toLocaleDateString("en-US", {
              year: "numeric",
            })}
      </Typography>
      <Button onClick={() => changeSelectedWeek("forwards")}>
        <ArrowForwardIosIcon />
      </Button>
    </Grid>
  );
}

export default DateNavegator;
