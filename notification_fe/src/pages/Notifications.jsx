import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notifications")
      .then((res) => {
        setNotifications(res.data.notifications);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Notifications</h1>
      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{n.Type}</h3>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default Notifications;