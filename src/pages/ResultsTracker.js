// pages/ResultsTracker.js
import React, { useState } from 'react';

const ResultsTracker = () => {
  // Dummy data for clients
  const clients = [
    { id: 1, name: 'Sarah Johnson' },
    { id: 2, name: 'Mike Peters' },
    { id: 3, name: 'Emma Davis' },
    { id: 4, name: 'Chris Wilson' },
    { id: 5, name: 'Jessica Brown' },
  ];
  
  // Dummy data for metrics history
  const metricsHistory = [
    { id: 1, date: 'Apr 20, 2025', metric: 'Weight', value: '142 lbs', change: '-1.5 lbs' },
    { id: 2, date: 'Apr 13, 2025', metric: 'Weight', value: '143.5 lbs', change: '-1.0 lbs' },
    { id: 3, date: 'Apr 20, 2025', metric: 'Body Fat', value: '22.7%', change: '-0.8%' },
    { id: 4, date: 'Apr 20, 2025', metric: 'Squat 1RM', value: '185 lbs', change: '+10 lbs' },
    { id: 5, date: 'Apr 13, 2025', metric: 'Body Fat', value: '23.5%', change: '-0.5%' },
    { id: 6, date: 'Apr 06, 2025', metric: 'Weight', value: '144.5 lbs', change: '-0.5 lbs' },
    { id: 7, date: 'Apr 06, 2025', metric: 'Push-ups', value: '20 reps', change: '+2 reps' },
  ];
  
  const [selectedClient, setSelectedClient] = useState(clients[0].id);
  const [selectedTimeframe, setSelectedTimeframe] = useState('last30');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter metrics based on search
  const filteredMetrics = metricsHistory.filter(item =>
    item.metric.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Results Tracker</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            Add New Metric
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Client Selection */}
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Client Selection</h3>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="space-y-2">
            {clients.map(client => (
              <div 
                key={client.id}
                className={`p-2 rounded flex items-center cursor-pointer transition ${
                  selectedClient === client.id ? 'bg-indigo-50 border border-indigo-200' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedClient(client.id)}
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                <span className={selectedClient === client.id ? 'font-medium' : ''}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Progress Overview</h3>
              <div>
                <select 
                  className="px-3 py-2 border rounded-lg"
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                >
                  <option value="last30">Last 30 days</option>
                  <option value="last90">Last 3 months</option>
                  <option value="last180">Last 6 months</option>
                  <option value="lastyear">Last year</option>
                </select>
              </div>
            </div>
            
            {/* Mock chart area */}
            <div className="h-64 flex items-center justify-center border border-gray-200 rounded mb-4 bg-gray-50">
              <div className="text-center">
                <p className="text-gray-400">Progress chart goes here</p>
                <p className="text-sm text-gray-500">Weight and body measurements over time</p>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-bold text-green-600">-4.5 lbs</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Body Fat</p>
                <p className="font-bold text-green-600">-2.3%</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Strength</p>
                <p className="font-bold text-green-600">+15%</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Endurance</p>
                <p className="font-bold text-green-600">+21%</p>
              </div>
            </div>
          </div>
          
          {/* Metrics History */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Metrics History</h3>
              <div>
                <input 
                  type="text" 
                  placeholder="Search metrics..." 
                  className="px-3 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Date</th>
                    <th className="text-left pb-2">Metric</th>
                    <th className="text-left pb-2">Value</th>
                    <th className="text-left pb-2">Change</th>
                    <th className="text-left pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMetrics.map(item => (
                    <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                      <td className="py-2">{item.date}</td>
                      <td>{item.metric}</td>
                      <td>{item.value}</td>
                      <td className={item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {item.change}
                      </td>
                      <td>
                        <button className="text-indigo-600 hover:text-indigo-800 transition mr-2">Edit</button>
                        <button className="text-red-600 hover:text-red-800 transition">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Add New Measurement button */}
            <div className="mt-4">
              <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition">
                <span className="mr-1">+</span> Add New Measurement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTracker;