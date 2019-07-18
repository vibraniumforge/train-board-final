const timeHelper = time => {
  const newTime = time ? time.toString().trim() : null;
  if (newTime) {
    return `${newTime.slice(0, 2)}:${newTime.slice(2)}`;
  } else {
    return null;
  }
};

export { timeHelper };
