import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

import ChatPage from "./ChatPage";
import LandingPage from "./LandingPage";

const ws = new WebSocket("ws://localhost:3000");

ws.addEventListener("open", function open() {
  ws.send("something");
});

ws.addEventListener("message", function message(data) {
  console.log("received: %s", data.data);
});

const App = () => {
  const [isInRoom, setIsInroom] = useState(false);
  const [roomName, setRoomName] = useState("");

  const handleEnterRoom = () => {
    setIsInroom(true);
  };

  return (
    <>
      <Container maxWidth="sm">
        {isInRoom ? (
          <ChatPage name />
        ) : (
          <LandingPage
            roomName={roomName}
            setRoomName={setRoomName}
            handleEnterRoom={handleEnterRoom}
          />
        )}
      </Container>
    </>
  );
};

export default App;
