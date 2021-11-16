import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AppointmentHome from "./Pages/Dashboard/AppointmentHome/AppointmentHome";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>

            <Route path="/appointment" element={<PrivateRoute> <Appointment /></PrivateRoute>}>

            </Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path='/dashboard' element={<AppointmentHome />}>

              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment />}>

              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>

              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>}>

              </Route>
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>

          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
