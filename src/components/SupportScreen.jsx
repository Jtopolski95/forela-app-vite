import React, { useState } from 'react';
import { Menu as MenuIcon, Heart, Activity, TrendingUp, Clock } from 'lucide-react';

const SupportScreen = ({ openDrawer }) => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [symptomIntensity, setSymptomIntensity] = useState(3);

  const symptoms = [
    { id: 'fatigue', label: 'Fatigue', icon: <Activity size={20} /> },
    { id: 'anxiety', label: 'Anxiety', icon: <Heart size={20} /> },
    { id: 'pain', label: 'Pain', icon: <TrendingUp size={20} /> },
    { id: 'sleep', label: 'Sleep Issues', icon: <Clock size={20} /> }
  ];

  const handleSymptomSelect = (symptom) => {
    setSelectedSymptom(symptom);
    setSymptomIntensity(3);
  };

  const handleIntensityChange = (value) => {
    setSymptomIntensity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add symptom tracking logic here
    console.log('Symptom tracked:', {
      symptom: selectedSymptom,
      intensity: symptomIntensity,
      timestamp: new Date().toISOString()
    });
    setSelectedSymptom(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Support</h1>
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MenuIcon size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Symptom Tracking */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Track Your Symptoms
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {symptoms.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => handleSymptomSelect(symptom)}
                  className={`p-4 rounded-lg border ${
                    selectedSymptom?.id === symptom.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {symptom.icon}
                    <span className="text-gray-900">{symptom.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Intensity Selection */}
          {selectedSymptom && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                How intense is your {selectedSymptom.label.toLowerCase()}?
              </h3>
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleIntensityChange(value)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      symptomIntensity === value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Track Symptom
              </button>
            </div>
          )}

          {/* Support Resources */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Support Resources
            </h2>
            <div className="space-y-4">
              <a
                href="#"
                className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  Emergency Contacts
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Access emergency support numbers and resources
                </p>
              </a>
              <a
                href="#"
                className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  Support Groups
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Find local and online support groups
                </p>
              </a>
              <a
                href="#"
                className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  Professional Help
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Connect with healthcare professionals
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportScreen; 