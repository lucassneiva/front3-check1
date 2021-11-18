import React from 'react';

import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import projects from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsList projects={ projects } />
      <Footer />
    </div>
  );
}

export default App;