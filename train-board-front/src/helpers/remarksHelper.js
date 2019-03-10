const remarksHelper = name => {
  const trimmedName = name.trim();
  if (trimmedName.indexOf("E") > -1) {
    return "green";
  }
  switch (trimmedName) {
    case "On Time":
      return "green";
    case "Boarding":
      return "green";
    case "Arrived":
      return "green";
    default:
      return "red";
  }
};

export { remarksHelper };
