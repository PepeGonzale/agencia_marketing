import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import store from 'store';
import { Provider } from 'react-redux';
import Services from 'containers/pages/Services';
import Cases from 'containers/pages/Cases';
import Carreers from 'containers/pages/Carreers';
import About from 'containers/pages/About';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        {/* Si la ruta no existe */}
        <Route path="*" element={<Error404/>}/>
        {/* La ruta Home */}
        <Route path="/" element={<Home/>}/>
        <Route path="/casos" element={<Cases/>}/>
        <Route path="/servicios" element={<Services/>}/>
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/carreras" element={<Carreers/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
