import React from 'react'
import Dashboard from './Dashboard';
import NavbarAdmin from './Sidebar/NavbarAdmin';

const AdminPanel = () => {
  return (
    <>
      <NavbarAdmin/> 
      <div>
      <div className="container Dashboard-header">
      <Dashboard/> 
      </div>
      </div>
      <div></div>
    </>
  )
}

export default AdminPanel;
