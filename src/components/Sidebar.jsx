import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ selectedTense, onSelectTense }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    'Tiempos Verbales': true,
    'Present': true,
    'Past': false,
    'Future': false,
    'Conditionals': false,
    'Question Forms': false,
    'Mixed Practice': false,
    'Vocabulary': false
  });
  const { user, logout } = useAuth();

  const tenses = [
    { id: 'present-simple', name: 'Present Simple', category: 'Present' },
    { id: 'present-continuous', name: 'Present Continuous', category: 'Present' },
    { id: 'present-perfect', name: 'Present Perfect', category: 'Present' },
    { id: 'present-perfect-continuous', name: 'Present Perfect Continuous', category: 'Present' },
    
    { id: 'past-simple', name: 'Past Simple', category: 'Past' },
    { id: 'past-continuous', name: 'Past Continuous', category: 'Past' },
    { id: 'past-perfect', name: 'Past Perfect', category: 'Past' },
    { id: 'past-perfect-continuous', name: 'Past Perfect Continuous', category: 'Past' },
    
    { id: 'future-simple', name: 'Future Simple', category: 'Future' },
    { id: 'future-continuous', name: 'Future Continuous', category: 'Future' },
    { id: 'future-perfect', name: 'Future Perfect', category: 'Future' },
    { id: 'future-perfect-continuous', name: 'Future Perfect Continuous', category: 'Future' },
    
    { id: 'first-conditional', name: 'First Conditional', category: 'Conditionals' },
    { id: 'second-conditional', name: 'Second Conditional', category: 'Conditionals' },
    { id: 'third-conditional', name: 'Third Conditional', category: 'Conditionals' },
  ];

  const vocabularyTopics = [
    { id: 'clothes-fashion', name: 'Clothes and Fashion' },
    { id: 'airport', name: 'Airport' },
    { id: 'weather', name: 'Weather' },
    { id: 'illnesses-injuries', name: 'Illnesses and Injuries' }
  ];

  const groupedTenses = tenses.reduce((acc, tense) => {
    if (!acc[tense.category]) {
      acc[tense.category] = [];
    }
    acc[tense.category].push(tense);
    return acc;
  }, {});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold mb-2">English Learning</h1>
          <p className="text-sm text-gray-400">Bienvenido, {user?.name}!</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Sección principal: Tiempos Verbales */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Tiempos Verbales')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-200 transition-colors py-2"
            >
              <span>Tiempos Verbales</span>
              <span className="text-lg">{expandedSections['Tiempos Verbales'] ? '▼' : '▶'}</span>
            </button>

            {expandedSections['Tiempos Verbales'] && (
              <div className="ml-2 mt-2 space-y-2">
                {/* Present */}
                <div>
                  <button
                    onClick={() => toggleSection('Present')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1"
                  >
                    <span>Present</span>
                    <span className="text-sm">{expandedSections['Present'] ? '▼' : '▶'}</span>
                  </button>
                  {expandedSections['Present'] && (
                    <div className="ml-3 mt-1">
                      {groupedTenses['Present']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Past */}
                <div>
                  <button
                    onClick={() => toggleSection('Past')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1"
                  >
                    <span>Past</span>
                    <span className="text-sm">{expandedSections['Past'] ? '▼' : '▶'}</span>
                  </button>
                  {expandedSections['Past'] && (
                    <div className="ml-3 mt-1">
                      {groupedTenses['Past']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Future */}
                <div>
                  <button
                    onClick={() => toggleSection('Future')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1"
                  >
                    <span>Future</span>
                    <span className="text-sm">{expandedSections['Future'] ? '▼' : '▶'}</span>
                  </button>
                  {expandedSections['Future'] && (
                    <div className="ml-3 mt-1">
                      {groupedTenses['Future']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sección: Conditionals */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Conditionals')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-200 transition-colors py-2"
            >
              <span>Conditionals</span>
              <span className="text-lg">{expandedSections['Conditionals'] ? '▼' : '▶'}</span>
            </button>

            {expandedSections['Conditionals'] && (
              <div className="ml-3 mt-1">
                {groupedTenses['Conditionals']?.map((tense) => (
                  <button
                    key={tense.id}
                    onClick={() => onSelectTense(tense.id)}
                    className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                      selectedTense === tense.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {tense.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sección: Question Forms */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Question Forms')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-200 transition-colors py-2"
            >
              <span>Question Forms</span>
              <span className="text-lg">{expandedSections['Question Forms'] ? '▼' : '▶'}</span>
            </button>

            {expandedSections['Question Forms'] && (
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('question-forms')}
                  className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                    selectedTense === 'question-forms'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Word Order in Questions
                </button>
              </div>
            )}
          </div>

          {/* Sección: Mixed Practice */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Mixed Practice')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-200 transition-colors py-2"
            >
              <span>Mixed Practice</span>
              <span className="text-lg">{expandedSections['Mixed Practice'] ? '▼' : '▶'}</span>
            </button>

            {expandedSections['Mixed Practice'] && (
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('mixed-tenses')}
                  className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                    selectedTense === 'mixed-tenses'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  All Tenses Mixed
                </button>
              </div>
            )}
          </div>

          {/* Sección: Vocabulary */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Vocabulary')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-200 transition-colors py-2"
            >
              <span>Vocabulary</span>
              <span className="text-lg">{expandedSections['Vocabulary'] ? '▼' : '▶'}</span>
            </button>

            {expandedSections['Vocabulary'] && (
              <div className="ml-3 mt-1">
                {vocabularyTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => onSelectTense(topic.id)}
                    className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                      selectedTense === topic.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
