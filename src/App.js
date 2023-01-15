import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/verfication' element={<Verifaction />} />
          
          <Route path='/' element={<Layout />} >
            <Route path='/dashboard' element={<AdminPanel />} />
            <Route path='/profile' element={<UpdateProfile />} />
            <Route path='/total_Interview' element={<TotalInterview />} />
            <Route path='/interviewer' element={<Interviewer />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
