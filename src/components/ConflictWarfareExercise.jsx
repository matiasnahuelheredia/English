import React, { useState, useEffect } from 'react';

const ConflictWarfareExercise = () => {
  // Exercise 1: Dialogue ordering
  const dialogueSentences = [
    { id: 1, speaker: 'Robert', text: "I saw on the internet that more fighting has broken out.", order: 1 },
    { id: 2, speaker: 'Ben', text: "Yes, I saw that too. But apparently the rebel leader has already been captured.", order: 2 },
    { id: 3, speaker: 'Robert', text: "Have they? Do you know how many civilians have been wounded?", order: 3 },
    { id: 4, speaker: 'Ben', text: "No I don't, but I hope there are fewer casualties than in January.", order: 4 },
    { id: 5, speaker: 'Robert', text: "Yes, that was a terrible time but in the end the rebels were defeated.", order: 5 },
    { id: 6, speaker: 'Ben', text: "Yes, they were. Actually, I think they surrendered. Which group has declared war on the government now?", order: 6 },
    { id: 7, speaker: 'Robert', text: "Well, they're called the People's Front and their commander used to be an ally of the President.", order: 7 },
    { id: 8, speaker: 'Ben', text: "Oh that's interesting. I wonder why he wants to overthrow his old friend...", order: 8 },
    { id: 9, speaker: 'Robert', text: "Will he be executed?", order: 9 },
    { id: 10, speaker: 'Ben', text: "No, they'll just keep him in prison. Anyway, government troops have gained control of the capital.", order: 10 }
  ];

  // Exercise 2: Weapons matching
  const weaponsData = [
    { id: 1, word: 'Bow', definition: 'A curved weapon with a string which is used for shooting arrows.' },
    { id: 2, word: 'Bullet', definition: 'A small object which is fired out of a gun.' },
    { id: 3, word: 'Cannon', definition: 'A large weapon used for firing heavy balls of metal at the enemy over long distances.' },
    { id: 4, word: 'Helmet', definition: 'A type of hat which protects the head of a soldier.' },
    { id: 5, word: 'Machine gun', definition: 'A weapon which can fire many bullets very fast one after another.' },
    { id: 6, word: 'Missile', definition: 'A weapon which is launched into the air and can travel long distances.' },
    { id: 7, word: 'Shield', definition: 'A flat piece of metal which soldiers used to carry to protect their body when fighting.' },
    { id: 8, word: 'Spear', definition: 'A long stick with a pointed metal end which is used as a weapon.' },
    { id: 9, word: 'Sword', definition: 'A weapon with long sharp metal blade and a handle.' }
  ];

  const [selectedOrder, setSelectedOrder] = useState([]);
  const [dialogueFeedback, setDialogueFeedback] = useState(null);
  const [matches, setMatches] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchingFeedback, setMatchingFeedback] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(1);

  const handleSentenceClick = (sentence) => {
    if (dialogueFeedback) return;
    
    if (selectedOrder.find(s => s.id === sentence.id)) {
      setSelectedOrder(selectedOrder.filter(s => s.id !== sentence.id));
    } else {
      setSelectedOrder([...selectedOrder, sentence]);
    }
  };

  const checkDialogueOrder = () => {
    if (selectedOrder.length !== dialogueSentences.length) {
      alert('Please select all sentences in order!');
      return;
    }

    const isCorrect = selectedOrder.every((sentence, index) => sentence.order === index + 1);
    setDialogueFeedback({
      isCorrect,
      message: isCorrect 
        ? '✅ Perfect! You have ordered the dialogue correctly!' 
        : '❌ Not quite right. Try again - think about the logical flow of the conversation.'
    });
  };

  const resetDialogue = () => {
    setSelectedOrder([]);
    setDialogueFeedback(null);
  };

  const handleDefinitionClick = (definition) => {
    if (!selectedWord || matchingFeedback) return;

    const correctMatch = weaponsData.find(w => w.word === selectedWord);
    const isCorrect = correctMatch.definition === definition;

    const newMatches = { ...matches, [selectedWord]: definition };
    setMatches(newMatches);

    if (!isCorrect) {
      setMatchingFeedback({ word: selectedWord, isCorrect: false });
      setTimeout(() => {
        setMatchingFeedback(null);
        const updatedMatches = { ...newMatches };
        delete updatedMatches[selectedWord];
        setMatches(updatedMatches);
      }, 2000);
    } else {
      setMatchingFeedback({ word: selectedWord, isCorrect: true });
      setTimeout(() => setMatchingFeedback(null), 1000);
    }

    setSelectedWord(null);
  };

  const resetMatching = () => {
    setMatches({});
    setSelectedWord(null);
    setMatchingFeedback(null);
  };

  const allMatched = Object.keys(matches).length === weaponsData.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Advanced Vocabulary: Conflict and Warfare</h1>
        <p className="text-htb-text">Master vocabulary related to military conflicts, weapons, and warfare terminology</p>
      </div>

      {/* Exercise Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setCurrentExercise(1)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            currentExercise === 1
              ? 'bg-htb-green text-htb-bg'
              : 'bg-htb-card border border-gray-700 text-htb-text hover:border-htb-green/50'
          }`}
        >
          Exercise 1: Dialogue Order
        </button>
        <button
          onClick={() => setCurrentExercise(2)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            currentExercise === 2
              ? 'bg-htb-green text-htb-bg'
              : 'bg-htb-card border border-gray-700 text-htb-text hover:border-htb-green/50'
          }`}
        >
          Exercise 2: Weapons Matching
        </button>
      </div>

      {/* Exercise 1: Dialogue Ordering */}
      {currentExercise === 1 && (
        <div className="space-y-6">
          <div className="bg-htb-card border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">📝 Exercise 1: Order the Dialogue</h2>
            <p className="text-htb-text mb-6">
              Click on the sentences in the correct order to form a logical conversation between Robert and Ben.
            </p>

            {/* Selected Order Display */}
            {selectedOrder.length > 0 && (
              <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-htb-green mb-3">Your Order ({selectedOrder.length}/10):</h3>
                <div className="space-y-2">
                  {selectedOrder.map((sentence, index) => (
                    <div key={sentence.id} className="flex items-start gap-3 text-sm">
                      <span className="text-htb-green font-bold">{index + 1}.</span>
                      <span className="text-htb-text">
                        <span className="font-semibold text-white">{sentence.speaker}:</span> {sentence.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sentences to Click */}
            <div className="grid gap-3 mb-6">
              {dialogueSentences.map((sentence) => {
                const isSelected = selectedOrder.find(s => s.id === sentence.id);
                const orderNumber = selectedOrder.findIndex(s => s.id === sentence.id) + 1;

                return (
                  <button
                    key={sentence.id}
                    onClick={() => handleSentenceClick(sentence)}
                    disabled={dialogueFeedback !== null}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-htb-green bg-htb-green/10 opacity-50'
                        : 'border-gray-700 hover:border-htb-green/50 bg-htb-sidebar'
                    } ${dialogueFeedback ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'}`}
                  >
                    <div className="flex items-start gap-3">
                      {isSelected && (
                        <span className="text-htb-green font-bold text-lg">{orderNumber}.</span>
                      )}
                      <div className="flex-1">
                        <span className="font-semibold text-htb-green">{sentence.speaker}:</span>{' '}
                        <span className="text-white">{sentence.text}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {dialogueFeedback && (
              <div className={`p-4 rounded-lg border-2 mb-4 ${
                dialogueFeedback.isCorrect
                  ? 'bg-htb-sidebar border-htb-green'
                  : 'bg-htb-sidebar border-red-500'
              }`}>
                <p className={`font-semibold ${
                  dialogueFeedback.isCorrect ? 'text-htb-green' : 'text-red-500'
                }`}>
                  {dialogueFeedback.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={checkDialogueOrder}
                disabled={selectedOrder.length !== dialogueSentences.length || dialogueFeedback !== null}
                className="bg-htb-green hover:bg-htb-green-hover disabled:bg-gray-700 disabled:cursor-not-allowed text-htb-bg px-6 py-3 rounded-lg font-semibold transition-all"
              >
                ✓ Check Order
              </button>
              <button
                onClick={resetDialogue}
                className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          {/* Vocabulary Help */}
          <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">📚 Key Vocabulary</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">civilians:</span>{' '}
                <span className="text-htb-text">people not in the military</span>
              </div>
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">casualties:</span>{' '}
                <span className="text-htb-text">people killed or injured in war</span>
              </div>
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">rebels:</span>{' '}
                <span className="text-htb-text">people fighting against government</span>
              </div>
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">overthrow:</span>{' '}
                <span className="text-htb-text">remove from power by force</span>
              </div>
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">surrender:</span>{' '}
                <span className="text-htb-text">stop fighting and admit defeat</span>
              </div>
              <div className="bg-htb-card border border-gray-800 rounded p-3">
                <span className="text-htb-green font-semibold">troops:</span>{' '}
                <span className="text-htb-text">soldiers in organized groups</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exercise 2: Weapons Matching */}
      {currentExercise === 2 && (
        <div className="space-y-6">
          <div className="bg-htb-card border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Exercise 2: Match Weapons with Definitions</h2>
            <p className="text-htb-text mb-6">
              Click on a word, then click on its matching definition. Get all matches correct!
            </p>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-htb-text">Progress</span>
                <span className="text-htb-green font-semibold">{Object.keys(matches).length} / {weaponsData.length}</span>
              </div>
              <div className="w-full bg-htb-sidebar rounded-full h-2">
                <div
                  className="bg-htb-green h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(Object.keys(matches).length / weaponsData.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Words Column */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">⚔️ Weapons</h3>
                <div className="space-y-2">
                  {weaponsData.map((item) => {
                    const isMatched = matches[item.word];
                    const isSelected = selectedWord === item.word;

                    return (
                      <button
                        key={item.id}
                        onClick={() => !isMatched && setSelectedWord(item.word)}
                        disabled={isMatched}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          isMatched
                            ? 'border-htb-green bg-htb-green/20 text-htb-green cursor-not-allowed'
                            : isSelected
                            ? 'border-htb-green bg-htb-green/10 text-white'
                            : 'border-gray-700 hover:border-htb-green/50 bg-htb-sidebar text-htb-text hover:text-white'
                        }`}
                      >
                        <span className="font-semibold">{item.word}</span>
                        {isMatched && <span className="ml-2">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Definitions Column */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">📖 Definitions</h3>
                <div className="space-y-2">
                  {weaponsData.map((item) => {
                    const matchedWord = Object.keys(matches).find(word => matches[word] === item.definition);
                    const isMatched = !!matchedWord;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleDefinitionClick(item.definition)}
                        disabled={isMatched || !selectedWord}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          isMatched
                            ? 'border-htb-green bg-htb-green/20 cursor-not-allowed'
                            : selectedWord
                            ? 'border-gray-700 hover:border-htb-green/50 bg-htb-sidebar hover:bg-htb-card cursor-pointer'
                            : 'border-gray-700 bg-htb-sidebar opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <span className={isMatched ? 'text-htb-green' : 'text-htb-text'}>
                          {item.definition}
                        </span>
                        {isMatched && (
                          <div className="mt-2 text-htb-green font-semibold text-sm">
                            ✓ {matchedWord}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Feedback */}
            {matchingFeedback && (
              <div className={`mt-6 p-4 rounded-lg border-2 ${
                matchingFeedback.isCorrect
                  ? 'bg-htb-sidebar border-htb-green'
                  : 'bg-htb-sidebar border-red-500'
              }`}>
                <p className={`font-semibold ${
                  matchingFeedback.isCorrect ? 'text-htb-green' : 'text-red-500'
                }`}>
                  {matchingFeedback.isCorrect ? '✓ Correct match!' : `✗ Try again with "${matchingFeedback.word}"`}
                </p>
              </div>
            )}

            {/* Success Message */}
            {allMatched && (
              <div className="mt-6 p-6 bg-htb-sidebar border-2 border-htb-green rounded-lg text-center">
                <p className="text-2xl text-htb-green font-bold mb-2">🎉 Excellent!</p>
                <p className="text-htb-text">You've matched all weapons correctly!</p>
              </div>
            )}

            {/* Reset Button */}
            <div className="mt-6">
              <button
                onClick={resetMatching}
                className="bg-htb-sidebar border border-gray-700 hover:border-htb-green/50 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                🔄 Reset Exercise
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConflictWarfareExercise;
