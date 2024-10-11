import React from 'react';
import './index.scss';

const ActivityTable: React.FC = () => {
  return (
    <div className="activity-container">
      <h1>Hi Henri, Welcome to AMONIC Airlines.</h1>
      <div className="stats">
        <p>
          Time spent on system: <span className="highlight">00:19:03</span>
        </p>
        <p>
          Number of crashes: <span className="highlight">1</span>
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
          <tr>
            <td>02/13/2017</td>
            <td>17:15</td>
            <td>18:45</td>
            <td>1:30</td>
            <td></td>
          </tr>
          <tr className="crash-row">
            <td>02/13/2017</td>
            <td>8:25</td>
            <td>**</td>
            <td>**</td>
            <td>Power outage</td>
          </tr>
          <tr>
            <td>02/12/2017</td>
            <td>8:35</td>
            <td>18:45</td>
            <td>10:10</td>
            <td></td>
          </tr>
          <tr>
            <td>02/11/2017</td>
            <td>8:45</td>
            <td>18:30</td>
            <td>9:45</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
