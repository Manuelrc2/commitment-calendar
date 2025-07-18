import { useState, type JSX } from "react";
import Calendar from "../components/ui/Calendar";
import { mockJulyData, type MonthlyData } from "../types/CalendarTypes";
import { Grid, useTheme } from "@mui/material";
import DateNavegator from "../components/ui/DateNavegator";

function MainPage(): JSX.Element {
  const [monthlyData, setMonthlyData] = useState<MonthlyData>(
    {} as MonthlyData
  );
  const [selectedWeek, setSelectedWeek] = useState<number>(0);
  const theme = useTheme();
  return (
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
        monthlyData={mockJulyData}
        selectedWeekState={[selectedWeek, setSelectedWeek]}
      />
      <Calendar
        monthlyData={mockJulyData}
        daysPerWeekNumber={7}
        selectedWeek={selectedWeek}
      />
    </Grid>
  );
}

export default MainPage;
