// File path: /home/arif/project/Fitness/src/pages/WorkoutBuilder.js
import React, { useState } from 'react';

const WorkoutBuilder = () => {
  // Dummy data for exercise library
  const exerciseLibrary = [
    { id: 1, name: 'Barbell Squat', category: 'Lower Body', equipment: 'Barbell' },
    { id: 2, name: 'Push-up', category: 'Chest', equipment: 'Bodyweight' },
    { id: 3, name: 'Dumbbell Row', category: 'Back', equipment: 'Dumbbells' },
    { id: 4, name: 'Plank', category: 'Core', equipment: 'Bodyweight' },
    { id: 5, name: 'Bench Press', category: 'Chest', equipment: 'Barbell' },
    { id: 6, name: 'Deadlift', category: 'Lower Body', equipment: 'Barbell' },
    { id: 7, name: 'Pull-up', category: 'Back', equipment: 'Bodyweight' },
    { id: 8, name: 'Lunge', category: 'Lower Body', equipment: 'Bodyweight' },
  ];
  
  // State for the current workout being built
  const [workoutName, setWorkoutName] = useState('Full Body Strength - Beginner');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([
    { 
      id: 1, 
      exercise: exerciseLibrary[0], 
      sets: 3, 
      reps: 10, 
      weight: '', 
      rest: '60s',
      notes: 'Focus on form and depth' 
    },
    { 
      id: 2, 
      exercise: exerciseLibrary[1], 
      sets: 3, 
      reps: 12, 
      weight: '', 
      rest: '45s',
      notes: 'Slow and controlled movement' 
    }
  ]);
  
  // Filter exercises based on search
  const filteredExercises = exerciseLibrary.filter(exercise => 
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Add exercise to workout
  const addExercise = (exercise) => {
    const newExercise = {
      id: Date.now(),
      exercise,
      sets: 3,
      reps: 10,
      weight: '',
      rest: '60s',
      notes: ''
    };
    setSelectedExercises([...selectedExercises, newExercise]);
  };
  
  // Remove exercise from workout
  const removeExercise = (id) => {
    setSelectedExercises(selectedExercises.filter(ex => ex.id !== id));
  };
  
  // Update exercise details
  const updateExercise = (id, field, value) => {
    setSelectedExercises(selectedExercises.map(ex => 
      ex.id === id ? { ...ex, [field]: value } : ex
    ));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Workout Builder</h2>
        <div>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 transition">
            Save as Template
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition">
            Create Workout
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Exercise Library */}
        <div className="md:col-span-1 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Exercise Library</h3>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search exercises..." 
              className="w-full px-3 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="overflow-y-auto max-h-[600px]">
            <div className="space-y-3">
              {filteredExercises.map(exercise => (
                <div 
                  key={exercise.id} 
                  className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition cursor-pointer"
                >
                  <div>
                    <p className="font-medium">{exercise.name}</p>
                    <p className="text-sm text-gray-500">{exercise.category} • {exercise.equipment}</p>
                  </div>
                  <button 
                    className="text-indigo-600 hover:text-indigo-800 transition"
                    onClick={() => addExercise(exercise)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Workout Builder */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Workout Name</label>
            <input 
              type="text" 
              placeholder="Enter workout name" 
              className="w-full px-3 py-2 border rounded-lg"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            />
          </div>
          
          <h3 className="text-lg font-medium mb-4">Workout Schedule</h3>
          
          <div className="space-y-4 mb-4">
            {selectedExercises.map((ex, index) => (
              <div key={ex.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">{ex.exercise.name}</h4>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 transition">⬆️</button>
                    <button className="text-gray-400 hover:text-gray-600 transition">⬇️</button>
                    <button 
                      className="text-red-400 hover:text-red-600 transition"
                      onClick={() => removeExercise(ex.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Sets</label>
                    <input 
                      type="number" 
                      value={ex.sets} 
                      onChange={(e) => updateExercise(ex.id, 'sets', e.target.value)}
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Reps</label>
                    <input 
                      type="number" 
                      value={ex.reps} 
                      onChange={(e) => updateExercise(ex.id, 'reps', e.target.value)}
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Weight</label>
                    <input 
                      type="text" 
                      placeholder="kg/lbs" 
                      value={ex.weight} 
                      onChange={(e) => updateExercise(ex.id, 'weight', e.target.value)}
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Rest</label>
                    <input 
                      type="text" 
                      value={ex.rest} 
                      onChange={(e) => updateExercise(ex.id, 'rest', e.target.value)}
                      className="w-full p-2 border rounded" 
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs text-gray-500 mb-1">Notes</label>
                  <textarea 
                    value={ex.notes}
                    onChange={(e) => updateExercise(ex.id, 'notes', e.target.value)}
                    className="w-full p-2 border rounded" 
                    placeholder="Add notes here..."
                    rows="2"
                  ></textarea>
                </div>
              </div>
            ))}
            
            <button 
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:text-gray-700 hover:border-gray-400 transition"
              onClick={() => addExercise(exerciseLibrary[Math.floor(Math.random() * exerciseLibrary.length)])}
            >
              + Add Exercise
            </button>
          </div>
          
          {/* Workout Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Workout Summary</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <div className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-lg">
                {selectedExercises.length} Exercises
              </div>
              <div className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-lg">
                {selectedExercises.reduce((sum, ex) => sum + parseInt(ex.sets), 0)} Total Sets
              </div>
              <div className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-lg">
                Estimated Time: {Math.ceil(selectedExercises.length * 5)} min
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutBuilder;