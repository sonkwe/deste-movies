import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import UserList from "./pages/UserList";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coup-de-coeur" element={<UserList />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
