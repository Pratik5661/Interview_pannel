import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';

import './style/login.scss'
import './style/registration.scss'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
