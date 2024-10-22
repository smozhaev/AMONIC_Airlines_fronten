import React, { useState } from 'react';
import './index.scss';
import useGetUsers from '../../hooks/useGetUsers';
import UserTableString from '../../components/UserTableString';
import DisableLoginButton from '../../components/Buttons/DisableLoginButton';
import EnableLoginButton from '../../components/Buttons/EnableLoginButton';

const AdminMenu: React.FC = () => {
  const [users] = useGetUsers();
  const [selectedOffice, setSelectedOffice] = useState<string>('All offices');
  const [selectedUserId, setSelectedUserId] = useState< number | null >(null);
  const [selectedUserStatus, setSelectedUserStatus] = useState<string | null>(null);

  const filteredUsers = selectedOffice === 'All offices' 
    ? users 
    : users.filter(user => user.office.toString() === selectedOffice);

  const offices = ['All offices', ...new Set(users.map(user => user.office.toString()))];

  const handleRowClick = (id: number) => {
    setSelectedUserId(id === selectedUserId ? null : id )
  }

  const handleStatusClick = (status: string) => {
    setSelectedUserStatus(status)
  }

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
            <UserTableString 
              user={user}
              isSelected={user.id === selectedUserId} 
              onClick={() => {
                handleRowClick(user.id);
                handleStatusClick(user.status);
              }}
               
            />
          ))}
        </tbody>
      </table>

      { 
        selectedUserStatus === null ?
          <div className="buttons-container">
            <button type="button" className="btn-change-role">Change Role</button>
          </div>
        :
        <div className="buttons-container">
          <button type="button" className="btn-change-role">Change Role</button>
          {selectedUserStatus === 'active' ? <DisableLoginButton/> : <EnableLoginButton/>}
        </div>
      }
    </div>
  );
};

export default AdminMenu;
