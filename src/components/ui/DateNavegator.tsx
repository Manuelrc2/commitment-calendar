import { Button, Grid, Typography, useTheme } from "@mui/material";
import type { JSX } from "react";
import type { MonthlyData } from "../../types/CalendarTypes";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type DateNavegatorProps = {
  monthlyData: MonthlyData;
  selectedWeekState: [number, React.Dispatch<React.SetStateAction<number>>];
};
function DateNavegator({
  monthlyData,
  selectedWeekState: [selectedWeek, setSelectedWeek],
}: DateNavegatorProps): JSX.Element {
  const theme = useTheme();
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
      <Button onClick={() => setSelectedWeek((prev) => prev - 1)}>
        <ArrowBackIosIcon />
      </Button>
      <Typography color={theme.palette.text.primary} fontWeight="bold">
        {monthlyData.date.toLocaleDateString("en-US", { month: "long" }) +
          " " +
          monthlyData.date.toLocaleDateString("en-US", { year: "numeric" })}
      </Typography>
      <Button onClick={() => setSelectedWeek((prev) => prev + 1)}>
        <ArrowForwardIosIcon />
      </Button>
    </Grid>
  );
}

export default DateNavegator;
