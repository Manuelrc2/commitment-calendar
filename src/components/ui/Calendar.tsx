import { useState, type Dispatch, type JSX } from "react";
import type { Appointment, MonthCalendar } from "../../types/CalendarTypes";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import CreateAppointmentDialog from "../CreateAppointmentDialog";
import AppointmentDialog from "./AppointmentDialog";
import AddIcon from "@mui/icons-material/Add";

type CalendarProps = {
  calendar: MonthCalendar[];
  selectedWeekIndex: number;
  selectedMonthIndex: number;
  setFetchUpdate: Dispatch<React.SetStateAction<boolean>>;
};

function Calendar({
  calendar,
  selectedWeekIndex,
  selectedMonthIndex,
  setFetchUpdate,
}: CalendarProps): JSX.Element {
  const [createAppointmentDialogOpen, setCreateAppointmentDialogOpen] =
    useState<boolean>(false);
  const [appointmentDialogOpen, setAppointmentDialogOpen] =
    useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>();
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      spacing="1vh"
    >
      {calendar[selectedMonthIndex].monthCalendar[selectedWeekIndex].map(
        (day, index) =>
          day ? (
            <Grid
              key={index}
              container
              width="10vw"
              justifyContent="center"
              sx={{
                "& .hover-button": {
                  opacity: 0,
                  transition: "opacity 0.2s ease-in-out",
                },
                "&:hover .hover-button": {
                  opacity: 1,
                },
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                width="10vw"
                height="65vh"
                boxShadow={theme.shadows[24]}
                borderRadius="1vh"
                spacing="0.5vh"
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="14%"
                  width="100%"
                  spacing="0.1vh"
                >
                  <Typography
                    color={theme.palette.text.primary}
                    fontWeight="bold"
                  >
                    {day.date.toLocaleDateString("en-US", { weekday: "long" })}
                  </Typography>
                  <Typography
                    color={theme.palette.text.secondary}
                    fontWeight="bold"
                  >
                    {day.date.toLocaleDateString("en-US", { day: "2-digit" })}
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  height="82%"
                >
                  {day.appointments
                    .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())
                    .map((appointment, i) => (
                      <Button
                        sx={{
                          padding: 0,
                          borderRadius: "1vh",
                          textTransform: "none",
                        }}
                        onClick={() => {
                          setSelectedAppointment(appointment);
                          setAppointmentDialogOpen(true);
                        }}
                      >
                        <Grid
                          key={i}
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          width="9.5vw"
                          height="6vh"
                          borderRadius="1vh"
                          sx={{ backgroundColor: "rgba(65, 65, 65, 0.49)" }}
                        >
                          <Typography
                            color={theme.palette.text.primary}
                            fontSize="1.25vh"
                          >
                            {appointment.name}
                          </Typography>
                          <Typography
                            color={theme.palette.text.secondary}
                            fontSize="1vh"
                          >
                            {appointment.startsAt.toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}
                            {" - "}
                            {appointment.endsAt.toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}
                          </Typography>
                        </Grid>
                      </Button>
                    ))}
                </Grid>
              </Grid>
              <Button
                className="hover-button"
                onClick={() => {
                  setSelectedDay(day.date);
                  setCreateAppointmentDialogOpen(true);
                }}
                sx={{
                  backgroundColor: "rgba(204, 204, 204, 0.3)",
                  width: "8vw",
                  height: "3vh",
                  borderRadius: "1vh",
                }}
              >
                <AddIcon />
              </Button>
            </Grid>
          ) : (
            <Grid
              key={index}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              width="10vw"
              height="65vh"
              borderRadius="2vh"
              spacing="0.5vh"
              sx={{
                filter: "blur(2px)",
                backgroundColor: "rgba(60, 60, 60, 0.3)",
              }}
            ></Grid>
          )
      )}
      {appointmentDialogOpen && selectedAppointment && selectedDay && (
        <AppointmentDialog
          appointment={selectedAppointment}
          date={selectedDay}
          setIsOpen={setAppointmentDialogOpen}
          setFetchUpdate={setFetchUpdate}
        />
      )}
      {createAppointmentDialogOpen && selectedDay && (
        <CreateAppointmentDialog
          setIsOpen={setCreateAppointmentDialogOpen}
          date={selectedDay}
          setFetchUpdate={setFetchUpdate}
        />
      )}
    </Grid>
  );
}

export default Calendar;
