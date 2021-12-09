import { Route, Routes } from "react-router";
import AdminHome from "./components/AdminHome";
import Login from "./components/Login";
import NoRoute from "./components/Login/NoRoute";
import SignIn from "./components/Login/SignIn";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} >
            <Route index element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element ={<NoRoute />} />  
      </Route>
      <Route path="/admin" element={<AdminHome />} />


    </Routes>
  );
}

export default App;
