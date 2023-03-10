import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Login/Register'
import Dashboard from './Componets/Dashboard'
import AddDoctor from './Componets/Dashboard/AddDoctor'
import BookAppointment from './Componets/Dashboard/BookAppointment'
import AddPatient from './Componets/Dashboard/AddPatient'
import ShowDoctors from './Componets/Dashboard/ShowDoctors';
import ShowPatients from './Componets/Dashboard/ShowPatients';
import Mainpage from './Componets/Dashboard/Mainpage';
import MainDoctorpage from './Componets/MainDoctorpage';

function App() {
  return (
    <div className="theme-cyns">
      <Routes>
        <Route path='/' element={(window.localStorage.getItem("uid")!==null?<Dashboard data={""}/>:<Login />)}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={(window.localStorage.getItem("uid")!==null?<Dashboard data={""}/>:<Login />)}/>
        <Route path='/AddDoctor' element={(window.localStorage.getItem("uid")==null?<Login />:<AddDoctor/>)}/>
        <Route path='/BookAppointment' element={(window.localStorage.getItem("uid")==null?<Login />:<BookAppointment/>)}/>
        <Route path='/AddPatient' element={(window.localStorage.getItem("uid")==null?<Login />:<AddPatient/>)}/>
        <Route path='/ShowDoctors' element={(window.localStorage.getItem("uid")==null?<Login />:<ShowDoctors/>)}/>
        <Route path='/ShowPatients' element={(window.localStorage.getItem("uid")==null?<Login />:<ShowPatients/>)}/>
        <Route path='/Mainpage' element={<Mainpage/>}/>
        <Route path='/MainDoctorpage' element={<MainDoctorpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
