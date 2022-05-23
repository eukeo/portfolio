import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  return (
    <main className='App'>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    </main>
  );
}