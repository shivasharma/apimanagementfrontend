import logo from './logo.svg';
import './App.css';
import Header from './pages/header/header';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Nomatch from './pages/nomatch/nomatch';
import PostUser from './pages/employee/postuser';
import UpdateUser from './pages/employee/updateuser';
function App() {
  return (
    <div className="text-center">
      <>
      <Header/>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/employee" element={<PostUser/>} />
      <Route path="/employee/:id" element={<UpdateUser/>} />
      <Route path="*" element={<Nomatch/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
