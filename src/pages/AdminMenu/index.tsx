import React, { useState } from 'react';
import './index.scss';
import { User } from './types';

const AdminMenu: React.FC = () => {

  const [users] = useState<User[]>([
    { id: 1, firstName: 'Peter', lastName: 'Severin', age: 40, role: 'administrator', email: 'peter.s@yahoo.com', office: 'Abu Dhabi', status: 'active' },
    { id: 2, firstName: 'Henri', lastName: 'Kerasha', age: 24, role: 'office user', email: 'severin2007@gmail.com', office: 'Abu Dhabi', status: 'active' },
    { id: 3, firstName: 'Olga', lastName: 'Navin', age: 65, role: 'office user', email: 'olga.olga@gmail.com', office: 'Bahrain', status: 'active' },
    { id: 4, firstName: 'Henri', lastName: 'Morf', age: 34, role: 'administrator', email: 'h.morg@amonic.com', office: 'Doha', status: 'active' },
    { id: 5, firstName: 'Mahan', lastName: 'Aliof', age: 45, role: 'office user', email: 'aliof1985@gmail.com', office: 'Bahrain', status: 'inactive' },
    { id: 6, firstName: 'Iraj', lastName: 'Asadi', age: 37, role: 'administrator', email: 'asadi.iraji@amonic.com', office: 'Doha', status: 'inactive' }
  ]);

  const [selectedOffice, setSelectedOffice] = useState<string>('All offices');

  const filteredUsers = selectedOffice === 'All offices' 
    ? users 
    : users.filter(user => user.office === selectedOffice);

  const offices = ['All offices', ...new Set(users.map(user => user.office))];

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
