import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Layout from './components/Layout';
import ExerciseView from './components/ExerciseView';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [selectedTense, setSelectedTense] = useState('present-perfect');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Layout selectedTense={selectedTense} onSelectTense={setSelectedTense}>
      <ExerciseView tenseId={selectedTense} />
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
