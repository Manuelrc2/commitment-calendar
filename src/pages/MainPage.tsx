import { useEffect, useState, type JSX } from "react";
import Calendar from "../components/ui/Calendar";
import {
  mockAugustCalendar,
  mockJulyData,
  mockJuneCalendar,
  type MonthCalendar,
} from "../types/CalendarTypes";
import { Grid, useTheme } from "@mui/material";
import DateNavegator from "../components/ui/DateNavegator";
import { getCalendar } from "../development";
import CircularProgress from "@mui/material/CircularProgress";

function MainPage(): JSX.Element {
  const [selectedWeek, setSelectedWeek] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [calendar, setCalendar] = useState<MonthCalendar[]>([]);
  const [fetchNextMonths, setFetchNextMonths] = useState<boolean>(false);
  const [fetchPreviousMonths, setFetchPreviousMonths] =
    useState<boolean>(false);
  const theme = useTheme();
  useEffect(() => {
    setCalendar([getCalendar(mockJulyData, 7)]);
  }, []);

  useEffect(() => {
    if (fetchNextMonths) {
      const nextMonthCalendar = getCalendar(mockAugustCalendar, 7);
      setCalendar((prev) => [...prev, nextMonthCalendar]);
      setSelectedMonth((prev) => prev + 1);
      setSelectedWeek(0);
      setFetchNextMonths(false);
    }
  }, [fetchNextMonths]);
  useEffect(() => {
    if (fetchPreviousMonths) {
      const previousMonthCalendar = getCalendar(mockJuneCalendar, 7);
      setCalendar((prev) => [previousMonthCalendar, ...prev]);
      setSelectedMonth(0);
      setSelectedWeek(previousMonthCalendar.monthCalendar.length - 1);
      setFetchPreviousMonths(false);
    }
  }, [fetchPreviousMonths]);
  console.log("calendar", calendar);
  console.log(selectedMonth);
  return calendar.length > 0 ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing="2vh"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <DateNavegator
        calendar={calendar}
        selectedWeekState={[selectedWeek, setSelectedWeek]}
        selectedMonthState={[selectedMonth, setSelectedMonth]}
        setFetchNextMonths={setFetchNextMonths}
        setFetchPreviousMonths={setFetchPreviousMonths}
      />
      <Calendar
        calendar={calendar}
        selectedWeek={selectedWeek}
        selectedMonth={selectedMonth}
      />
    </Grid>
  ) : (
    <CircularProgress />
  );
}

export default MainPage;
