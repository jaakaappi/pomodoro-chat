import { Button, List, ListItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const ChatComponent = (props) => {
  const { roomName, userName, messages, sendMessage } = props;
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(currentMessage);
    setCurrentMessage("");
  };

  console.log("Chatcomponent");

  return (
    <Stack direction="column" spacing="1em">
      <List>
        {messages.map((message, index) => (
          <ListItem key={`chat-message-${index}`}>{message}</ListItem>
        ))}
      </List>
      <TextField
        id="outlined-basic"
        label="Room name"
        variant="outlined"
        onChange={(e) => setCurrentMessage(e.currentTarget.value)}
        value={currentMessage}
      />
      <Button variant="outlined" onClick={handleSendMessage}>
        Send
      </Button>
    </Stack>
  );
};

export default ChatComponent;
