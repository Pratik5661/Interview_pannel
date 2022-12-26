import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
// import DeveloperPannel from './pannel/DeveloperPannel';

import './style/login.scss'
import './pannel/developer.scss';
import './style/registration.scss'
import './component/Developer/developerPannel.scss'
import SideNav from './component/shared/sildenav';
import Developer from './component/Developer/DeveloperPannel';
import DeveloperDb from './pannel/DeveloperDb';
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        {/* <Route path='/developer_pannel' element={<DeveloperPannel />} /> */}
        <Route path='/' element={<SideNav />} />
        <Route path='/developerPannel' element={<Developer />} />
        <Route path='/developer' element={<DeveloperDb />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
