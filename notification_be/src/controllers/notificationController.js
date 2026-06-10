import { fetchNotifications } from "../services/notificationService.js";

async function getNotifications(req, res) {
  try {
    const notifications = await fetchNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    console.log("CONTROLLER ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
}

export { getNotifications };