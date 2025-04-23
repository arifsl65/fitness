// File path: /home/arif/project/Fitness/src/pages/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  // State for active tab in settings
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dummy state for profile form
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Trainer',
    email: 'john.trainer@example.com',
    phone: '(555) 123-4567',
    title: 'Certified Personal Trainer',
    bio: 'Certified personal trainer with 7+ years of experience in strength training, weight loss, and athletic performance. Passionate about helping clients achieve their fitness goals through personalized training programs and ongoing support.',
    specializations: ['Strength Training', 'Weight Loss', 'Functional Fitness']
  });
  
  // Handle profile change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };
  
  // Handle adding specialization
  const [newSpecialization, setNewSpecialization] = useState('');
  
  const addSpecialization = () => {
    if (newSpecialization.trim() !== '') {
      setProfile({
        ...profile,
        specializations: [...profile.specializations, newSpecialization]
      });
      setNewSpecialization('');
    }
  };
  
  // Handle removing specialization
  const removeSpecialization = (index) => {
    setProfile({
      ...profile,
      specializations: profile.specializations.filter((_, i) => i !== index)
    });
  };
  
  // Render different settings tabs
  const renderSettingsContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Profile Settings</h3>
            
            {/* Profile Photo */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm mr-2 transition">
                    Upload Photo
                  </button>
                  <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm transition">
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">Recommended: Square image, at least 300x300 pixels</p>
            </div>
            
            {/* Profile Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={profile.firstName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text"
                    name="lastName" 
                    className="w-full px-3 py-2 border rounded-lg"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Professional Title</label>
                <input 
                  type="text"
                  name="title"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={profile.title}
                  onChange={handleProfileChange}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Bio</label>
                <textarea 
                  name="bio"
                  className="w-full px-3 py-2 border rounded-lg"
                  rows="4"
                  value={profile.bio}
                  onChange={handleProfileChange}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Specializations</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {profile.specializations.map((spec, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full flex items-center">
                      {spec}
                      <button 
                        className="ml-2 text-indigo-600 hover:text-indigo-800 transition"
                        onClick={() => removeSpecialization(index)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Add specialization"
                    className="flex-1 px-3 py-2 border rounded-l-lg"
                    value={newSpecialization}
                    onChange={(e) => setNewSpecialization(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSpecialization()}
                  />
                  <button 
                    className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg transition"
                    onClick={addSpecialization}
                  >
                    Add
                  </button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Social Media Links</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-10 text-center text-gray-500">📱</span>
                    <input 
                      type="url" 
                      placeholder="Instagram URL"
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-10 text-center text-gray-500">📘</span>
                    <input 
                      type="url" 
                      placeholder="Facebook URL"
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-10 text-center text-gray-500">🐦</span>
                    <input 
                      type="url" 
                      placeholder="Twitter URL"
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="w-10 text-center text-gray-500">💼</span>
                    <input 
                      type="url" 
                      placeholder="LinkedIn URL"
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'branding':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Branding Settings</h3>
            
            <div className="space-y-6">
              {/* Logo */}
              <div>
                <label className="block text-gray-700 mb-2">Logo</label>
                <div className="flex items-center mb-4">
                  <div className="w-32 h-32 bg-gray-200 border flex items-center justify-center mr-4">
                    <span className="text-gray-400">No Logo</span>
                  </div>
                  <div>
                    <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm mr-2 transition">
                      Upload Logo
                    </button>
                    <p className="text-sm text-gray-500 mt-2">Recommended size: 400x400 pixels</p>
                  </div>
                </div>
              </div>
              
              {/* Colors */}
              <div>
                <label className="block text-gray-700 mb-2">Brand Colors</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Primary Color</label>
                    <div className="flex">
                      <div className="w-10 h-10 bg-indigo-600 rounded-l border-l border-t border-b"></div>
                      <input 
                        type="text" 
                        value="#4F46E5" 
                        className="flex-1 border border-gray-300 rounded-r px-3"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Secondary Color</label>
                    <div className="flex">
                      <div className="w-10 h-10 bg-gray-800 rounded-l border-l border-t border-b"></div>
                      <input 
                        type="text" 
                        value="#1F2937" 
                        className="flex-1 border border-gray-300 rounded-r px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Custom Domain */}
              <div>
                <label className="block text-gray-700 mb-2">Custom Domain</label>
                <div className="flex mb-2">
                  <input 
                    type="text" 
                    placeholder="yourdomain" 
                    className="flex-1 px-3 py-2 border rounded-l-lg"
                  />
                  <div className="bg-gray-100 text-gray-700 px-3 py-2 border-t border-r border-b rounded-r-lg">
                    .fitcoach.app
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Pro plan required for custom domains. 
                  <button className="text-indigo-600 hover:text-indigo-800 ml-1 transition">
                    Upgrade now
                  </button>
                </p>
              </div>
              
              {/* Client Portal Customization */}
              <div>
                <label className="block text-gray-700 mb-2">Client Portal Text</label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Welcome Message</label>
                    <textarea 
                      className="w-full px-3 py-2 border rounded-lg"
                      rows="2"
                      placeholder="Welcome message for your clients"
                      defaultValue="Welcome to your fitness journey! Here you'll find your workouts, track progress, and communicate with your coach."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Portal Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border rounded-lg"
                      defaultValue="Fitness Journey Portal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Email Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">New client signs up</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Client completes workout</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Client misses workout</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">New payment received</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Subscription reminders</label>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                      <div className="absolute left-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Push Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">New messages</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Calendar reminders</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Client achievements</label>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                      <div className="absolute left-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Client Reminders</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Workout reminders</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Habit check-ins</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700">Upcoming appointments</label>
                    <div className="w-10 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Reminder time (before scheduled workout)</label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>12 hours</option>
                      <option>24 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Security Settings</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Change Password</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 mb-2">Current Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">New Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border rounded-lg"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-gray-700">Enable 2FA for additional security</p>
                    <p className="text-sm text-gray-500">Protect your account with an additional security layer</p>
                  </div>
                  <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                    <div className="absolute left-0 top-0 bg-white w-6 h-6 rounded-full border"></div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition">
                  Setup Two-Factor Authentication
                </button>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Session Management</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-gray-500">Chrome on Windows • IP: 192.168.1.1</p>
                      </div>
                      <div className="text-green-600 font-medium">Active</div>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Previous Session</p>
                        <p className="text-sm text-gray-500">Safari on iPhone • 2 days ago</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800 transition">Revoke</button>
                    </div>
                  </div>
                  <div>
                    <button className="text-red-600 hover:text-red-800 transition">Sign out of all devices</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            Save Changes
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Settings Menu</h3>
          <ul className="space-y-2">
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'branding' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('branding')}
            >
              Branding
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'billing' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'integrations' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('integrations')}
            >
              Integrations
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'email-templates' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('email-templates')}
            >
              Email Templates
            </li>
            <li 
              className={`p-2 rounded cursor-pointer transition ${activeTab === 'terms' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab('terms')}
            >
              Terms & Privacy
            </li>
          </ul>
        </div>
        
        <div className="md:col-span-3 bg-white rounded-lg shadow p-4">
          {renderSettingsContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;