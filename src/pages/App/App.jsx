import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../../components/NavBar/NavBar'
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();
  return (
    <main className='App'>
      <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
    </main>
  );
}