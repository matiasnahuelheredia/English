import React, { useState } from 'react';
import Layout from './components/Layout';
import ExerciseView from './components/ExerciseView';

function App() {
  const [selectedTense, setSelectedTense] = useState('introduction');

  return (
    <Layout selectedTense={selectedTense} onSelectTense={setSelectedTense}>
      <ExerciseView tenseId={selectedTense} />
    </Layout>
  );
}

export default App;
