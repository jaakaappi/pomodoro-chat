import { Card, Stack } from "@mui/material";
import randimals from "randimals";
import { useState, useEffect } from "react";

import ChatComponent from "./ChatComponent";
import { createMessage } from "./utils";

const ChatPage = (props) => {
  const { roomName } = props;
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initialWs = new WebSocket("ws://localhost:3000");
    initialWs.addEventListener("open", () => {
      console.log("connected");
      setWs(initialWs);

      initialWs.addEventListener("message", function message(data) {
        console.log("received: %s", data.data);
        setMessages([...messages, data.data]);
      });

      initialWs.send(createMessage("join", roomName, userName, ""));
    });
  }, []);

  const [userName, setUserName] = useState(randimals());

  console.log("Chatpage");

  return (
    ws && (
      <Stack direction="column" spacing={"1em"} sx={{ mt: "1em" }}>
        <Card>Timer</Card>
        <Card>{`You are ${userName}`}</Card>
        <Card>
          <ChatComponent
            ws={ws}
            roomName={roomName}
            userName={userName}
            messages={messages}
          />
        </Card>
      </Stack>
    )
  );
};

export default ChatPage;
