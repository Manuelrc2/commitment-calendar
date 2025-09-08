import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  useEffect,
  useState,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from "react";
import type { Appointment, AppointmentDto } from "../../types/CalendarTypes";
import type { ProblemDetails } from "../../types/GeneralTypes";
import dayjs from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../../hooks/useAuth";
import utc from "dayjs/plugin/utc";

type AppointmentDialogProps = {
  appointment: Appointment;
  date: Date;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setFetchUpdate: Dispatch<React.SetStateAction<boolean>>;
};

function AppointmentDialog({
  appointment,
  date,
  setIsOpen,
  setFetchUpdate,
}: AppointmentDialogProps): JSX.Element {
  const [draftAppointment, setDraftAppointment] = useState<AppointmentDto>({
    ...appointment,
  });
  const [saveClicked, setSaveClicked] = useState<boolean>();
  const [problemDetails, setProblemDetails] = useState<ProblemDetails>();
  const [editModeActivated, setEditModeActivated] = useState<boolean>(false);
  const [deleteClicked, setDeleteClicked] = useState<boolean>(false);
  const [deletionConfirmed, setDeletionConfirmed] = useState<boolean>(false);
  const [newDate, setNewDate] = useState<Date>(date);
  const theme = useTheme();
  const { token } = useAuth();
  dayjs.extend(utc);
  useEffect(() => {
    const deleteAppointment = async () => {
      const response = await fetch(
        `https://localhost:7064/api/Appointment/DeleteAppointment?id=${appointment.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        await response.json().then((data) => setProblemDetails(data));
      } else {
        setFetchUpdate(true);
        setIsOpen(false);
      }
    };
    if (deletionConfirmed) {
      deleteAppointment();
      setDeletionConfirmed(false);
    }
  }, [deletionConfirmed, appointment, token]);
  useEffect(() => {
    const updateAppointment = async () => {
      const response = await fetch(
        "https://localhost:7064/api/Appointment/UpdateAppointment",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(draftAppointment),
        }
      );
      if (!response.ok) {
        await response.json().then((data) => setProblemDetails(data));
      } else {
        setFetchUpdate(true);
        setIsOpen(false);
      }
    };
    if (saveClicked) {
      updateAppointment();
      setSaveClicked(false);
    }
  }, [saveClicked, appointment, token]);

  return (
    <Dialog open onClose={() => setIsOpen(false)}>
      <DialogTitle sx={{ backgroundColor: theme.palette.background.default }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          Appointment
          <Box>
            <Button
              sx={{ height: "2vh", width: "2vh" }}
              onClick={() => setEditModeActivated((prevState) => !prevState)}
            >
              <EditCalendarIcon />
            </Button>
            <Button
              sx={{ height: "2vh", width: "2vh" }}
              onClick={() => setDeleteClicked(true)}
            >
              <DeleteIcon />
            </Button>
          </Box>
        </Grid>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: theme.palette.background.default }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing="1vh"
          padding="2vh"
        >
          <TextField
            label="Name"
            disabled={!editModeActivated}
            defaultValue={draftAppointment.name}
            onChange={(event) =>
              setDraftAppointment((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
            sx={{ width: "20vw" }}
          />
          <TextField
            label="Description"
            disabled={!editModeActivated}
            defaultValue={draftAppointment.description}
            onChange={(event) =>
              setDraftAppointment((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
            sx={{ width: "20vw" }}
          />
          <TextField
            label="Stake"
            disabled={!editModeActivated}
            defaultValue={draftAppointment.stake}
            onChange={(event) =>
              setDraftAppointment((prev) => ({
                ...prev,
                stake: Number(event.target.value),
              }))
            }
            sx={{ width: "20vw" }}
          />
          {editModeActivated && (
            <DatePicker
              label="New date"
              defaultValue={dayjs(draftAppointment.startsAt)}
              onChange={(pickedDate) => {
                if (pickedDate) {
                  const dayjsPickedDate = dayjs(pickedDate);
                  console.log("dayjsPickedDate", dayjsPickedDate);
                  setDraftAppointment((prev) => {
                    const dayjsStartsAt = dayjs(prev.startsAt)
                      .year(dayjsPickedDate.year())
                      .month(dayjsPickedDate.month())
                      .date(dayjsPickedDate.date());
                    const dayjsEndsAt = dayjs(prev.endsAt)
                      .year(dayjsPickedDate.year())
                      .month(dayjsPickedDate.month())
                      .date(dayjsPickedDate.date());
                    console.log("startAt", dayjsStartsAt);
                    return {
                      ...prev,
                      startsAt: dayjsStartsAt.utc().toDate(),
                      endsAt: dayjsEndsAt.utc().toDate(),
                    };
                  });
                  setNewDate(dayjsPickedDate.utc().toDate());
                }
              }}
              sx={{ width: "20vw" }}
            />
          )}
          <TimePicker
            label="Starts at"
            disabled={!editModeActivated}
            defaultValue={dayjs(draftAppointment.startsAt)}
            onChange={(time) => {
              if (time) {
                setDraftAppointment((prev) => {
                  const dayjsCurrentDate = dayjs(newDate);
                  const combinedDateTime = dayjsCurrentDate
                    .hour(time.hour())
                    .minute(time.minute())
                    .second(0);
                  return {
                    ...prev,
                    startsAt: combinedDateTime.utc().toDate(),
                  };
                });
              }
            }}
            sx={{ width: "20vw" }}
          />
          <TimePicker
            label="Ends at"
            disabled={!editModeActivated}
            defaultValue={dayjs(draftAppointment.endsAt)}
            onChange={(time) => {
              if (time) {
                setDraftAppointment((prev) => {
                  const dayjsCurrentDate = dayjs(newDate);
                  const combinedDateTime = dayjsCurrentDate
                    .hour(time.hour())
                    .minute(time.minute())
                    .second(0);
                  return {
                    ...prev,
                    endsAt: combinedDateTime.utc().toDate(),
                  };
                });
              }
            }}
            sx={{ width: "20vw" }}
          />
          {editModeActivated && (
            <Button
              onClick={() => setSaveClicked(true)}
              sx={{ width: "20vw", backgroundColor: "green" }}
            >
              SAVE
            </Button>
          )}
          {deleteClicked && (
            <Dialog
              open={deleteClicked}
              onClose={() => setDeleteClicked(false)}
            >
              <DialogContent
                sx={{ backgroundColor: theme.palette.background.default }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>
                    Are you sure you want to delete this appointment?
                  </Typography>
                  <Grid direction="row">
                    <Button
                      onClick={() => {
                        setDeletionConfirmed(true);
                        setDeleteClicked(false);
                      }}
                      sx={{ textTransform: "none" }}
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => {
                        setDeleteClicked(false);
                      }}
                      sx={{ textTransform: "none" }}
                    >
                      No
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          )}
          {problemDetails && (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setProblemDetails(undefined);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="error"
            >
              {problemDetails.detail}
            </Alert>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentDialog;
