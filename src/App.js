import React from 'react';
import {
  NavLink,
  Route,
  Routes,
}
  from 'react-router-dom';
import Home from './components/home';
import Quote from './components/quote';
import Calculator from './components/calculator';
import './components/App.css';

const App = () => (
  <>
    <nav className="header">
      <h1>Math Magician</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
            end="true"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/calculator"
            end="true"
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/quote"
            end="true"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/*" element={<h2>NOT FOUND!!</h2>} />
    </Routes>
  </>
);

export default App;
