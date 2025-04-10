import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminnavbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Admin Panel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/admindashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="allusers">Users</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/admin/addadmin">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
