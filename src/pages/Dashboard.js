// File path: /home/arif/project/Fitness/src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  // Dummy data for the dashboard
  const stats = [
    { label: 'Active Clients', value: 24 },
    { label: 'Total Sessions', value: 156 },
    { label: 'Completion Rate', value: '87%' },
    { label: 'Revenue', value: '$4,320' },
  ];
  
  const upcomingSessions = [
    { client: 'Sarah Johnson', time: '9:00 AM', type: 'Strength Training' },
    { client: 'Mike Peters', time: '11:30 AM', type: 'HIIT Workout' },
    { client: 'Emma Davis', time: '2:00 PM', type: 'Yoga' },
    { client: 'Chris Wilson', time: '4:30 PM', type: 'Nutrition Consultation' },
  ];
  
  const recentActivities = [
    { client: 'Emma Davis', action: 'completed workout', time: '45 min ago' },
    { client: 'Mike Peters', action: 'logged measurements', time: '2 hours ago' },
    { client: 'Sarah Johnson', action: 'completed daily habits', time: '3 hours ago' },
    { client: 'Jessica Brown', action: 'sent you a message', time: '5 hours ago' },
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Today's Sessions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Today's Sessions</h3>
          <ul className="divide-y">
            {upcomingSessions.map((session, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{session.client}</p>
                  <p className="text-sm text-gray-500">{session.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{session.time}</p>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition">
              View All Sessions
            </button>
          </div>
        </div>
        
        {/* Client Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="divide-y">
            {recentActivities.map((activity, index) => (
              <li key={index} className="py-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <p>
                      <span className="font-medium">{activity.client}</span>
                      <span className="text-gray-600"> {activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition">
              View All Activity
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded text-indigo-700 transition">
              <span className="mr-3">📋</span> Create New Workout
            </button>
            <button className="w-full flex items-center py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded text-indigo-700 transition">
              <span className="mr-3">📅</span> Schedule Appointment
            </button>
            <button className="w-full flex items-center py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded text-indigo-700 transition">
              <span className="mr-3">📊</span> Log Client Results
            </button>
            <button className="w-full flex items-center py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded text-indigo-700 transition">
              <span className="mr-3">💬</span> Send Message
            </button>
            <button className="w-full flex items-center py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded text-indigo-700 transition">
              <span className="mr-3">💰</span> Create Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;