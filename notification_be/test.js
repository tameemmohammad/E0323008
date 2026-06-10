import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtb2hhbW1hZHRhbWVlbTE0NkBnbWFpbC5jb20iLCJleHAiOjE3ODEwNzQyMjgsImlhdCI6MTc4MTA3MzMyOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijc0ODYxMzcxLWVmYTEtNDYzMS05N2U1LTYxYWNiZjJjMzgyYyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1vaGFtbWFkIHRhbWVlbSIsInN1YiI6IjQxNDg2ZjAxLTdjN2EtNDQ0NC04ZWNiLTEzYTc4YTJiN2VjNyJ9LCJlbWFpbCI6Im1vaGFtbWFkdGFtZWVtMTQ2QGdtYWlsLmNvbSIsIm5hbWUiOiJtb2hhbW1hZCB0YW1lZW0iLCJyb2xsTm8iOiJlMDMyMzAwOCIsImFjY2Vzc0NvZGUiOiJEdndFRFoiLCJjbGllbnRJRCI6IjQxNDg2ZjAxLTdjN2EtNDQ0NC04ZWNiLTEzYTc4YTJiN2VjNyIsImNsaWVudFNlY3JldCI6Illlc1ZOQ3NrUlBiWVZIY1AifQ.yWR2zNnmaLptcGDE_-nmn5kpuDLjAshlY4oFpgrhj3E";

async function test() {
  console.log("Starting test...");

  try {
    const res = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    console.log("SUCCESS");
    console.log(res.data);
  } catch (err) {
    console.log("ERROR");
    console.log(err.response?.status);
    console.log(err.response?.data);
  }
}

test();