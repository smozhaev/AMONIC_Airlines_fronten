import React, { useState } from 'react';
import './index.scss';

interface IAddUserForm {
  cancelAddUser: () => void;
}

const AddUserForm: React.FC<IAddUserForm> = ({cancelAddUser}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [office, setOffice] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, firstName, lastName, office, birthdate, password });
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <h2>Add user</h2>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Office</label>
        <select value={office} onChange={(e) => setOffice(e.target.value)} required>
          <option value="" disabled>Select office</option>
          <option value="Office 1">Office 1</option>
          <option value="Office 2">Office 2</option>
          <option value="Office 3">Office 3</option>
        </select>
      </div>
      <div className="form-group">
        <label>Birthdate</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button
          type="button" 
          onClick={() => {
            console.log('Cancelled')
            cancelAddUser();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
