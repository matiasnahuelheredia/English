import React, { useState, useEffect } from 'react';

const isMobile = () => window.innerWidth < 768;

// Secciones de un nivel (Tenses, Grammar, Vocabulary, Mixed Practice)
const LevelSections = ({
  sections,
  expandedSections,
  toggleSection,
  selectedTense,
  onSelectTense,
}) =>
  sections.map((section) => (
    <div key={section.key}>
      <button
        onClick={() => toggleSection(section.key)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
      >
        <span>{section.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${
            expandedSections[section.key] ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {expandedSections[section.key] && (
        <div className="ml-4 space-y-1">
          {section.items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTense(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedTense === item.id
                  ? 'bg-htb-green text-htb-bg'
                  : 'hover:bg-htb-card text-htb-text-dim'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  ));

const A1_SECTIONS = [
  {
    key: 'Beginner-Tenses',
    label: '⏳ Tenses',
    items: [
      { id: 'present-simple-a1', name: 'Present Simple' },
      { id: 'present-continuous-a1', name: 'Present Continuous' },
      { id: 'past-simple-a1', name: 'Past Simple (was / were + verbs)' },
      { id: 'going-to-a1', name: 'Future: be going to' },
    ],
  },
  {
    key: 'Beginner-Grammar',
    label: '📝 Grammar',
    items: [
      { id: 'verb-be-a1', name: '1A Verb be (singular)' },
      { id: 'verb-be-all-a1', name: 'Verb be (all forms)' },
      { id: 'there-is-are-a1', name: 'There is / There are' },
      { id: 'can-a1', name: "Can / Can't" },
      { id: 'possessives-a1', name: "Possessives & 's" },
      { id: 'articles-plurals-a1', name: 'a / an & Plurals' },
      { id: 'demonstratives-a1', name: 'This / That / These / Those' },
      { id: 'prepositions-a1', name: 'Prepositions (place & time)' },
      { id: 'question-words-a1', name: 'Question words' },
    ],
  },
  {
    key: 'Beginner-Vocabulary',
    label: '📖 Vocabulary',
    items: [
      { id: 'numbers-a1', name: 'Numbers' },
      { id: 'colours-a1', name: 'Colours' },
      { id: 'family-a1', name: 'Family' },
      { id: 'days-months-a1', name: 'Days & Months' },
      { id: 'food-drinks-a1', name: 'Food & Drinks' },
      { id: 'jobs-a1', name: 'Jobs' },
      { id: 'house-a1', name: 'The House' },
      { id: 'daily-routine-a1', name: 'Daily Routine' },
    ],
  },
  {
    key: 'Beginner-Mixed',
    label: '🔀 Mixed Practice',
    items: [{ id: 'mixed-a1', name: 'All A1 topics mixed' }],
  },
];

const A2_SECTIONS = [
  {
    key: 'Elementary-Tenses',
    label: '⏳ Tenses',
    items: [
      { id: 'present-simple-continuous-a2', name: 'Present Simple vs Continuous' },
      { id: 'past-simple-a2', name: 'Past Simple (regular & irregular)' },
      { id: 'past-continuous-a2', name: 'Past Continuous' },
      { id: 'present-perfect-a2', name: 'Present Perfect' },
      { id: 'will-going-to-a2', name: 'Future: will vs going to' },
    ],
  },
  {
    key: 'Elementary-Grammar',
    label: '📝 Grammar',
    items: [
      { id: 'comparatives-a2', name: 'Comparatives' },
      { id: 'superlatives-a2', name: 'Superlatives' },
      { id: 'countable-uncountable-a2', name: 'Some / any / much / many' },
      { id: 'frequency-adverbs-a2', name: 'Adverbs of frequency' },
      { id: 'have-to-a2', name: "Have to / Don't have to / Must" },
      { id: 'should-a2', name: "Should / Shouldn't" },
      { id: 'object-pronouns-a2', name: 'Object pronouns' },
    ],
  },
  {
    key: 'Elementary-Vocabulary',
    label: '📖 Vocabulary',
    items: [
      { id: 'weather-a2', name: 'Weather' },
      { id: 'clothes-a2', name: 'Clothes' },
      { id: 'transport-a2', name: 'Transport' },
      { id: 'town-city-a2', name: 'Town & City' },
      { id: 'feelings-a2', name: 'Feelings' },
      { id: 'holidays-a2', name: 'Holidays & Travel' },
      { id: 'health-body-a2', name: 'Health & the Body' },
      { id: 'shopping-a2', name: 'Shopping' },
    ],
  },
  {
    key: 'Elementary-Mixed',
    label: '🔀 Mixed Practice',
    items: [{ id: 'mixed-a2', name: 'All A2 topics mixed' }],
  },
];

const C2_SECTIONS = [
  {
    key: 'Proficiency-Tenses',
    label: '⏳ Tenses & Aspect',
    items: [
      { id: 'future-in-the-past-c2', name: 'Future in the Past' },
      { id: 'perfect-aspects-c2', name: 'Perfect Aspects' },
    ],
  },
  {
    key: 'Proficiency-Grammar',
    label: '📝 Grammar',
    items: [
      { id: 'advanced-inversion-c2', name: 'Advanced Inversion' },
      { id: 'subjunctive-c2', name: 'The Subjunctive' },
      { id: 'cleft-sentences-c2', name: 'Cleft & Pseudo-cleft Sentences' },
      { id: 'participle-clauses-c2', name: 'Participle Clauses' },
      { id: 'advanced-conditionals-c2', name: 'Advanced & Mixed Conditionals' },
      { id: 'ellipsis-substitution-c2', name: 'Ellipsis & Substitution' },
    ],
  },
  {
    key: 'Proficiency-Vocabulary',
    label: '📖 Vocabulary',
    items: [
      { id: 'advanced-idioms-c2', name: 'Advanced Idioms' },
      { id: 'collocations-c2', name: 'Collocations' },
      { id: 'phrasal-verbs-c2', name: 'Advanced Phrasal Verbs' },
      { id: 'formal-language-c2', name: 'Formal & Academic Language' },
      { id: 'nuanced-synonyms-c2', name: 'Nuanced Synonyms' },
      { id: 'confusing-words-c2', name: 'Commonly Confused Words' },
    ],
  },
  {
    key: 'Proficiency-Mixed',
    label: '🔀 Mixed Practice',
    items: [{ id: 'mixed-c2', name: 'All C2 topics mixed' }],
  },
];

const Sidebar = ({ selectedTense, onSelectTense: selectTense }) => {
  // En el celular el menú arranca cerrado para no tapar el contenido
  const [isOpen, setIsOpen] = useState(() => !isMobile());

  // Al elegir un ejercicio en el celular, cerrar el menú
  const onSelectTense = (id) => {
    selectTense(id);
    if (isMobile()) setIsOpen(false);
  };
  const [searchQuery, setSearchQuery] = useState('');

  // Recuperar las secciones expandidas desde localStorage
  const [expandedSections, setExpandedSections] = useState(() => {
    const saved = localStorage.getItem('expandedSections');
    if (saved) {
      return JSON.parse(saved);
    }
    // Valores por defecto si no hay nada guardado
    return {
      Beginner: false,
      'Beginner-Grammar': false,
      'Beginner-Tenses': false,
      'Beginner-Vocabulary': false,
      'Beginner-Mixed': false,
      Elementary: false,
      'Elementary-Tenses': false,
      'Elementary-Grammar': false,
      'Elementary-Vocabulary': false,
      'Elementary-Mixed': false,
      Proficiency: false,
      'Proficiency-Tenses': false,
      'Proficiency-Grammar': false,
      'Proficiency-Vocabulary': false,
      'Proficiency-Mixed': false,
      Intermediate: false,
      'Intermediate-Vocabulary': false,
      'Intermediate-Grammar': false,
      'Upper-Intermediate-Grammar': false,
      'Intermediate-Writing': false,
      'Upper-Intermediate': true,
      'Upper-Intermediate-Writing': false,
      'Tiempos Verbales': true,
      Present: true,
      Past: false,
      Future: false,
      Conditionals: false,
      'Question Forms': false,
      'Mixed Practice': false,
      Vocabulary: false,
      Advanced: false,
      'Advanced-Writing': false,
      'Advanced-Vocabulary': false,
      'Advanced-Exams': false,
      'Weather Exercise': false,
      Exam: false,
      'Exam 2': false,
    };
  });

  // Guardar en localStorage cada vez que cambien las secciones expandidas
  useEffect(() => {
    localStorage.setItem('expandedSections', JSON.stringify(expandedSections));
  }, [expandedSections]);

  const tenses = [
    { id: 'present-simple', name: 'Present Simple', category: 'Present' },
    {
      id: 'present-continuous',
      name: 'Present Continuous',
      category: 'Present',
    },
    {
      id: 'present-simple-continuous-mix',
      name: 'Present Simple & Continuous Mix',
      category: 'Present',
    },
    { id: 'present-perfect', name: 'Present Perfect', category: 'Present' },
    {
      id: 'present-perfect-continuous',
      name: 'Present Perfect Continuous',
      category: 'Present',
    },

    { id: 'past-simple', name: 'Past Simple', category: 'Past' },
    { id: 'past-continuous', name: 'Past Continuous', category: 'Past' },
    { id: 'past-perfect', name: 'Past Perfect', category: 'Past' },
    {
      id: 'past-perfect-continuous',
      name: 'Past Perfect Continuous',
      category: 'Past',
    },

    { id: 'future-simple', name: 'Future Simple', category: 'Future' },
    { id: 'future-continuous', name: 'Future Continuous', category: 'Future' },
    { id: 'future-perfect', name: 'Future Perfect', category: 'Future' },
    {
      id: 'future-perfect-continuous',
      name: 'Future Perfect Continuous',
      category: 'Future',
    },

    {
      id: 'first-conditional',
      name: 'First Conditional',
      category: 'Conditionals',
    },
    {
      id: 'second-conditional',
      name: 'Second Conditional',
      category: 'Conditionals',
    },
    {
      id: 'third-conditional',
      name: 'Third Conditional',
      category: 'Conditionals',
    },
  ];

  const vocabularyTopics = [
    { id: 'clothes-fashion', name: 'Clothes and Fashion' },
    { id: 'airport', name: 'Airport' },
    { id: 'weather', name: 'Weather' },
    { id: 'illnesses-injuries', name: 'Illnesses and Injuries' },
    { id: 'conflict-warfare', name: 'Conflict and Warfare' },
    { id: 'adjectives', name: 'Adjectives' },
  ];

  const groupedTenses = tenses.reduce((acc, tense) => {
    if (!acc[tense.category]) {
      acc[tense.category] = [];
    }
    acc[tense.category].push(tense);
    return acc;
  }, {});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Helper function to check if an item matches search
  const matchesSearch = (text) => {
    if (!searchQuery) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Check if any child in a section matches search
  const sectionHasMatch = (items) => {
    if (!searchQuery) return true;
    return items.some((item) => matchesSearch(item.name || item));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition-all shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-htb-sidebar text-htb-text transition-all duration-300 ease-in-out flex flex-col border-r border-gray-800`}
      >
        {/* Header - Hidden on mobile */}
        <div className="hidden md:block p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-htb-green rounded flex items-center justify-center">
              <span className="text-htb-bg text-xl font-bold">E</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">
                English Learning
              </h1>
              <p className="text-xs text-htb-text-dim">
                Hacking Practice Platform
              </p>
            </div>
          </div>
        </div>

        {/* Mobile spacing to avoid overlap with close button */}
        <div className="md:hidden h-16"></div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {/* SEARCH BAR */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-htb-sidebar border border-gray-700 rounded-lg px-4 py-2 pl-10 text-sm text-white placeholder-htb-text-dim focus:outline-none focus:ring-2 focus:ring-htb-green focus:border-htb-green transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-htb-text-dim"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-htb-text-dim hover:text-htb-green transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* INTRODUCTION */}
          {(matchesSearch('Introduction') || matchesSearch('Offline')) && (
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
              <button
                onClick={() => onSelectTense('offline-mode')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTense === 'offline-mode'
                    ? 'bg-htb-green text-htb-bg'
                    : 'hover:bg-htb-card text-htb-text'
                }`}
              >
                <span>📴</span>
                <span>Offline mode</span>
              </button>
            </div>
          )}

          {/* A1 BEGINNER */}
          {(matchesSearch('Beginner') ||
            matchesSearch('Verb be') ||
            matchesSearch('A1') ||
            matchesSearch('Present Simple') ||
            matchesSearch('Numbers') ||
            matchesSearch('Family') ||
            matchesSearch('Colours')) && (
            <div>
              <button
                onClick={() => toggleSection('Beginner')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card text-htb-text transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌱</span>
                  <span>A1 - Beginner</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Beginner'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Beginner'] && (
                <div className="mt-1 ml-6 space-y-1">
                  <LevelSections
                    sections={A1_SECTIONS}
                    expandedSections={expandedSections}
                    toggleSection={toggleSection}
                    selectedTense={selectedTense}
                    onSelectTense={onSelectTense}
                  />
                </div>
              )}
            </div>
          )}

          {/* A2 ELEMENTARY */}
          {(matchesSearch('Elementary') ||
            matchesSearch('A2') ||
            matchesSearch('Comparatives') ||
            matchesSearch('Weather') ||
            matchesSearch('Shopping')) && (
            <div>
              <button
                onClick={() => toggleSection('Elementary')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card text-htb-text transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌾</span>
                  <span>A2 - Elementary</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Elementary'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Elementary'] && (
                <div className="mt-1 ml-6 space-y-1">
                  <LevelSections
                    sections={A2_SECTIONS}
                    expandedSections={expandedSections}
                    toggleSection={toggleSection}
                    selectedTense={selectedTense}
                    onSelectTense={onSelectTense}
                  />
                </div>
              )}
            </div>
          )}

          {/* B1 INTERMEDIATE */}
          {(matchesSearch('Intermediate') ||
            matchesSearch('B1') ||
            matchesSearch('Cinema') ||
            matchesSearch('Education') ||
            matchesSearch('Food') ||
            matchesSearch('Present Perfect') ||
            matchesSearch('Email Writing')) && (
            <div>
              <button
                onClick={() => toggleSection('Intermediate')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌿</span>
                  <span className="text-htb-text">Intermediate B1</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Intermediate'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Intermediate-Vocabulary']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Intermediate-Vocabulary'] && (
                    <div className="ml-3 space-y-0.5">
                      {[
                        'cinema',
                        'dependent-prepositions',
                        'education',
                        'food-cooking',
                        'houses',
                        'money',
                        'personality',
                        'relationships',
                        'sport',
                        'the-body',
                        'transport',
                        'word-building',
                        'work',
                      ].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => onSelectTense(topic)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === topic
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {topic
                            .split('-')
                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(' ')}
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Intermediate-Grammar']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Intermediate-Grammar'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() =>
                          onSelectTense('present-perfect-past-simple-2')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'present-perfect-past-simple-2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Present Perfect & Past Simple (2)
                      </button>
                      {[
                        { id: 'present-perfect-b1', name: 'Present Perfect' },
                        { id: 'past-simple-b1', name: 'Past Simple' },
                        { id: 'past-continuous-b1', name: 'Past Continuous' },
                        { id: 'past-perfect-b1', name: 'Past Perfect' },
                        {
                          id: 'narrative-tenses-b1',
                          name: 'Narrative Tenses (3 pasts)',
                        },
                      ].map((topic) => (
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
                    </div>
                  )}

                  {/* Writing B1 */}
                  <button
                    onClick={() => toggleSection('Intermediate-Writing')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Writing Skills</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Intermediate-Writing']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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

                  {/* Hacking Vocabulary B1 */}
                  <button
                    onClick={() => toggleSection('Intermediate-Hacking')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      🔒 Hacking Vocabulary
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Intermediate-Hacking']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Intermediate-Hacking'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() => onSelectTense('hacking')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'hacking'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Hacking Terms
                      </button>
                      {[
                        { id: 'pentest-findings', name: 'Web Pentest Findings' },
                        {
                          id: 'pentest-report',
                          name: 'Pentest Report Writing',
                        },
                      ].map((topic) => (
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
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* B2 UPPER-INTERMEDIATE */}
          {(matchesSearch('Upper') ||
            matchesSearch('Intermediate') ||
            matchesSearch('B2') ||
            matchesSearch('Present') ||
            matchesSearch('Past') ||
            matchesSearch('Future') ||
            matchesSearch('Conditional') ||
            matchesSearch('Tenses') ||
            matchesSearch('Email') ||
            matchesSearch('Story') ||
            matchesSearch('Job Interview')) && (
            <div>
              <button
                onClick={() => toggleSection('Upper-Intermediate')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌳</span>
                  <span className="text-htb-text">Upper-Intermediate B2</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Upper-Intermediate'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Tiempos Verbales'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            expandedSections['Present'] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
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
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            expandedSections['Past'] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
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
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            expandedSections['Future'] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Conditionals'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Question Forms'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Mixed Practice'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                      <button
                        onClick={() => onSelectTense('ai-tense-corrector')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'ai-tense-corrector'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        ✨ AI Tense Corrector
                      </button>
                    </div>
                  )}

                  {/* Vocabulary B2 */}
                  <button
                    onClick={() => toggleSection('Vocabulary')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Vocabulary</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Vocabulary'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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

                  {/* Grammar B2 */}
                  <button
                    onClick={() => toggleSection('Upper-Intermediate-Grammar')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Grammar</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Upper-Intermediate-Grammar']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                      {[
                        { id: 'passive-voice-b2', name: 'Passive Voice' },
                        { id: 'reported-speech-b2', name: 'Reported Speech' },
                        { id: 'used-to-b2', name: 'Used to / Be used to' },
                        { id: 'wish-if-only-b2', name: 'Wish / If only' },
                        { id: 'modals-deduction-b2', name: 'Modals of Deduction' },
                        {
                          id: 'gerunds-infinitives-b2',
                          name: 'Gerunds & Infinitives',
                        },
                      ].map((topic) => (
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
                    </div>
                  )}

                  {/* Writing B2 */}
                  <button
                    onClick={() => toggleSection('Upper-Intermediate-Writing')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Writing Skills</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Upper-Intermediate-Writing']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                      <button
                        onClick={() => onSelectTense('linking-words-b2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'linking-words-b2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Linking Words & Connectors
                      </button>
                    </div>
                  )}

                  {/* Speaking B2 */}
                  <button
                    onClick={() => toggleSection('Upper-Intermediate-Speaking')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Speaking Skills</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Upper-Intermediate-Speaking']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Upper-Intermediate-Speaking'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() => onSelectTense('talk-about-yourself-b2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'talk-about-yourself-b2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Talk About Yourself
                      </button>
                      <button
                        onClick={() => onSelectTense('personal-questions-b2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'personal-questions-b2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Personal Questions & Interview
                      </button>
                      <button
                        onClick={() => onSelectTense('picture-description-b2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'picture-description-b2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Picture Description
                      </button>
                      <button
                        onClick={() => onSelectTense('job-interview-b2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'job-interview-b2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Job Interview Practice
                      </button>
                    </div>
                  )}

                  {/* Weather Exercise */}
                  <button
                    onClick={() => toggleSection('Weather Exercise B1')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Weather Exercise</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Weather Exercise B1']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                    <span className="text-htb-text-dim">Complete Exams</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Exam'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                        Complete Exam 1
                      </button>
                      <button
                        onClick={() => onSelectTense('exam4')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam4'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Complete Exam 2
                      </button>
                      <button
                        onClick={() => onSelectTense('exam5')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam5'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Complete Exam 3
                      </button>
                      <button
                        onClick={() => onSelectTense('exam6')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam6'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Complete Exam 4
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => toggleSection('Exam 2')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      Exam 2 - Cybersecurity
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Exam 2'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
          )}

          {/* ADVANCED C1 */}
          {(matchesSearch('Advanced') ||
            matchesSearch('C1') ||
            matchesSearch('Managerial') ||
            matchesSearch('Adverbs') ||
            matchesSearch('Phones') ||
            matchesSearch('Technology')) && (
            <div>
              <button
                onClick={() => toggleSection('Advanced')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🚀</span>
                  <span className="text-htb-text">Advanced C1</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Advanced'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Advanced'] && (
                <div className="ml-3 mt-1 space-y-1">
                  {/* Grammar */}
                  <button
                    onClick={() => toggleSection('Advanced-Grammar')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Grammar</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Advanced-Grammar'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Advanced-Grammar'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() => onSelectTense('have-had-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'have-had-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Have, Have got & Had
                      </button>
                      <button
                        onClick={() => onSelectTense('linkers-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'linkers-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Discourse Markers - Linkers
                      </button>
                      <button
                        onClick={() => onSelectTense('pronouns-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'pronouns-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Pronouns
                      </button>
                      <button
                        onClick={() => onSelectTense('past-tenses-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'past-tenses-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        The Past: Habitual Events
                      </button>
                      <button
                        onClick={() => onSelectTense('get-verb-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'get-verb-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Get (verb)
                      </button>
                      <button
                        onClick={() => onSelectTense('discourse-markers-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'discourse-markers-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Discourse Markers
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('speculation-deduction-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'speculation-deduction-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Speculation & Deduction
                      </button>
                      <button
                        onClick={() => onSelectTense('inversion-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'inversion-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Inversion
                      </button>
                      <button
                        onClick={() => onSelectTense('distancing-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'distancing-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Distancing
                      </button>
                      <button
                        onClick={() => onSelectTense('unreal-past-tenses-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'unreal-past-tenses-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Unreal Past Tenses
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('verb-object-infinitive-gerund-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'verb-object-infinitive-gerund-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Verb + Object + Inf/Ger
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('conditional-sentences-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'conditional-sentences-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Conditional Sentences
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('permission-obligation-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'permission-obligation-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Permission & Obligation
                      </button>
                      <button
                        onClick={() => onSelectTense('verbs-senses-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'verbs-senses-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Verbs of the Senses
                      </button>
                      <button
                        onClick={() => onSelectTense('gerunds-infinitives-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'gerunds-infinitives-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Gerunds & Infinitives
                      </button>
                      <button
                        onClick={() => onSelectTense('future-plans-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'future-plans-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Future Plans & Arrangements
                      </button>
                      <button
                        onClick={() => onSelectTense('ellipsis-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'ellipsis-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Ellipsis
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('compound-possessive-nouns-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'compound-possessive-nouns-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Compound & Possessive Nouns
                      </button>
                      <button
                        onClick={() => onSelectTense('cleft-sentences-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'cleft-sentences-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Cleft Sentences
                      </button>
                      <button
                        onClick={() => onSelectTense('relative-clauses-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'relative-clauses-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Relative Clauses
                      </button>
                    </div>
                  )}

                  {/* Writing Skills */}
                  <button
                    onClick={() => toggleSection('Advanced-Writing')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Writing Skills</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Advanced-Writing'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Advanced-Vocabulary']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Advanced-Vocabulary'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() => onSelectTense('adjectives-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'adjectives-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Adjectives
                      </button>
                      <button
                        onClick={() => onSelectTense('idioms-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'idioms-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Idioms
                      </button>
                      <button
                        onClick={() => onSelectTense('work-vocabulary-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'work-vocabulary-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Work
                      </button>
                      <button
                        onClick={() => onSelectTense('phrasal-verbs-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'phrasal-verbs-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Phrasal Verbs
                      </button>
                      <button
                        onClick={() => onSelectTense('sounds-voice-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'sounds-voice-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Sounds and the Human Voice
                      </button>
                      <button
                        onClick={() => onSelectTense('time-expressions-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'time-expressions-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Time Expressions
                      </button>
                      <button
                        onClick={() => onSelectTense('prepositions-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'prepositions-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Prepositions
                      </button>
                      <button
                        onClick={() => onSelectTense('money-vocabulary-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'money-vocabulary-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Money
                      </button>
                      <button
                        onClick={() => onSelectTense('phones-technology-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'phones-technology-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Phones and Technology (New)
                      </button>
                      <button
                        onClick={() => onSelectTense('negative-prefixes-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'negative-prefixes-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Negative Prefixes
                      </button>
                      <button
                        onClick={() => onSelectTense('prefixes-meanings-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'prefixes-meanings-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Prefixes with Other Meanings
                      </button>
                      <button
                        onClick={() => onSelectTense('verbs-phrases-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'verbs-phrases-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Verbs and Verb Phrases
                      </button>
                      <button
                        onClick={() =>
                          onSelectTense('animals-birds-insects-c1')
                        }
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'animals-birds-insects-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Animals, Birds & Insects
                      </button>
                      <button
                        onClick={() => onSelectTense('animal-issues-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'animal-issues-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Animal Issues
                      </button>
                      <button
                        onClick={() => onSelectTense('expressions-idioms-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'expressions-idioms-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Expressions and Idioms
                      </button>
                      <button
                        onClick={() => onSelectTense('utensils-c1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'utensils-c1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Utensils
                      </button>
                      <button
                        onClick={() => onSelectTense('adjectives')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'adjectives'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        Adjectives (Old)
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

                  {/* C1 Exams */}
                  <button
                    onClick={() => toggleSection('Advanced-Exams')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      📝 C1 Complete Exams
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Advanced-Exams'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Advanced-Exams'] && (
                    <div className="ml-3 space-y-0.5">
                      <button
                        onClick={() => onSelectTense('exam-c1-1')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam-c1-1'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        C1 Complete Exam 1
                      </button>
                      <button
                        onClick={() => onSelectTense('exam-c1-2')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam-c1-2'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        C1 Complete Exam 2
                      </button>
                      <button
                        onClick={() => onSelectTense('exam-c1-3')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam-c1-3'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        C1 Complete Exam 3
                      </button>
                      <button
                        onClick={() => onSelectTense('exam-c1-4')}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                          selectedTense === 'exam-c1-4'
                            ? 'bg-htb-green text-htb-bg font-medium'
                            : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                        }`}
                      >
                        C1 Complete Exam 4
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* C2 PROFICIENCY */}
          {(matchesSearch('Proficiency') ||
            matchesSearch('C2') ||
            matchesSearch('Subjunctive') ||
            matchesSearch('Idioms') ||
            matchesSearch('Collocations')) && (
            <div>
              <button
                onClick={() => toggleSection('Proficiency')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card text-htb-text transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>👑</span>
                  <span>C2 - Proficiency</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Proficiency'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Proficiency'] && (
                <div className="mt-1 ml-6 space-y-1">
                  <LevelSections
                    sections={C2_SECTIONS}
                    expandedSections={expandedSections}
                    toggleSection={toggleSection}
                    selectedTense={selectedTense}
                    onSelectTense={onSelectTense}
                  />
                </div>
              )}
            </div>
          )}
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
