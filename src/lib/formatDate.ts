const formattedDate = (dateString: string | Date) => {
  // Ensure date is a Date object
  const date = new Date(dateString);

  // Add 1 hour to the date
  const hoursToAdd = 1 * 60 * 60 * 1000; // 1 hour in milliseconds
  date.setTime(date.getTime() + hoursToAdd);

  // Format the date
  const formattedDate = date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Format the time
  const formattedTime = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Combine the formatted date and time
  return `${formattedDate} ${formattedTime}`;
};

export default formattedDate;
