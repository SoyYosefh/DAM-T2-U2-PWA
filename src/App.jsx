import './App.css' // Importa los estilos CSS para la aplicación
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Importa componentes de react-router-dom para la navegación
import IncisoA from './views/IncisoA'; // Importa el componente IncisoA
import IncisoB from './views/IncisoB'; // Importa el componente IncisoB
import IncisoC_F from './views/IncisoC_F'; // Importa el componente IncisoC_F
import IncisoG from './views/IncisoG'; // Importa el componente IncisoG
import IncisoH from './views/IncisoH'; // Importa el componente IncisoH
import IncisoI from './views/IncisoI'; // Importa el componente IncisoI
import IncisoJ from './views/IncisoJ'; // Importa el componente IncisoJ
import IncisoK_L from './views/IncisoK_L'; // Importa el componente IncisoK_L

function App() {
  return (
    // Envuelve toda la aplicación dentro de un Router para manejar la navegación
    <Router>
      <div className="container"> {/* Contenedor principal */}
        <header> {/* Encabezado de la página */}
          <h3>Mi App PWA - Vistas por Incisos</h3> {/* Título de la aplicación */}
        </header>
        <div className="main"> {/* Contenedor principal para la navegación y contenido */}
          <nav className="sidebar"> {/* Barra lateral para la navegación */}
            <ul>
              {/* Elementos de navegación con NavLink para definir las rutas */}
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
          <section className="content"> {/* Sección donde se mostrará el contenido basado en la ruta seleccionada */}
            <Routes>
              {/* Definición de las rutas y qué componente renderizará para cada una */}
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

export default App; // Exporta el componente App para su uso en otras partes de la aplicación
