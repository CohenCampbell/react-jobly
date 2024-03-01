import React from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './Home';
import CompanyList from './ComanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <nav>
        <div>
        <Link to="/" id='HomeNavLink'>Jobly</Link>
        <Link to="/companies"><span>Companies</span></Link>
        <Link to="/jobs"><span>Jobs</span></Link>
        <Link to="/profile"><span>Profile</span></Link>
        <Link to="/logout"><span>Logout</span></Link>
        </div>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/companies' element={<CompanyList/>}/>
      <Route path='/companies:name' element={<CompanyDetails/>}/>
      <Route path='/jobs' element={<JobList/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
