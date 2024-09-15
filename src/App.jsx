import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import IncisoA from './views/IncisoA';
import IncisoB from './views/IncisoB';
import IncisoC_F from './views/IncisoC_F';
import IncisoG from './views/IncisoG';
import IncisoH from './views/IncisoH';
import IncisoI from './views/IncisoI';
import IncisoJ from './views/IncisoJ';
import IncisoK_L from './views/IncisoK_L';

function App() {

  return (
    <Router>
      <div className="container">
        <header>
          <h1>Mi App PWA - Vistas por Incisos</h1>
        </header>
        <div className="main">
          <nav className="sidebar">
            <ul>
              <li><NavLink to="/a" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso A</NavLink></li>
              <li><NavLink to="/b" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso B</NavLink></li>
              <li><NavLink to="/c-f" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso C-F</NavLink></li>
              <li><NavLink to="/g" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso G</NavLink></li>
              <li><NavLink to="/h" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso H</NavLink></li>
              <li><NavLink to="/i" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso I</NavLink></li>
              <li><NavLink to="/j" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso J</NavLink></li>
              <li><NavLink to="/k-l" className={({ isActive }) => isActive ? 'active-link' : 'link'}>Inciso K-L</NavLink></li>
            </ul>
          </nav>
          <section className="content">
            <Routes>
              <Route path="/a" element={<IncisoA />} />
              <Route path="/b" element={<IncisoB />} />
              <Route path="/c-f" element={<IncisoC_F />} />
              <Route path="/g" element={<IncisoG />} />
              <Route path="/h" element={<IncisoH />} />
              <Route path="/i" element={<IncisoI />} />
              <Route path="/j" element={<IncisoJ />} />
              <Route path="/k-l" element={<IncisoK_L />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  )
}

export default App
