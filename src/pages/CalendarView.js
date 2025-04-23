// File path: /home/arif/project/Fitness/src/pages/CalendarView.js
import React, { useState } from 'react';

const CalendarView = () => {
  const [currentView, setCurrentView] = useState('week');
  const [currentMonth, setCurrentMonth] = useState('April 2025');
  
  // Generate calendar grid
  const generateDays = () => {
    const days = [];
    const daysInMonth = 30; // April 2025
    
    for (let i = 1; i <= 35; i++) {
      const day = i <= daysInMonth ? i : i - daysInMonth;
      const isToday = day === 23 && i <= daysInMonth; // Today is April 23
      const hasEvents = [4, 10, 15, 23, 28].includes(day);
      
      days.push({ day, isToday, hasEvents, isCurrentMonth: i <= daysInMonth });
    }
    
    return days;
  };
  
  const days = generateDays();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            + New Appointment
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        {/* Calendar Header */}
        <div className="border-b p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition">Today</button>
            <button className="p-1 text-gray-600 hover:text-gray-800 transition">◀</button>
            <button className="p-1 text-gray-600 hover:text-gray-800 transition">▶</button>
          </div>
          <h3 className="text-lg font-medium">{currentMonth}</h3>
          <div className="flex items-center space-x-2">
            <button 
              className={`px-3 py-1 rounded transition ${currentView === 'day' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              onClick={() => setCurrentView('day')}
            >
              Day
            </button>
            <button 
              className={`px-3 py-1 rounded transition ${currentView === 'week' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              onClick={() => setCurrentView('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 rounded transition ${currentView === 'month' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              onClick={() => setCurrentView('month')}
            >
              Month
            </button>
          </div>
        </div>
        
        {/* Calendar Body - Month View */}
        {currentView === 'month' && (
          <div className="p-4">
            <div className="grid grid-cols-7 gap-4">
              <div className="text-center text-gray-500 font-medium">Sun</div>
              <div className="text-center text-gray-500 font-medium">Mon</div>
              <div className="text-center text-gray-500 font-medium">Tue</div>
              <div className="text-center text-gray-500 font-medium">Wed</div>
              <div className="text-center text-gray-500 font-medium">Thu</div>
              <div className="text-center text-gray-500 font-medium">Fri</div>
              <div className="text-center text-gray-500 font-medium">Sat</div>
              
              {days.map((day, index) => (
                <div 
                  key={index} 
                  className={`min-h-24 border rounded p-1 ${
                    !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' :
                    day.isToday ? 'bg-indigo-50 border-indigo-300' : ''
                  }`}
                >
                  <div className="text-right">
                    <span className={`inline-block w-6 h-6 text-center ${
                      day.isToday ? 'bg-indigo-600 text-white rounded-full' : ''
                    }`}>
                      {day.day}
                    </span>
                  </div>
                  {day.hasEvents && (
                    <div className="mt-1">
                      <div className="bg-indigo-100 text-indigo-800 text-xs p-1 rounded mb-1 truncate">
                        9:00 AM - Sarah J.
                      </div>
                      {day.isToday && (
                        <>
                          <div className="bg-green-100 text-green-800 text-xs p-1 rounded mb-1 truncate">
                            11:30 AM - Mike P.
                          </div>
                          <div className="bg-yellow-100 text-yellow-800 text-xs p-1 rounded truncate">
                            2:00 PM - Emma D.
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Calendar Body - Week View */}
        {currentView === 'week' && (
          <div className="p-4">
            <div className="grid grid-cols-8 gap-4">
              {/* Time column */}
              <div className="space-y-8 pt-10">
                <div className="text-right text-sm text-gray-500">7:00 AM</div>
                <div className="text-right text-sm text-gray-500">8:00 AM</div>
                <div className="text-right text-sm text-gray-500">9:00 AM</div>
                <div className="text-right text-sm text-gray-500">10:00 AM</div>
                <div className="text-right text-sm text-gray-500">11:00 AM</div>
                <div className="text-right text-sm text-gray-500">12:00 PM</div>
                <div className="text-right text-sm text-gray-500">1:00 PM</div>
                <div className="text-right text-sm text-gray-500">2:00 PM</div>
                <div className="text-right text-sm text-gray-500">3:00 PM</div>
                <div className="text-right text-sm text-gray-500">4:00 PM</div>
                <div className="text-right text-sm text-gray-500">5:00 PM</div>
              </div>
              
              {/* Day columns */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                <div key={day} className="flex flex-col">
                  <div className={`text-center font-medium p-2 ${i === 3 ? 'bg-indigo-100 rounded-t' : ''}`}>
                    {day}
                    <div className="text-sm">{20 + i}</div>
                  </div>
                  
                  <div className={`border flex-1 relative ${i === 3 ? 'bg-indigo-50' : ''}`}>
                    {i === 3 && (
                      <>
                        <div className="absolute top-24 left-1 right-1 bg-indigo-100 border-l-4 border-indigo-600 rounded p-1 text-xs">
                          <div className="font-bold">9:00 AM - 10:00 AM</div>
                          <div>Sarah Johnson</div>
                          <div className="text-gray-500">Strength Training</div>
                        </div>
                        
                        <div className="absolute top-56 left-1 right-1 bg-green-100 border-l-4 border-green-600 rounded p-1 text-xs">
                          <div className="font-bold">11:30 AM - 12:30 PM</div>
                          <div>Mike Peters</div>
                          <div className="text-gray-500">HIIT Workout</div>
                        </div>
                        
                        <div className="absolute top-96 left-1 right-1 bg-yellow-100 border-l-4 border-yellow-600 rounded p-1 text-xs">
                          <div className="font-bold">2:00 PM - 3:00 PM</div>
                          <div>Emma Davis</div>
                          <div className="text-gray-500">Yoga</div>
                        </div>
                        
                        <div className="absolute top-[30rem] left-1 right-1 bg-purple-100 border-l-4 border-purple-600 rounded p-1 text-xs">
                          <div className="font-bold">4:30 PM - 5:30 PM</div>
                          <div>Chris Wilson</div>
                          <div className="text-gray-500">Nutrition Consultation</div>
                        </div>
                      </>
                    )}
                    
                    {i === 1 && (
                      <div className="absolute top-72 left-1 right-1 bg-blue-100 border-l-4 border-blue-600 rounded p-1 text-xs">
                        <div className="font-bold">12:00 PM - 1:00 PM</div>
                        <div>David Martinez</div>
                        <div className="text-gray-500">Consultation</div>
                      </div>
                    )}
                    
                    {i === 5 && (
                      <div className="absolute top-48 left-1 right-1 bg-red-100 border-l-4 border-red-600 rounded p-1 text-xs">
                        <div className="font-bold">11:00 AM - 12:00 PM</div>
                        <div>Jessica Brown</div>
                        <div className="text-gray-500">Assessment</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Calendar Body - Day View */}
        {currentView === 'day' && (
          <div className="p-4">
            <h4 className="text-center mb-4">Wednesday, April 23, 2025</h4>
            
            <div className="grid grid-cols-1 gap-4">
              {['9:00 AM - 10:00 AM', '11:30 AM - 12:30 PM', '2:00 PM - 3:00 PM', '4:30 PM - 5:30 PM'].map((time, i) => (
                <div key={i} className={`p-4 rounded-lg ${
                  i === 0 ? 'bg-indigo-100 border-l-4 border-indigo-600' :
                  i === 1 ? 'bg-green-100 border-l-4 border-green-600' :
                  i === 2 ? 'bg-yellow-100 border-l-4 border-yellow-600' :
                  'bg-purple-100 border-l-4 border-purple-600'
                }`}>
                  <div className="font-bold">{time}</div>
                  <div className="text-lg mt-1">
                    {i === 0 ? 'Sarah Johnson - Strength Training' :
                     i === 1 ? 'Mike Peters - HIIT Workout' :
                     i === 2 ? 'Emma Davis - Yoga' :
                     'Chris Wilson - Nutrition Consultation'}
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="text-gray-700">
                      Notes: {i === 0 ? 'Focus on upper body strength' :
                              i === 1 ? 'New circuit workout' :
                              i === 2 ? 'Relaxation sequence' :
                              'Meal plan review'}
                    </div>
                    <div>
                      <button className="text-indigo-600 hover:text-indigo-800 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;