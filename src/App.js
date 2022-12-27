import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './component/Login';
import Registration from './component/Registration';
import SideNav from './component/Shared/SideNav/index';
import './style/style.scss';


function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/' element={<SideNav />} />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
