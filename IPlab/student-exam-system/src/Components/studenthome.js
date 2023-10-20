import React from 'react';
import './StudentHome.css'; // Import your custom CSS file

const StudentHome = () => {
  const tests = [
    { id: 1, title: 'Test 1', date: '2023-10-25' },
    { id: 2, title: 'Test 2', date: '2023-11-05' },
    { id: 3, title: 'Test 3', date: '2023-11-20' },
  ];

  return (
    <div className="student-home">
      <h2>Upcoming Tests</h2>
      <ul className="test-list">
        {tests.map((test) => (
          <li key={test.id} className="test-item">
            <div className="test-info">
              <p className="test-title">{test.title}</p>
              <p className="test-date">Date: {test.date}</p>
            </div>
            <button className="test-button">Start Test</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentHome;