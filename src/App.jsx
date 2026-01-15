import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ExerciseView from './components/ExerciseView';
import ExamViewC1 from './components/ExamViewC1';

function App() {
  // Recuperar el tense desde URL params, localStorage, o usar 'introduction' por defecto
  const [selectedTense, setSelectedTense] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTense = params.get('page');
    if (urlTense) {
      return urlTense;
    }
    const saved = localStorage.getItem('selectedTense');
    return saved || 'introduction';
  });

  // Actualizar URL y localStorage cada vez que cambie el tense seleccionado
  useEffect(() => {
    localStorage.setItem('selectedTense', selectedTense);
    // Actualizar la URL sin recargar la página
    const newUrl = `${window.location.pathname}?page=${selectedTense}`;
    window.history.pushState({ page: selectedTense }, '', newUrl);
  }, [selectedTense]);

  // Manejar el botón de "atrás" del navegador
  useEffect(() => {
    const handlePopState = (event) => {
      const params = new URLSearchParams(window.location.search);
      const urlTense = params.get('page');
      if (urlTense) {
        setSelectedTense(urlTense);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <Layout selectedTense={selectedTense} onSelectTense={setSelectedTense}>
      {selectedTense.startsWith('exam-c1-') ? (
        <ExamViewC1 tenseId={selectedTense} />
      ) : (
        <ExerciseView
          tenseId={selectedTense}
          onSelectTense={setSelectedTense}
        />
      )}
    </Layout>
  );
}

export default App;
