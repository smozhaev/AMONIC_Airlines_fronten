import React, { useState } from 'react';
import './index.scss';
import useGetUsers from '../../hooks/useGetUsers';

const AdminMenu: React.FC = () => {
  const [users] = useGetUsers();
  const [selectedOffice, setSelectedOffice] = useState<string>('All offices');

  const filteredUsers = selectedOffice === 'All offices' 
    ? users 
    : users.filter(user => user.office.toString() === selectedOffice);

  const offices = ['All offices', ...new Set(users.map(user => user.office.toString()))];

  return (
    <div className="user-table-container">
      <div className="filter-container">
        <label htmlFor="office">Office:</label>
        <select 
          id="office" 
          value={selectedOffice} 
          onChange={(e) => setSelectedOffice(e.target.value)}
        >
          {offices.map(office => (
            <option key={office} value={office}>
              {office}
            </option>
          ))}
        </select>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>User Role</th>
            <th>Email Address</th>
            <th>Office</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} className={user.status === 'inactive' ? 'inactive-row' : 'active-row'}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.office}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons-container">
        <button type="button" className="btn-change-role">Change Role</button>
        <button type="button" className="btn-enable-disable">Enable/Disable Login</button>
      </div>
    </div>
  );
};

export default AdminMenu;
