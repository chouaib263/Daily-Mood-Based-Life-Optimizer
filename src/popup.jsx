import React from 'react';
import ReactDOM from 'react-dom/client';

function Popup() {
  return (
    <div style={{ padding: '1rem', width: '300px' }}>
      <h2>MoodFlow 🌈</h2>
      <p>How are you feeling today?</p>
      {/* Later: MoodInput, GoalCard, etc. */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Popup />);
