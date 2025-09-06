import { useEffect, useState, type JSX } from "react";
import Calendar from "../components/ui/Calendar";
import { type MonthCalendar } from "../types/CalendarTypes";
import { Grid, useTheme } from "@mui/material";
import DateNavegator from "../components/ui/DateNavegator";
import { getCalendar } from "../development";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../hooks/useAuth";

function MainPage(): JSX.Element {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [calendar, setCalendar] = useState<MonthCalendar[]>([]);
  const [fetchNextMonths, setFetchNextMonths] = useState<boolean>(false);
  const [fetchPreviousMonths, setFetchPreviousMonths] =
    useState<boolean>(false);
  const [fetchUpdate, setFetchUpdate] = useState<boolean>(false);
  const theme = useTheme();
  const { token } = useAuth();
  const getMonthCalendar = async (date: Date) => {
    const response = await fetch(
      `https://localhost:7064/api/Appointment/GetAppointmentsByUserAndDate?date=${date.toLocaleDateString()}&timezone=${
        Intl.DateTimeFormat().resolvedOptions().timeZone
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return getCalendar(await response.json(), 7);
  };
  useEffect(() => {
    getMonthCalendar(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    ).then((data) => setCalendar([data]));
  }, []);
  console.log(calendar);
  useEffect(() => {
    if (fetchUpdate) {
      getMonthCalendar(calendar[selectedMonthIndex].date).then((data) =>
        setCalendar((prev) => [
          ...prev.slice(0, selectedMonthIndex),
          data,
          ...prev.slice(selectedMonthIndex + 1),
        ])
      );
      setFetchUpdate(false);
    }
  }, [fetchUpdate]);
  useEffect(() => {
    const fetchNextMonth = async () => {
      if (fetchNextMonths) {
        const nextMonthDate = new Date(calendar[selectedMonthIndex].date);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1, 1);
        const nextMonthCalendar = await getMonthCalendar(nextMonthDate);
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
        const previousMonthCalendar = await getMonthCalendar(previousMonthDate);
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
        setFetchUpdate={setFetchUpdate}
      />
    </Grid>
  ) : (
    <CircularProgress />
  );
}

export default MainPage;
