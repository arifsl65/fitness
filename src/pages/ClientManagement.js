// File path: /home/arif/project/Fitness/src/pages/ClientManagement.js
import React, { useState } from 'react';

const ClientManagement = () => {
  // Dummy data for clients
  const initialClients = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', program: 'Weight Loss', status: 'Active', lastActive: '2 hours ago' },
    { id: 2, name: 'Mike Peters', email: 'mike@example.com', program: 'Muscle Building', status: 'Active', lastActive: '1 day ago' },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', program: 'Yoga', status: 'On Hold', lastActive: '3 days ago' },
    { id: 4, name: 'Chris Wilson', email: 'chris@example.com', program: 'Athletic Performance', status: 'Active', lastActive: '5 hours ago' },
    { id: 5, name: 'Jessica Brown', email: 'jessica@example.com', program: 'Rehabilitation', status: 'Inactive', lastActive: '2 weeks ago' },
    { id: 6, name: 'David Martinez', email: 'david@example.com', program: 'Weight Loss', status: 'Active', lastActive: '1 day ago' },
    { id: 7, name: 'Lisa Taylor', email: 'lisa@example.com', program: 'Functional Training', status: 'Active', lastActive: '3 hours ago' },
  ];
  
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Filter clients based on search term and status
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Client Management</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
          + Add New Client
        </button>
      </div>
      
      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="w-full px-3 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>On Hold</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
            <select className="w-full px-3 py-2 border rounded-lg">
              <option>All Programs</option>
              <option>Weight Loss</option>
              <option>Muscle Building</option>
              <option>Yoga</option>
              <option>Athletic Performance</option>
              <option>Rehabilitation</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Clients Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredClients.map(client => (
              <tr key={client.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-gray-900">{client.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{client.program}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    client.status === 'Active' ? 'bg-green-100 text-green-800' :
                    client.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{client.lastActive}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900 transition mr-3">View</button>
                  <button className="text-indigo-600 hover:text-indigo-900 transition mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredClients.length}</span> of <span className="font-medium">{clients.length}</span> results
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition" disabled>Previous</button>
              <button className="px-3 py-1 border rounded bg-indigo-50 text-indigo-600 font-medium">1</button>
              <button className="px-3 py-1 border rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;