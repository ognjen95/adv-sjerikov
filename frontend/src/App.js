import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import KontaktStrana from './pages/KontaktStrana';
import GoToTopBtn from './components/GoToTopBtn';
import OblastiStrana from './pages/OblastiStrana';
import KrivicnoStrana from './pages/KrivicnoPravoStrana';
import ONamaStrana from './pages/ONamaStrana';
import PriverdnoStrana from './pages/PriverdnoStrana';
import NekretnineStrana from './pages/NekretnineStrana';
import IntelektualnaStrana from './pages/IntelektualnaStrana';
import RadnoStrana from './pages/RadnoStrana';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" exact component={LandingPage} />
        <Route path="/kontakt" exact component={KontaktStrana} />
        <Route path="/oNama" exact component={ONamaStrana} />
        <Route path="/oblasti" exact component={OblastiStrana} />
        {/* Oblasti strane */}
        <Route path="/oblasti/krivicno-pravo" component={KrivicnoStrana} />
        <Route path="/oblasti/privredno-pravo" component={PriverdnoStrana} />
        <Route path="/oblasti/nekretnine" component={NekretnineStrana} />
        <Route path="/oblasti/radno-pravo" component={RadnoStrana} />
        <Route
          path="/oblasti/pravo-intelektualne-svojine"
          component={IntelektualnaStrana}
        />
      </main>
      <Footer />
      <GoToTopBtn />
    </Router>
  );
}

export default App;
