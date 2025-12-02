import React, { useState } from 'react';

const Sidebar = ({ selectedTense, onSelectTense }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    'Intermediate': false,
    'Intermediate-Vocabulary': false,
    'Upper-Intermediate': true,
    'Tiempos Verbales': true,
    'Present': true,
    'Past': false,
    'Future': false,
    'Conditionals': false,
    'Question Forms': false,
    'Mixed Practice': false,
    'Vocabulary': false,
    'Weather Exercise': false,
    'Exam': false,
    'Exam 2': false
  });

  const tenses = [
    { id: 'present-simple', name: 'Present Simple', category: 'Present' },
    { id: 'present-continuous', name: 'Present Continuous', category: 'Present' },
    { id: 'present-simple-continuous-mix', name: 'Present Simple & Continuous Mix', category: 'Present' },
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
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          {isOpen ? '✕' : '☰'}
        </span>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-500 ease-in-out flex flex-col shadow-2xl`}
      >
        <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-blue-900 to-blue-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">English Learning</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Sección: Intermediate */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Intermediate')}
              className="w-full flex items-center justify-between text-xs font-semibold text-green-400 uppercase tracking-wider hover:text-green-300 hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group border-2 border-green-600"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">📗 Intermediate B1</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Intermediate'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Intermediate'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-1 mt-2 space-y-2">
          
          {/* Sección: Vocabulary - Intermediate */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Intermediate-Vocabulary')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Vocabulary</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Intermediate-Vocabulary'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Intermediate-Vocabulary'] ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('cinema')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'cinema'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🎬 Cinema
                </button>
                <button
                  onClick={() => onSelectTense('dependent-prepositions')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'dependent-prepositions'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🔗 Dependent Prepositions
                </button>
                <button
                  onClick={() => onSelectTense('education')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'education'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🎓 Education
                </button>
                <button
                  onClick={() => onSelectTense('food-cooking')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'food-cooking'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🍳 Food and Cooking
                </button>
                <button
                  onClick={() => onSelectTense('houses')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'houses'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🏠 Houses
                </button>
                <button
                  onClick={() => onSelectTense('money')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'money'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  💰 Money
                </button>
                <button
                  onClick={() => onSelectTense('personality')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'personality'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  😊 Personality
                </button>
                <button
                  onClick={() => onSelectTense('relationships')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'relationships'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  👥 Relationships
                </button>
                <button
                  onClick={() => onSelectTense('sport')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'sport'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  ⚽ Sport
                </button>
                <button
                  onClick={() => onSelectTense('the-body')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'the-body'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  👤 The Body
                </button>
                <button
                  onClick={() => onSelectTense('transport')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'transport'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🚌 Transport
                </button>
                <button
                  onClick={() => onSelectTense('word-building')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'word-building'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  🔤 Word Building
                </button>
                <button
                  onClick={() => onSelectTense('work')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'work'
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  💼 Work
                </button>
              </div>
            </div>
          </div>
              
              </div>
            </div>
          </div>
          {/* Fin de Intermediate */}
          
          {/* Sección principal: Upper-Intermediate */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Upper-Intermediate')}
              className="w-full flex items-center justify-between text-xs font-semibold text-yellow-400 uppercase tracking-wider hover:text-yellow-300 hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group border-2 border-yellow-600"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">🎯 Upper-Intermediate B2</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Upper-Intermediate'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Upper-Intermediate'] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-1 mt-2 space-y-2">
          
          {/* Sección: Tiempos Verbales */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Tiempos Verbales')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Tiempos Verbales</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Tiempos Verbales'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Tiempos Verbales'] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-2 mt-2 space-y-2">
                {/* Present */}
                <div>
                  <button
                    onClick={() => toggleSection('Present')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-all duration-300 py-1 px-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Present</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Present'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Present'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Present']?.map((tense, index) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          style={{ animationDelay: `${index * 50}ms` }}
                          className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                            selectedTense === tense.id
                              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Past */}
                <div>
                  <button
                    onClick={() => toggleSection('Past')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-all duration-300 py-1 px-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Past</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Past'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Past'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Past']?.map((tense, index) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          style={{ animationDelay: `${index * 50}ms` }}
                          className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                            selectedTense === tense.id
                              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Future */}
                <div>
                  <button
                    onClick={() => toggleSection('Future')}
                    className="w-full flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-all duration-300 py-1 px-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Future</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Future'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Future'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Future']?.map((tense, index) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          style={{ animationDelay: `${index * 50}ms` }}
                          className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                            selectedTense === tense.id
                              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Conditionals */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Conditionals')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Conditionals</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Conditionals'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Conditionals'] ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                {groupedTenses['Conditionals']?.map((tense, index) => (
                  <button
                    key={tense.id}
                    onClick={() => onSelectTense(tense.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                      selectedTense === tense.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {tense.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sección: Question Forms */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Question Forms')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Question Forms</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Question Forms'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Question Forms'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('question-forms')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'question-forms'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Word Order in Questions
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Mixed Practice */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Mixed Practice')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Mixed Practice</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Mixed Practice'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Mixed Practice'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('mixed-tenses')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'mixed-tenses'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  All Tenses Mixed
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Vocabulary */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Vocabulary')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Vocabulary</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Vocabulary'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Vocabulary'] ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                {vocabularyTopics.map((topic, index) => (
                  <button
                    key={topic.id}
                    onClick={() => onSelectTense(topic.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                      selectedTense === topic.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {topic.name}
                  </button>
                ))}
                <button
                  onClick={() => onSelectTense('adverbs-phrases')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'adverbs-phrases'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  💬 Adverbs and Phrases
                </button>
                <button
                  onClick={() => onSelectTense('business')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'business'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  💼 Business
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Weather Exercise */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Weather Exercise')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Weather Exercise</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Weather Exercise'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Weather Exercise'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('weather-match')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'weather-match'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Match Words & Definitions
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Exam */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Exam')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">📝 Exam</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Exam'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Exam'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('exam')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'exam'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Complete Exam
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Exam 2 - Cybersecurity */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Exam 2')}
              className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 py-2 px-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">🔐 Exam 2 - Cybersecurity</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Exam 2'] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Exam 2'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('exam2')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg animate-fadeIn ${
                    selectedTense === 'exam2'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Cybersecurity Exam
                </button>
              </div>
            </div>
          </div>
              
              </div>
            </div>
          </div>
          {/* Fin de Upper-Intermediate */}
          
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
