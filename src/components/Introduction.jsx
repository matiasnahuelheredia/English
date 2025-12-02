import React from 'react';

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-htb-green rounded-lg flex items-center justify-center">
            <span className="text-htb-bg text-3xl font-bold">E</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to the Hacking Practice Platform</h1>
            <p className="text-htb-text">Master English through Cybersecurity Scenarios</p>
          </div>
        </div>

        <div className="space-y-4 text-htb-text leading-relaxed">
          <p>
            Welcome to an innovative English learning platform designed specifically for cybersecurity professionals 
            and enthusiasts. This platform combines grammar practice with real-world hacking, pentesting, and 
            security scenarios.
          </p>
          
          <p>
            All exercises have been carefully crafted using professional terminology from penetration testing, 
            vulnerability assessment, incident response, and cybersecurity operations. You'll practice English 
            while learning industry-standard vocabulary used in security reports, CTF competitions, and 
            professional engagements.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
              <span className="text-htb-green text-xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-white">374+ Exercises</h3>
          </div>
          <p className="text-htb-text text-sm">
            Comprehensive coverage of all verb tenses, conditionals, and question forms with examples 
            from SQL injection, privilege escalation, network reconnaissance, and more.
          </p>
        </div>

        <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
              <span className="text-htb-green text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white">Real-World Context</h3>
          </div>
          <p className="text-htb-text text-sm">
            Every sentence uses authentic pentesting terminology: vulnerability assessments, exploit development, 
            security audits, incident response, and threat intelligence.
          </p>
        </div>

        <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
              <span className="text-htb-green text-xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold text-white">Cybersecurity Vocabulary</h3>
          </div>
          <p className="text-htb-text text-sm">
            Build your technical vocabulary with terms from Burp Suite, Metasploit, Nmap, Wireshark, 
            OWASP Top 10, and common security frameworks.
          </p>
        </div>

        <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
              <span className="text-htb-green text-xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white">Progress Tracking</h3>
          </div>
          <p className="text-htb-text text-sm">
            Monitor your performance with detailed statistics, instant feedback, and comprehensive 
            explanations for every exercise.
          </p>
        </div>
      </div>

      {/* Topics Covered */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">📖 Topics Covered</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-htb-green font-semibold mb-2">Present Tenses</h4>
            <ul className="space-y-1 text-sm text-htb-text">
              <li>• Present Simple</li>
              <li>• Present Continuous</li>
              <li>• Present Perfect</li>
              <li>• Present Perfect Continuous</li>
            </ul>
          </div>
          <div>
            <h4 className="text-htb-green font-semibold mb-2">Past Tenses</h4>
            <ul className="space-y-1 text-sm text-htb-text">
              <li>• Past Simple</li>
              <li>• Past Continuous</li>
              <li>• Past Perfect</li>
              <li>• Past Perfect Continuous</li>
            </ul>
          </div>
          <div>
            <h4 className="text-htb-green font-semibold mb-2">Future & Conditionals</h4>
            <ul className="space-y-1 text-sm text-htb-text">
              <li>• Future Simple, Continuous, Perfect</li>
              <li>• First, Second, Third Conditionals</li>
              <li>• Question Forms</li>
              <li>• Mixed Practice</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cybersecurity Scenarios */}
      <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">🎯 Example Scenarios</h2>
        <div className="space-y-3">
          <div className="bg-htb-card border border-gray-800 rounded p-4">
            <p className="text-htb-green font-semibold mb-1">Present Perfect:</p>
            <p className="text-htb-text text-sm italic">
              "The security team <span className="text-white font-semibold">has discovered</span> a critical SQL injection vulnerability in the login form."
            </p>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-4">
            <p className="text-htb-green font-semibold mb-1">Past Continuous:</p>
            <p className="text-htb-text text-sm italic">
              "The attacker <span className="text-white font-semibold">was exfiltrating</span> credentials when the IDS detected the suspicious traffic."
            </p>
          </div>
          <div className="bg-htb-card border border-gray-800 rounded p-4">
            <p className="text-htb-green font-semibold mb-1">Second Conditional:</p>
            <p className="text-htb-text text-sm italic">
              "If I <span className="text-white font-semibold">had</span> better hacking skills, I <span className="text-white font-semibold">would work</span> for a top cybersecurity firm."
            </p>
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-htb-card border border-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">🚀 How to Get Started</h2>
        <div className="space-y-3 text-htb-text">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <p className="font-semibold text-white">Choose a Grammar Topic</p>
              <p className="text-sm">Select from Present, Past, Future tenses, or Conditionals in the sidebar</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <p className="font-semibold text-white">Complete the Exercises</p>
              <p className="text-sm">Fill in the blanks with correct verb forms - all examples use hacking terminology</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <p className="font-semibold text-white">Get Instant Feedback</p>
              <p className="text-sm">See detailed explanations and track your progress with built-in statistics</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <p className="font-semibold text-white">Take the Exams</p>
              <p className="text-sm">Test your knowledge with comprehensive exams covering all grammar topics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-htb-green/10 to-htb-green/5 border border-htb-green/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to Start?</h2>
        <p className="text-htb-text mb-6">
          Choose a topic from the sidebar to begin your journey toward mastering English for cybersecurity!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            🎯 Start with Present Simple
          </button>
          <button className="bg-htb-sidebar hover:bg-gray-700 border border-htb-green/30 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            📝 Take a Practice Exam
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-htb-text-dim text-sm">
          💡 <span className="text-htb-green font-semibold">Pro Tip:</span> All exercises are designed to help you write better 
          penetration testing reports and communicate effectively in cybersecurity contexts.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
