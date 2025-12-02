import React, { useState } from 'react';

const Sidebar = ({ selectedTense, onSelectTense }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    'Intermediate': false,
    'Intermediate-Vocabulary': false,
    'Intermediate-Grammar': false,
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
    { id: 'present-simple', name: 'present_simple', category: 'Present' },
    { id: 'present-continuous', name: 'present_continuous', category: 'Present' },
    { id: 'present-simple-continuous-mix', name: 'present_mix', category: 'Present' },
    { id: 'present-perfect', name: 'present_perfect', category: 'Present' },
    { id: 'present-perfect-continuous', name: 'present_perfect_cont', category: 'Present' },
    
    { id: 'past-simple', name: 'past_simple', category: 'Past' },
    { id: 'past-continuous', name: 'past_continuous', category: 'Past' },
    { id: 'past-perfect', name: 'past_perfect', category: 'Past' },
    { id: 'past-perfect-continuous', name: 'past_perfect_cont', category: 'Past' },
    
    { id: 'future-simple', name: 'future_simple', category: 'Future' },
    { id: 'future-continuous', name: 'future_continuous', category: 'Future' },
    { id: 'future-perfect', name: 'future_perfect', category: 'Future' },
    { id: 'future-perfect-continuous', name: 'future_perfect_cont', category: 'Future' },
    
    { id: 'first-conditional', name: 'conditional_1st', category: 'Conditionals' },
    { id: 'second-conditional', name: 'conditional_2nd', category: 'Conditionals' },
    { id: 'third-conditional', name: 'conditional_3rd', category: 'Conditionals' },
  ];

  const vocabularyTopics = [
    { id: 'clothes-fashion', name: 'clothes_fashion' },
    { id: 'airport', name: 'airport' },
    { id: 'weather', name: 'weather' },
    { id: 'illnesses-injuries', name: 'illnesses_injuries' }
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

  const htbButton = "w-full text-left px-3 py-2 rounded-lg mb-1 text-sm font-mono transition-all duration-300 transform hover:translate-x-2 hover:shadow-neon-green animate-fadeIn";
  const htbButtonActive = "bg-htb-green text-htb-dark shadow-neon-green scale-105 font-bold";
  const htbButtonInactive = "text-htb-green/70 hover:bg-htb-gray-dark hover:text-htb-green border border-htb-green/20";

  const htbButtonCyan = "w-full text-left px-3 py-2 rounded-lg mb-1 text-sm font-mono transition-all duration-300 transform hover:translate-x-2 hover:shadow-neon-cyan animate-fadeIn";
  const htbButtonCyanActive = "bg-htb-cyan text-htb-dark shadow-neon-cyan scale-105 font-bold";
  const htbButtonCyanInactive = "text-htb-cyan/70 hover:bg-htb-gray-dark hover:text-htb-cyan border border-htb-cyan/20";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-htb-dark border border-htb-green text-htb-green p-2 rounded-md shadow-neon-green hover:bg-htb-green hover:text-htb-dark hover:scale-110 active:scale-95 transition-all duration-200 font-mono"
      >
        <span className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          {isOpen ? '[X]' : '[≡]'}
        </span>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-htb-darker text-htb-green transition-all duration-500 ease-in-out flex flex-col border-r border-htb-green/30 shadow-neon-green`}
      >
        <div className="p-4 border-b border-htb-green/30 bg-htb-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="scanline"></div>
          </div>
          <h1 className="text-xl font-bold font-hack terminal-text relative z-10">
            <span className="text-htb-green">&gt;_</span> ENGLISH.LEARN
          </h1>
          <p className="text-xs text-htb-green/60 font-mono mt-1">// HTB Academy v1.0</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* B1 INTERMEDIATE */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Intermediate')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-green uppercase tracking-wider hover:text-htb-dark hover:bg-htb-green rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-green/50 neon-border"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">[B1] INTERMEDIATE</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Intermediate'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Intermediate'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-1 mt-2 space-y-2">
          
          {/* Vocabulary B1 */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Intermediate-Vocabulary')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-green/80 uppercase tracking-wider hover:text-htb-green hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-green/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ vocabulary</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Intermediate-Vocabulary'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Intermediate-Vocabulary'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                {['cinema', 'dependent-prepositions', 'education', 'food-cooking', 'houses', 'money', 'personality', 'relationships', 'sport', 'the-body', 'transport', 'word-building', 'work'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => onSelectTense(topic)}
                    className={`${htbButton} ${selectedTense === topic ? htbButtonActive : htbButtonInactive}`}
                  >
                    &gt; {topic.replace('-', '_')}.vocab
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grammar B1 */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Intermediate-Grammar')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-green/80 uppercase tracking-wider hover:text-htb-green hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-green/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ grammar</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Intermediate-Grammar'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Intermediate-Grammar'] ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('present-perfect-past-simple-2')}
                  className={`${htbButton} ${selectedTense === 'present-perfect-past-simple-2' ? htbButtonActive : htbButtonInactive}`}
                >
                  &gt; perfect_vs_simple.exe
                </button>
              </div>
            </div>
          </div>
              
              </div>
            </div>
          </div>

          {/* B2 UPPER-INTERMEDIATE */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Upper-Intermediate')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan uppercase tracking-wider hover:text-htb-dark hover:bg-htb-cyan rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/50 neon-border"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">[B2] UPPER-INTERMEDIATE</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Upper-Intermediate'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Upper-Intermediate'] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-1 mt-2 space-y-2">
          
          {/* Tenses B2 */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Tiempos Verbales')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ tenses</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Tiempos Verbales'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Tiempos Verbales'] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-2 mt-2 space-y-2">
                {/* Present */}
                <div>
                  <button
                    onClick={() => toggleSection('Present')}
                    className="w-full flex items-center justify-between text-sm font-semibold font-mono text-htb-cyan/70 hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-1 px-2 group border border-htb-cyan/20"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">./present</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Present'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Present'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Present']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`${htbButtonCyan} ${selectedTense === tense.id ? htbButtonCyanActive : htbButtonCyanInactive}`}
                        >
                          &gt; {tense.name}.sh
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Past */}
                <div>
                  <button
                    onClick={() => toggleSection('Past')}
                    className="w-full flex items-center justify-between text-sm font-semibold font-mono text-htb-cyan/70 hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-1 px-2 group border border-htb-cyan/20"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">./past</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Past'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Past'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Past']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`${htbButtonCyan} ${selectedTense === tense.id ? htbButtonCyanActive : htbButtonCyanInactive}`}
                        >
                          &gt; {tense.name}.sh
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Future */}
                <div>
                  <button
                    onClick={() => toggleSection('Future')}
                    className="w-full flex items-center justify-between text-sm font-semibold font-mono text-htb-cyan/70 hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-1 px-2 group border border-htb-cyan/20"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">./future</span>
                    <span className={`text-sm transition-transform duration-500 ${expandedSections['Future'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Future'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-3 mt-1">
                      {groupedTenses['Future']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`${htbButtonCyan} ${selectedTense === tense.id ? htbButtonCyanActive : htbButtonCyanInactive}`}
                        >
                          &gt; {tense.name}.sh
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conditionals */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Conditionals')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ conditionals</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Conditionals'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Conditionals'] ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                {groupedTenses['Conditionals']?.map((tense) => (
                  <button
                    key={tense.id}
                    onClick={() => onSelectTense(tense.id)}
                    className={`${htbButtonCyan} ${selectedTense === tense.id ? htbButtonCyanActive : htbButtonCyanInactive}`}
                  >
                    &gt; {tense.name}.sh
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Question Forms */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Question Forms')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ questions</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Question Forms'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Question Forms'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('question-forms')}
                  className={`${htbButtonCyan} ${selectedTense === 'question-forms' ? htbButtonCyanActive : htbButtonCyanInactive}`}
                >
                  &gt; word_order.sh
                </button>
              </div>
            </div>
          </div>

          {/* Mixed Practice */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Mixed Practice')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ mixed</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Mixed Practice'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Mixed Practice'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('mixed-tenses')}
                  className={`${htbButtonCyan} ${selectedTense === 'mixed-tenses' ? htbButtonCyanActive : htbButtonCyanInactive}`}
                >
                  &gt; all_tenses.sh
                </button>
              </div>
            </div>
          </div>

          {/* Vocabulary B2 */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Vocabulary')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ vocabulary</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Vocabulary'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Vocabulary'] ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                {vocabularyTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => onSelectTense(topic.id)}
                    className={`${htbButtonCyan} ${selectedTense === topic.id ? htbButtonCyanActive : htbButtonCyanInactive}`}
                  >
                    &gt; {topic.name}.vocab
                  </button>
                ))}
                <button
                  onClick={() => onSelectTense('adverbs-phrases')}
                  className={`${htbButtonCyan} ${selectedTense === 'adverbs-phrases' ? htbButtonCyanActive : htbButtonCyanInactive}`}
                >
                  &gt; adverbs_phrases.vocab
                </button>
                <button
                  onClick={() => onSelectTense('business')}
                  className={`${htbButtonCyan} ${selectedTense === 'business' ? htbButtonCyanActive : htbButtonCyanInactive}`}
                >
                  &gt; business.vocab
                </button>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Weather Exercise')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-cyan/80 uppercase tracking-wider hover:text-htb-cyan hover:bg-htb-gray-dark rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-cyan/30"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">$ weather</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Weather Exercise'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Weather Exercise'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('weather-match')}
                  className={`${htbButtonCyan} ${selectedTense === 'weather-match' ? htbButtonCyanActive : htbButtonCyanInactive}`}
                >
                  &gt; match_words.sh
                </button>
              </div>
            </div>
          </div>

          {/* Exams */}
          <div className="mb-2">
            <button
              onClick={() => toggleSection('Exam')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-purple uppercase tracking-wider hover:text-htb-dark hover:bg-htb-purple rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-purple/50"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">[!] EXAM</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Exam'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Exam'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('exam')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm font-mono transition-all duration-300 transform hover:translate-x-2 hover:shadow-neon-purple animate-fadeIn ${
                    selectedTense === 'exam'
                      ? 'bg-htb-purple text-htb-dark shadow-neon-purple scale-105 font-bold'
                      : 'text-htb-purple/70 hover:bg-htb-gray-dark hover:text-htb-purple border border-htb-purple/20'
                  }`}
                >
                  &gt; complete_exam.exe
                </button>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <button
              onClick={() => toggleSection('Exam 2')}
              className="w-full flex items-center justify-between text-xs font-semibold font-mono text-htb-red uppercase tracking-wider hover:text-htb-dark hover:bg-htb-red rounded-lg transition-all duration-300 py-2 px-2 group border border-htb-red/50"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">[!] CYBERSECURITY</span>
              <span className={`text-lg transition-transform duration-500 ${expandedSections['Exam 2'] ? 'rotate-180' : 'rotate-0'}`}>&gt;</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['Exam 2'] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-3 mt-1">
                <button
                  onClick={() => onSelectTense('exam2')}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm font-mono transition-all duration-300 transform hover:translate-x-2 animate-fadeIn ${
                    selectedTense === 'exam2'
                      ? 'bg-htb-red text-htb-dark shadow-lg scale-105 font-bold'
                      : 'text-htb-red/70 hover:bg-htb-gray-dark hover:text-htb-red border border-htb-red/20'
                  }`}
                >
                  &gt; cyber_exam.exe
                </button>
              </div>
            </div>
          </div>
              
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-htb-darker bg-opacity-80 z-30 backdrop-blur-sm transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
