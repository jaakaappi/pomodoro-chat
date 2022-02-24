const ChatComponent = (props) => {
  const { roomName, userName, messages } = props;

  console.log("Chatcomponent");

  return (
    <li>
      {messages.map((message, index) => (
        <ul key={`chat-message-${index}`}>{message}</ul>
      ))}
    </li>
  );
};

export default ChatComponent;
