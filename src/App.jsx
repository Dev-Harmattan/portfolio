import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Navbar,
  Contact,
  Hero,
  Experience,
  Tech,
  Works,
  Feedbacks,
  StarsCanvas,
  Information,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Information />
      </div>
    </BrowserRouter>
  );
};

export default App;
