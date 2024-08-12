
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminPanel from './pages/Admin/AdminPanel';
import Dashboard from './pages/Admin/Dashboard';
function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Admin Panel Routes */}
        {/* <Route path='/admin-login' element={<AdminLogin/> }/> */}
        {/* <Route path='/admin-signup' element={<AdminSignup/> }/> */}
        <Route path='/admin-panel' element={<AdminPanel/> }/>
        {/* <Route path='/forgot-password' element={<ForgotPassword/> }/> */}
        {/* <Route path='/reset-password' element={<ResetPassword/> }/> */}
        <Route path='/dashboard' element={<Dashboard/> }/>
        {/* <Route path='/myApplicants' element={<MyApplicants/> }/> */}
        {/* <Route path='/admit-card' element={<AdmitCard/> }/> */}
        {/* <Route path='/interview-feedback' element={<InterviewAndFeedback/> }/> */}
        {/* <Route path='/selection-letter' element={<selectionLetter/> }/> */}
        {/* <Route path='/confirmation-letter' element={<ConfirmationLetter/> }/> */}
        {/* <Route path='/enquiries' element={<Enquiries/> }/> */}
        {/* <Route path='/sub-admin' element={<SubAdmin/> }/> */}

        <Route />
      </Routes>
    </Router>
    <div className="App">
    </div>
    </>
  );
}

export default App;
