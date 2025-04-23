// File path: /home/arif/project/Fitness/src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ClientManagement from './pages/ClientManagement';
import WorkoutBuilder from './pages/WorkoutBuilder';
import CalendarView from './pages/CalendarView';
import HabitsManagement from './pages/HabitsManagement';
import ResultsTracker from './pages/ResultsTracker';
import Messages from './pages/Messages';
import Payments from './pages/Payments';
import Settings from './pages/Settings';

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Render the appropriate content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <ClientManagement />;
      case 'workouts':
        return <WorkoutBuilder />;
      case 'calendar':
        return <CalendarView />;
      case 'habits':
        return <HabitsManagement />;
      case 'results':
        return <ResultsTracker />;
      case 'messages':
        return <Messages />;
      case 'payments':
        return <Payments />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;