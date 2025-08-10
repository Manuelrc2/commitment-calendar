import { useEffect, useState, type JSX } from "react";
import Calendar from "../components/ui/Calendar";
import { type MonthCalendar } from "../types/CalendarTypes";
import { Grid, useTheme } from "@mui/material";
import DateNavegator from "../components/ui/DateNavegator";
import { getCalendar } from "../development";
import CircularProgress from "@mui/material/CircularProgress";

function MainPage(): JSX.Element {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [calendar, setCalendar] = useState<MonthCalendar[]>([]);
  const [fetchNextMonths, setFetchNextMonths] = useState<boolean>(false);
  const [fetchPreviousMonths, setFetchPreviousMonths] =
    useState<boolean>(false);
  const theme = useTheme();
  const getMonthCalendar = async (userId: string, date: Date) => {
    const response = await fetch(
      `https://localhost:7245/api/Appointment/GetAppointmentsByUserAndDate?userId=${userId}&date=${date.toLocaleDateString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return getCalendar(await response.json(), 7);
  };
  useEffect(() => {
    getMonthCalendar("user123", new Date()).then((data) => setCalendar([data]));
  }, []);
  useEffect(() => {
    const fetchNextMonth = async () => {
      if (fetchNextMonths) {
        const nextMonthDate = new Date(calendar[selectedMonthIndex].date);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1, 1);
        const nextMonthCalendar = await getMonthCalendar(
          "user123",
          nextMonthDate
        );
        setCalendar((prev) => [...prev, nextMonthCalendar]);
        setSelectedMonthIndex((prev) => prev + 1);
        setSelectedWeekIndex(0);
        setFetchNextMonths(false);
      }
    };
    fetchNextMonth();
  }, [fetchNextMonths, calendar, selectedMonthIndex]);
  useEffect(() => {
    const fetchPreviousMonth = async () => {
      if (fetchPreviousMonths) {
        const previousMonthDate = new Date(calendar[selectedMonthIndex].date);
        previousMonthDate.setMonth(previousMonthDate.getMonth() - 1, 1);
        const previousMonthCalendar = await getMonthCalendar(
          "user123",
          previousMonthDate
        );
        setCalendar((prev) => [previousMonthCalendar, ...prev]);
        setSelectedMonthIndex(0);
        setSelectedWeekIndex(previousMonthCalendar.monthCalendar.length - 1);
        setFetchPreviousMonths(false);
      }
    };
    fetchPreviousMonth();
  }, [fetchPreviousMonths, calendar, selectedMonthIndex]);
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
        selectedWeekIndexState={[selectedWeekIndex, setSelectedWeekIndex]}
        selectedMonthIndexState={[selectedMonthIndex, setSelectedMonthIndex]}
        setFetchNextMonths={setFetchNextMonths}
        setFetchPreviousMonths={setFetchPreviousMonths}
      />
      <Calendar
        calendar={calendar}
        selectedWeekIndex={selectedWeekIndex}
        selectedMonthIndex={selectedMonthIndex}
      />
    </Grid>
  ) : (
    <CircularProgress />
  );
}

export default MainPage;
