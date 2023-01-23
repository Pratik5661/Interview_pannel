import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from './component/Login';
import Registration from './component/Registration';
// import SideNav from './component/Shared/SideNav/index';
import AdminPanel from './component/AdminPanel/index';
import Layout from './component/Layout';
import './style/style.scss';
import Verifaction from './component/Registration/verification';
import UpdateProfile from './component/updateProfile';
import TotalInterview from './component/Interviews';
import Interviewer from './component/InterViewer';
import Developer_Panel from './component/Developer\'s';
import ForgetPassword from './component/Login/forgetPassword';
import Interview_Schedule from './component/interview_schedule';

const CheckAuth = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    if (user.role === 'Developer' || user.role === 'Interviewer') {
      return <Layout />
    } else if (user.role === 'Admin') {
      return <Layout />
    } else {
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forget_password' element={<ForgetPassword />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/verfication' element={<Verifaction />} />
          <Route path='/' element={<CheckAuth />} >
            <Route path='/dashboard' element={<AdminPanel />} />
            <Route path='/profile' element={<UpdateProfile />} />
            <Route path='/total_Interview' element={<TotalInterview />} />
            <Route path='/interviewer' element={<Interviewer />} />
            <Route path='/developer_panel' element={<Developer_Panel />} />
            <Route path='/interivew_schedule' element={<Interview_Schedule />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
