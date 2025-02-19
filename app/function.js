// date funcitonally
function teansactionTime(timestamp) {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);

  // Format date and time components
  const options = {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Set to false for 24-hour format
  };



  return date.toLocaleString("en-US", options);
}


function trxID() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 (letters + numbers)
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate random alphanumeric string
  const transactionId = `TRX${timestamp}${randomPart}`;
  return transactionId;
}
