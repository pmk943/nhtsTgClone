import { Route, Routes } from "react-router";
import AdminHome from "./components/AdminHome";
import AdminMainPage from "./components/AdminHome/AdminMainPage";
import Login from "./components/Login";
import NoRoute from "./components/Login/NoRoute";
import SignIn from "./components/Login/SignIn";
import Registration from "./components/Registration";
import Services from "./components/Services";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} >
            <Route index element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route path="DASHBOARD" element ={<NoRoute />} />   
      </Route>
      <Route  path="/admin" element={<AdminHome />} >
        <Route index element={<AdminMainPage />} />
        <Route path="registration/pregnant" element={<Registration />}/>
        <Route path="registration/children" element={<Registration />}/>
        <Route path="registration/adolscent" element={<Registration />}/>
        <Route path="services/pregnant&lactating" element={<Services />} />
        <Route path="services/child" element={<Services />} />    
        <Route path="services/supervisedfeeding" element={<Services />} />    
        <Route path="services/childassesment" element={<Services />} />    

      </Route>
      


    </Routes>
  );
}

export default App;
