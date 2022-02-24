export const createMessage = (type, room, userName, contents) => {
  return JSON.stringify({
    type,
    room,
    userName,
    contents,
  });
};
