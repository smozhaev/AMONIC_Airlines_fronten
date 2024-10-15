import React from 'react';
import './index.scss';

type Session = {
  date: string;
  loginTime: string;
  logoutTime: string;
  timeSpent: string;
  crashReason?: string;
};

type UserActivityProps = {
  fullname: string;
  timeSpentTotal: string;
  crashesCount: number;
  sessions: Session[];
};

const ActivityTable: React.FC<UserActivityProps> = ({ fullname, timeSpentTotal, crashesCount, sessions }) => {
  return (
    <div className="activity-container">
      <h1>Hi {fullname}, Welcome to AMONIC Airlines Automation System</h1>
      <div className="stats">
        <p>
          Time spent on system: <span className="highlight">{timeSpentTotal}</span>
        </p>
        <p>
          Number of crashes: <span className="highlight">{crashesCount}</span>
        </p>
      </div>

      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Login time</th>
            <th>Logout time</th>
            <th>Time spent on system</th>
            <th>Unsuccessful logout reason</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index} className={session.crashReason ? 'crash-row' : ''}>
              <td>{session.date}</td>
              <td>{session.loginTime}</td>
              <td>{session.logoutTime}</td>
              <td>{session.timeSpent}</td>
              <td>{session.crashReason || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
