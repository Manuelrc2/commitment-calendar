import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import {
  useEffect,
  useState,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from "react";
import type { Appointment } from "../types/CalendarTypes";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useAuth } from "../hooks/useAuth";
import type { ProblemDetails } from "../types/GeneralTypes";
import CloseIcon from "@mui/icons-material/Close";

type CreateAppointmentDialogProps = {
  isOpenState: [boolean, Dispatch<SetStateAction<boolean>>];
  date: Date;
  setFetchUpdate: Dispatch<React.SetStateAction<boolean>>;
};

function CreateAppointmentDialog({
  isOpenState: [isOpen, setIsOpen],
  date,
  setFetchUpdate,
}: CreateAppointmentDialogProps): JSX.Element {
  const [appointment, setAppointment] = useState<Appointment>(
    {} as Appointment
  );
  const [saveClicked, setSaveClicked] = useState<boolean>();
  const [problemDetails, setProblemDetails] = useState<ProblemDetails>();
  const theme = useTheme();
  const { token } = useAuth();
  dayjs.extend(utc);
  useEffect(() => {
    if (isOpen) {
      setAppointment({
        id: 0,
        name: "",
        description: "",
        stake: 0,
        startsAt: date,
        endsAt: date,
      });
    }
  }, [isOpen, date]);
  useEffect(() => {
    const createAppointment = async () => {
      const response = await fetch(
        "https://localhost:7064/api/Appointment/CreateAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(appointment),
        }
      );
      if (!response.ok) {
        await response.json().then((data) => setProblemDetails(data));
      } else {
        setIsOpen(false);
        setFetchUpdate(true);
      }
    };
    if (saveClicked) {
      createAppointment();
      setSaveClicked(false);
    }
  }, [saveClicked, appointment, token]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle sx={{ backgroundColor: theme.palette.background.default }}>
        Add New Appointment
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
            onChange={(event) =>
              setAppointment((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
            sx={{ width: "20vw" }}
          />
          <TextField
            label="Description"
            onChange={(event) =>
              setAppointment((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
            sx={{ width: "20vw" }}
          />
          <TextField
            label="Stake"
            onChange={(event) =>
              setAppointment((prev) => ({
                ...prev,
                stake: Number(event.target.value),
              }))
            }
            sx={{ width: "20vw" }}
          />
          <TimePicker
            label="Starts at"
            onChange={(time) => {
              if (time) {
                setAppointment((prev) => {
                  const dayjsCurrentDate = dayjs(date);
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
            onChange={(time) => {
              if (time) {
                setAppointment((prev) => {
                  const dayjsCurrentDate = dayjs(date);
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
          <Button
            onClick={() => setSaveClicked(true)}
            sx={{ width: "20vw", backgroundColor: "green" }}
          >
            SAVE
          </Button>
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

export default CreateAppointmentDialog;
