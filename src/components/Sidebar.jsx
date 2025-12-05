import React, { useState } from 'react';

const Sidebar = ({ selectedTense, onSelectTense }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    'Intermediate': false,
    'Intermediate-Vocabulary': false,
    'Intermediate-Grammar': false,
    'Intermediate-Writing': false,
    'Upper-Intermediate': true,
    'Upper-Intermediate-Grammar': false,
    'Upper-Intermediate-Writing': false,
    'Tiempos Verbales': true,
    'Present': true,
    'Past': false,
    'Future': false,
    'Conditionals': false,
    'Question Forms': false,
    'Mixed Practice': false,
    'Vocabulary': false,
    'Advanced': false,
    'Advanced-Writing': false,
    'Advanced-Vocabulary': false,
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
    { id: 'illnesses-injuries', name: 'Illnesses and Injuries' },
    { id: 'conflict-warfare', name: 'Conflict and Warfare' },
    { id: 'adjectives', name: 'Adjectives' }
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
        className="md:hidden fixed top-4 left-4 z-50 bg-htb-card text-htb-text p-2 rounded-lg hover:bg-htb-green hover:text-htb-bg transition-all"
      >
        <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-htb-sidebar text-htb-text transition-all duration-300 ease-in-out flex flex-col border-r border-gray-800`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-htb-green rounded flex items-center justify-center">
              <span className="text-htb-bg text-xl font-bold">E</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">English Learning</h1>
              <p className="text-xs text-htb-text-dim">Hacking Practice Platform</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {/* INTRODUCTION */}
          <div>
            <button
              onClick={() => onSelectTense('introduction')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTense === 'introduction'
                  ? 'bg-htb-green text-htb-bg'
                  : 'hover:bg-htb-card text-htb-text'
              }`}
            >
              <span>📖</span>
              <span>Introduction</span>
            </button>
          </div>

          {/* B1 INTERMEDIATE */}
          <div>
            <button
              onClick={() => toggleSection('Intermediate')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
            >
              <span className="text-htb-text">Intermediate B1</span>
              <svg className={`w-4 h-4 transition-transform ${expandedSections['Intermediate'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSections['Intermediate'] && (
              <div className="ml-3 mt-1 space-y-1">
                {/* Vocabulary B1 */}
                <button
                  onClick={() => toggleSection('Intermediate-Vocabulary')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Vocabulary</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Intermediate-Vocabulary'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Intermediate-Vocabulary'] && (
                  <div className="ml-3 space-y-0.5">
                    {['cinema', 'dependent-prepositions', 'education', 'food-cooking', 'houses', 'money', 'personality', 'relationships', 'sport', 'the-body', 'transport', 'word-building', 'work'].map((topic) => (
                      <button
                        key={topic}
                        onClick={() => onSelectTense(topic)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === topic
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        {topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </button>
                    ))}
                  </div>
                )}

                {/* Grammar B1 */}
                <button
                  onClick={() => toggleSection('Intermediate-Grammar')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Grammar</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Intermediate-Grammar'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Intermediate-Grammar'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('present-perfect-past-simple-2')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'present-perfect-past-simple-2'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Present Perfect & Past Simple (2)
                    </button>
                  </div>
                )}

                {/* Writing B1 */}
                <button
                  onClick={() => toggleSection('Intermediate-Writing')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Writing Skills</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Intermediate-Writing'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Intermediate-Writing'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('email-writing-b1')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'email-writing-b1'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Email Writing Examples
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* B2 UPPER-INTERMEDIATE */}
          <div>
            <button
              onClick={() => toggleSection('Upper-Intermediate')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
            >
              <span className="text-htb-text">Upper-Intermediate B2</span>
              <svg className={`w-4 h-4 transition-transform ${expandedSections['Upper-Intermediate'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSections['Upper-Intermediate'] && (
              <div className="ml-3 mt-1 space-y-1">
                {/* Tenses */}
                <button
                  onClick={() => toggleSection('Tiempos Verbales')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Tenses</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Tiempos Verbales'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Tiempos Verbales'] && (
                  <div className="ml-3 space-y-1">
                    {/* Present */}
                    <button
                      onClick={() => toggleSection('Present')}
                      className="w-full flex items-center justify-between px-3 py-1.5 rounded text-xs hover:bg-htb-card transition-colors"
                    >
                      <span className="text-htb-text-dim">Present</span>
                      <svg className={`w-3 h-3 transition-transform ${expandedSections['Present'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedSections['Present'] && (
                      <div className="ml-3 space-y-0.5">
                        {groupedTenses['Present']?.map((tense) => (
                          <button
                            key={tense.id}
                            onClick={() => onSelectTense(tense.id)}
                            className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                              selectedTense === tense.id
                                ? 'bg-htb-green text-htb-bg font-medium'
                                : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                            }`}
                          >
                            {tense.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Past */}
                    <button
                      onClick={() => toggleSection('Past')}
                      className="w-full flex items-center justify-between px-3 py-1.5 rounded text-xs hover:bg-htb-card transition-colors"
                    >
                      <span className="text-htb-text-dim">Past</span>
                      <svg className={`w-3 h-3 transition-transform ${expandedSections['Past'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedSections['Past'] && (
                      <div className="ml-3 space-y-0.5">
                        {groupedTenses['Past']?.map((tense) => (
                          <button
                            key={tense.id}
                            onClick={() => onSelectTense(tense.id)}
                            className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                              selectedTense === tense.id
                                ? 'bg-htb-green text-htb-bg font-medium'
                                : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                            }`}
                          >
                            {tense.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Future */}
                    <button
                      onClick={() => toggleSection('Future')}
                      className="w-full flex items-center justify-between px-3 py-1.5 rounded text-xs hover:bg-htb-card transition-colors"
                    >
                      <span className="text-htb-text-dim">Future</span>
                      <svg className={`w-3 h-3 transition-transform ${expandedSections['Future'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedSections['Future'] && (
                      <div className="ml-3 space-y-0.5">
                        {groupedTenses['Future']?.map((tense) => (
                          <button
                            key={tense.id}
                            onClick={() => onSelectTense(tense.id)}
                            className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                              selectedTense === tense.id
                                ? 'bg-htb-green text-htb-bg font-medium'
                                : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                            }`}
                          >
                            {tense.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Conditionals */}
                <button
                  onClick={() => toggleSection('Conditionals')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Conditionals</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Conditionals'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Conditionals'] && (
                  <div className="ml-3 space-y-0.5">
                    {groupedTenses['Conditionals']?.map((tense) => (
                      <button
                        key={tense.id}
                        onClick={() => onSelectTense(tense.id)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === tense.id
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        {tense.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* Other sections */}
                <button
                  onClick={() => toggleSection('Question Forms')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Question Forms</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Question Forms'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Question Forms'] && (
                  <div className="ml-3">
                    <button
                      onClick={() => onSelectTense('question-forms')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'question-forms'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Word Order in Questions
                    </button>
                  </div>
                )}

                <button
                  onClick={() => toggleSection('Mixed Practice')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Mixed Practice</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Mixed Practice'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Mixed Practice'] && (
                  <div className="ml-3">
                    <button
                      onClick={() => onSelectTense('mixed-tenses')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'mixed-tenses'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      All Tenses Mixed
                    </button>
                  </div>
                )}

                {/* Vocabulary B2 */}
                <button
                  onClick={() => toggleSection('Vocabulary')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Vocabulary</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Vocabulary'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Vocabulary'] && (
                  <div className="ml-3 space-y-0.5">
                    {vocabularyTopics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTense(topic.id)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === topic.id
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        {topic.name}
                      </button>
                    ))}
                    <button
                      onClick={() => onSelectTense('adverbs-phrases')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'adverbs-phrases'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Adverbs and Phrases
                    </button>
                    <button
                      onClick={() => onSelectTense('business')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'business'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Business
                    </button>
                  </div>
                )}

                {/* Grammar B1 */}
                <button
                  onClick={() => toggleSection('Intermediate-Grammar')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Grammar</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Intermediate-Grammar'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Intermediate-Grammar'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('confusing-adverbs')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'confusing-adverbs'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Confusing Adverbs
                    </button>
                    <button
                      onClick={() => onSelectTense('sentence-adverbs')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'sentence-adverbs'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Sentence Adverbs
                    </button>
                  </div>
                )}

                {/* Grammar B2 */}
                <button
                  onClick={() => toggleSection('Upper-Intermediate-Grammar')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Grammar</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Upper-Intermediate-Grammar'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Upper-Intermediate-Grammar'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('confusing-adverbs')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'confusing-adverbs'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Confusing Adverbs
                    </button>
                    <button
                      onClick={() => onSelectTense('sentence-adverbs')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'sentence-adverbs'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Sentence Adverbs
                    </button>
                  </div>
                )}

                {/* Writing B2 */}
                <button
                  onClick={() => toggleSection('Upper-Intermediate-Writing')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Writing Skills</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Upper-Intermediate-Writing'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Upper-Intermediate-Writing'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('email-writing-b2')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'email-writing-b2'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Email Writing Examples
                    </button>
                    <button
                      onClick={() => onSelectTense('story-telling-b2')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'story-telling-b2'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Story Telling Examples
                    </button>
                  </div>
                )}

                {/* Weather Exercise */}
                <button
                  onClick={() => toggleSection('Weather Exercise B1')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Weather Exercise</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Weather Exercise B1'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Weather Exercise B1'] && (
                  <div className="ml-3">
                    <button
                      onClick={() => onSelectTense('weather-match')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'weather-match'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Match Words & Definitions
                    </button>
                  </div>
                )}

                {/* Exams */}
                <button
                  onClick={() => toggleSection('Exam')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Exam</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Exam'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Exam'] && (
                  <div className="ml-3">
                    <button
                      onClick={() => onSelectTense('exam')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'exam'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Complete Exam
                    </button>
                  </div>
                )}

                <button
                  onClick={() => toggleSection('Exam 2')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Exam 2 - Cybersecurity</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Exam 2'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Exam 2'] && (
                  <div className="ml-3">
                    <button
                      onClick={() => onSelectTense('exam2')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'exam2'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Cybersecurity Exam
                    </button>
                  </div>
                )}

                <button
                  onClick={() => onSelectTense('exam3')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedTense === 'exam3'
                      ? 'bg-htb-green text-htb-bg font-medium'
                      : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                  }`}
                >
                  Final Exam
                </button>
              </div>
            )}
          </div>

          {/* ADVANCED C1 */}
          <div>
            <button
              onClick={() => toggleSection('Advanced')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
            >
              <span className="text-htb-text">Advanced C1</span>
              <svg className={`w-4 h-4 transition-transform ${expandedSections['Advanced'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSections['Advanced'] && (
              <div className="ml-3 mt-1 space-y-1">
                {/* Writing Skills */}
                <button
                  onClick={() => toggleSection('Advanced-Writing')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Writing Skills</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Advanced-Writing'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Advanced-Writing'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('managerial-reports')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'managerial-reports'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Managerial Reports
                    </button>
                  </div>
                )}

                {/* Vocabulary Advanced */}
                <button
                  onClick={() => toggleSection('Advanced-Vocabulary')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                >
                  <span className="text-htb-text-dim">Vocabulary</span>
                  <svg className={`w-3 h-3 transition-transform ${expandedSections['Advanced-Vocabulary'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSections['Advanced-Vocabulary'] && (
                  <div className="ml-3 space-y-0.5">
                    <button
                      onClick={() => onSelectTense('adjectives')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'adjectives'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Adjectives
                    </button>
                    <button
                      onClick={() => onSelectTense('conflict-warfare')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'conflict-warfare'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Conflict and Warfare
                    </button>
                    <button
                      onClick={() => onSelectTense('phones-technology')}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedTense === 'phones-technology'
                          ? 'bg-htb-green text-htb-bg font-medium'
                          : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                      }`}
                    >
                      Phones and Technology
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
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
