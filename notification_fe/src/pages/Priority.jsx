import { useEffect, useState } from "react";
import axios from "axios";

function Priority() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notifications")
      .then((res) => {
        const data = res.data.notifications;
        const sorted = [...data]
          .sort((a, b) => {
            const priority = {
              Placement: 3,
              Result: 2,
              Event: 1,
            };
            if (priority[b.Type] !== priority[a.Type]) {
              return priority[b.Type] - priority[a.Type];
            }
            return (
              new Date(b.Timestamp) -
              new Date(a.Timestamp)
            );
          })
          .slice(0, 10);
        setNotifications(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Priority Inbox</h1>

      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
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

export default Priority;