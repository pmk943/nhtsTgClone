import { Route, Routes } from "react-router";
import Login from "./components/Login";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />}></Route>

    </Routes>
  );
}

export default App;
