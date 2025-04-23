// pages/HabitsManagement.js
import React, { useState } from 'react';

const HabitsManagement = () => {
  // Dummy data for habit templates
  const habitTemplates = [
    { id: 1, name: 'Daily Water Intake', description: 'Drink 8 glasses of water daily', category: 'Nutrition' },
    { id: 2, name: 'Morning Workout', description: '15 minute morning exercise routine', category: 'Fitness' },
    { id: 3, name: 'Meditation', description: '10 minutes of mindfulness meditation', category: 'Wellness' },
    { id: 4, name: 'Protein with Each Meal', description: 'Include protein source with every meal', category: 'Nutrition' },
    { id: 5, name: 'Step Count', description: 'Reach 10,000 steps daily', category: 'Fitness' },
    { id: 6, name: 'Sleep Schedule', description: '7-8 hours of sleep at consistent times', category: 'Wellness' },
    { id: 7, name: 'Vegetable Servings', description: 'Eat 5 servings of vegetables daily', category: 'Nutrition' },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [newHabit, setNewHabit] = useState({
    name: '',
    description: '',
    category: 'Nutrition',
    frequency: 'Daily'
  });
  
  // Filter templates based on search
  const filteredTemplates = habitTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Habits Management</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            Create New Habit
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Habit Templates */}
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Habit Templates</h3>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search habits..." 
              className="w-full px-3 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-y-3 overflow-y-auto max-h-[500px]">
            {filteredTemplates.map(template => (
              <div key={template.id} className="p-3 bg-gray-50 rounded hover:bg-gray-100 transition cursor-pointer">
                <h4 className="font-medium">{template.name}</h4>
                <p className="text-sm text-gray-500">{template.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">{template.category}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm transition">Assign</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          {/* Create Custom Habit */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Create Custom Habit</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Habit Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter habit name"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newHabit.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea 
                  name="description"
                  placeholder="Enter habit description"
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="3"
                  value={newHabit.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select 
                    name="category"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={newHabit.category}
                    onChange={handleInputChange}
                  >
                    <option>Nutrition</option>
                    <option>Fitness</option>
                    <option>Wellness</option>
                    <option>Lifestyle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Frequency</label>
                  <select 
                    name="frequency"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={newHabit.frequency}
                    onChange={handleInputChange}
                  >
                    <option>Daily</option>
                    <option>Weekdays</option>
                    <option>Weekly</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded mr-2 transition">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition">
                  Save Habit
                </button>
              </div>
            </div>
          </div>
          
          {/* Streak Settings */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-4">Streak Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="enableStreaks" defaultChecked />
                <label htmlFor="enableStreaks">Enable streak tracking for habits</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="enableBadges" defaultChecked />
                <label htmlFor="enableBadges">Award badges for milestone achievements</label>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Milestone Intervals</label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    defaultValue="7" 
                    className="w-16 px-3 py-2 border rounded-lg"
                  />
                  <span>days,</span>
                  <input 
                    type="number" 
                    defaultValue="30" 
                    className="w-16 px-3 py-2 border rounded-lg"
                  />
                  <span>days,</span>
                  <input 
                    type="number" 
                    defaultValue="90" 
                    className="w-16 px-3 py-2 border rounded-lg"
                  />
                  <span>days</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">Badge Preview</h4>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 border-2 border-indigo-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <span className="text-sm">7-Day Streak</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <span className="text-sm">30-Day Streak</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 border-2 border-purple-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <span className="text-sm">90-Day Streak</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition">
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

export default HabitsManagement;