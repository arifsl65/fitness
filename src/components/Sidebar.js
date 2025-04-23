// File path: /home/arif/project/Fitness/src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  // Navigation items for the sidebar
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'clients', label: 'Client Management', icon: '👥' },
    { id: 'workouts', label: 'Workout Builder', icon: '💪' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'habits', label: 'Habits', icon: '✓' },
    { id: 'results', label: 'Results', icon: '📈' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'payments', label: 'Payments', icon: '💰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];
  
  return (
    <div className="w-64 bg-indigo-800 text-white flex-shrink-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">FitCoach Pro</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map(item => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full p-3 text-left ${
                  activeTab === item.id ? 'bg-indigo-900' : 'hover:bg-indigo-700'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;