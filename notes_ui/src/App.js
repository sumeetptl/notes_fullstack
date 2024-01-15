import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
      <Route path='/' exact Component={NotesListPage} />
      <Route path='/note/:id' exact Component={NotePage} />

      </Routes>
    </Router>

      {/* <NotesListPage/> */}    
      </div>
  );
}

export default App;
