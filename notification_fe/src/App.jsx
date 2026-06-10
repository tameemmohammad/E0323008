import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Notifications from "./pages/Notifications";
import Priority from "./pages/Priority";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Notifications</Link>
        {" | "}
        <Link to="/priority">Priority Inbox</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Notifications />} />
        <Route path="/priority" element={<Priority />} />
      </Routes>
    </>
  );
}

export default App;