import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminMenu.css';

function AdminMenu() {
  return (
    <div className="">
    <ul className="admin-menu">
        <li className="admin-menu-item">
            <NavLink exact to="/admin">Driver&apos;s list</NavLink>
        </li>
    </ul>
    </div>
  );
}

export default AdminMenu;
