import React from "react";

function CondRendDemo() {
  const isDarkMode = true;
  const role = "Admin";
  const hasNotifications = true;
  let themeMessage;
  if (isDarkMode) {
    themeMessage = <h2> Dark Mode Enabled</h2>;
  } else {
    themeMessage = <h2> Light Mode Enabled</h2>;
  }
  let roleMessage;
  switch (role) {
    case "admin":
      roleMessage = <h2>Welcome, Admin </h2>;
      break;
    case "editor":
      roleMessage = <h2>Welcome, Editor </h2>;
      break;
    case "viewer":
      roleMessage = <h2>Welcome, Viewer </h2>;
      break;
    default:
      roleMessage = <h2>Guest User – Please Sign In</h2>;
  }
  const notifMessage = hasNotifications
    ? <p> You have new messages</p>
    : <p>No new notifications</p>;

  return (
    <>
      <h1>Conditional Rendering Demo</h1>
      {themeMessage}
      {roleMessage}
      {notifMessage}
    </>
  );
}

export default CondRendDemo;
