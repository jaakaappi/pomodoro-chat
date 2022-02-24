import { Container } from "@mui/material";
import { useState } from "react";

import ChatPage from "./ChatPage";
import LandingPage from "./LandingPage";

const App = () => {
  const [isInRoom, setIsInroom] = useState(false);
  const [roomName, setRoomName] = useState("");

  const handleEnterRoom = () => {
    setIsInroom(true);
  };

  console.log(`App`);

  return (
    <>
      <Container maxWidth="sm">
        {isInRoom ? (
          <ChatPage roomName={roomName} />
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
