import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { User } from './types'

const AdminMenu: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedOffice, setSelectedOffice] = useState<string>('All offices');

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      return age - 1;
    }
    return age;
  };

  const getRole = (roleId: number) => {
    return roleId === 1 ? 'administrator' : 'office user';
  };

  useEffect(() => {
    axios.get('/api/users')
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = response.data.map((user: any) => ({
          id: user.ID,
          firstName: user.FirstName,
          lastName: user.LastName,
          age: calculateAge(user.BirthDate), 
          role: getRole(user.RoleID), 
          email: user.Email,
          office: user.OfficeID, 
          status: user.Active ? 'active' : 'inactive',
        }));

        data.sort((a: User, b: User) => a.office - b.office);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных пользователей:", error);
      });
  }, []);

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
