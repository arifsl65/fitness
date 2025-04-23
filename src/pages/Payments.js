
// pages/Payments.js
import React, { useState } from 'react';

const Payments = () => {
  // Dummy data for payment history
  const initialPayments = [
    { id: 1, client: 'Sarah Johnson', amount: '$120.00', date: 'Apr 20, 2025', status: 'Paid', type: 'Monthly Coaching' },
    { id: 2, client: 'Mike Peters', amount: '$200.00', date: 'Apr 18, 2025', status: 'Paid', type: 'Training Package' },
    { id: 3, client: 'Emma Davis', amount: '$75.00', date: 'Apr 15, 2025', status: 'Paid', type: 'Single Session' },
    { id: 4, client: 'Chris Wilson', amount: '$120.00', date: 'Apr 10, 2025', status: 'Paid', type: 'Monthly Coaching' },
    { id: 5, client: 'Jessica Brown', amount: '$150.00', date: 'Apr 05, 2025', status: 'Refunded', type: 'Training Package' },
    { id: 6, client: 'David Martinez', amount: '$45.00', date: 'Apr 03, 2025', status: 'Paid', type: 'Nutrition Plan' },
    { id: 7, client: 'Lisa Taylor', amount: '$120.00', date: 'Mar 27, 2025', status: 'Paid', type: 'Monthly Coaching' },
    { id: 8, client: 'Sarah Johnson', amount: '$35.00', date: 'Mar 22, 2025', status: 'Paid', type: 'Assessment' },
    { id: 9, client: 'Emma Davis', amount: '$75.00', date: 'Mar 18, 2025', status: 'Paid', type: 'Single Session' },
    { id: 10, client: 'Mike Peters', amount: '$200.00', date: 'Mar 15, 2025', status: 'Paid', type: 'Training Package' },
  ];
  
  const [payments, setPayments] = useState(initialPayments);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 5;
  
  // Filter payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  // Paginate
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirstPayment, indexOfLastPayment);
  const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payments</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            Request Payment
          </button>
        </div>
      </div>
      
      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 mb-1">Total Revenue</h3>
          <p className="text-3xl font-bold">$4,320</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 mb-1">This Month</h3>
          <p className="text-3xl font-bold">$965</p>
          <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 mb-1">Pending</h3>
          <p className="text-3xl font-bold">$350</p>
          <p className="text-sm text-gray-500 mt-2">3 pending payments</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 mb-1">Average</h3>
          <p className="text-3xl font-bold">$126</p>
          <p className="text-sm text-gray-500 mt-2">Per client monthly</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment History */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-lg font-medium mb-3 md:mb-0">Payment History</h3>
            <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
              <input 
                type="text" 
                placeholder="Search payments..." 
                className="px-3 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select 
                className="px-3 py-2 border rounded-lg"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Refunded</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3">Client</th>
                  <th className="text-left pb-3">Amount</th>
                  <th className="text-left pb-3">Date</th>
                  <th className="text-left pb-3">Type</th>
                  <th className="text-left pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentPayments.map(payment => (
                  <tr key={payment.id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3">{payment.client}</td>
                    <td className="py-3">{payment.amount}</td>
                    <td className="py-3">{payment.date}</td>
                    <td className="py-3">{payment.type}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <nav className="inline-flex">
              <button 
                className={`px-3 py-1 rounded-l border ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 transition'
                }`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  className={`px-3 py-1 border-t border-b ${
                    currentPage === page 
                      ? 'bg-indigo-50 text-indigo-600 font-medium'
                      : 'hover:bg-gray-100 transition'
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              
              <button 
                className={`px-3 py-1 rounded-r border ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 transition'
                }`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
        
        {/* Payment Methods & Settings */}
        <div className="md:col-span-1">
          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
            <div className="mb-4 p-3 border rounded-lg flex items-center">
              <div className="mr-3 text-2xl">💳</div>
              <div>
                <p className="font-medium">Stripe</p>
                <p className="text-sm text-gray-500">Connected and active</p>
              </div>
              <div className="ml-auto">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Default</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Add Payment Method</h4>
              <button className="w-full flex items-center justify-center p-3 border border-dashed rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition">
                <span className="mr-2">+</span> Add Payment Gateway
              </button>
            </div>
          </div>
          
          {/* Payment Settings */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-4">Payment Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Auto-receipt emails</label>
                <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                  <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Payment reminders</label>
                <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                  <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Manual approval</label>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Late payment fees</label>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                </div>
              </div>
              <div className="pt-3">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;