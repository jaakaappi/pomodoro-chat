import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

const LandingPage = (props) => {
  const { roomName, setRoomName, handleEnterRoom } = props;

  const [invalidRoomNameInput, setinvalidRoomNameInput] = useState(false);

  const handleButtonPressed = (event) => {
    if (roomName.length > 0) {
      setinvalidRoomNameInput(false);
      handleEnterRoom();
    } else {
      setinvalidRoomNameInput(true);
    }
  };

  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        pomodoro-chat
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Enter a room name to join an existing one or create a new one:
      </Typography>
      <Stack direction="row" spacing="1em">
        <TextField
          id="outlined-basic"
          label="Room name"
          variant="outlined"
          error={invalidRoomNameInput}
          helperText={
            invalidRoomNameInput ? "You need to enter a room name" : ""
          }
          onChange={(e) => setRoomName(e.currentTarget.value)}
        />
        <Button variant="outlined" onClick={handleButtonPressed}>
          Enter
        </Button>
      </Stack>
    </>
  );
};

export default LandingPage;
