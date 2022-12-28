import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/Login';
import Registration from './component/Registration';
import SideNav from './component/Shared/SideNav/index';
import AdminPanel from './component/AdminPanel/index';
import Layout from './component/Layout';
import './style/style.scss';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/admin' element={<Layout />} >
            <Route path='/admin/dashboard' element={<AdminPanel />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
