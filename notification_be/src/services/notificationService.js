import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtb2hhbW1hZHRhbWVlbTE0NkBnbWFpbC5jb20iLCJleHAiOjE3ODEwNzYxMjYsImlhdCI6MTc4MTA3NTIyNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImUwMDdmNmU4LWIyYjUtNGIyYS05ZGUxLTRlOWNlNmU4MjRjZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1vaGFtbWFkIHRhbWVlbSIsInN1YiI6IjQxNDg2ZjAxLTdjN2EtNDQ0NC04ZWNiLTEzYTc4YTJiN2VjNyJ9LCJlbWFpbCI6Im1vaGFtbWFkdGFtZWVtMTQ2QGdtYWlsLmNvbSIsIm5hbWUiOiJtb2hhbW1hZCB0YW1lZW0iLCJyb2xsTm8iOiJlMDMyMzAwOCIsImFjY2Vzc0NvZGUiOiJEdndFRFoiLCJjbGllbnRJRCI6IjQxNDg2ZjAxLTdjN2EtNDQ0NC04ZWNiLTEzYTc4YTJiN2VjNyIsImNsaWVudFNlY3JldCI6Illlc1ZOQ3NrUlBiWVZIY1AifQ.luWI14PfBxsVHSIx2SdeVIyFmzFKxvaft9NlzBrf0IA";

async function fetchNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    throw error;
  }
}

export { fetchNotifications };