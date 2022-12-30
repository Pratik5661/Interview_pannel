import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/Login';
import Registration from './component/Registration';
// import SideNav from './component/Shared/SideNav/index';
import AdminPanel from './component/AdminPanel/index';
import Layout from './component/Layout';
import './style/style.scss';
import Verifaction from './component/Registration/verification';
import UpdateProfile from './component/updateProfile';
import TotalInterview from './component/totalInterview';
import Interviewer from './component/pendingInterview';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} >
          </Route>
          <Route path='/verfication' element={<Verifaction />} />
          <Route path='/admin' element={<Layout />} >
            <Route path='/admin/dashboard' element={<AdminPanel />} />
            <Route path='/admin/update_profile' element={<UpdateProfile />} />
            <Route path='/admin/total_Interview' element={<TotalInterview />} />
            <Route path='/admin/interviewer' element={<Interviewer />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
