import './App.css';
import { Gallery } from './containers/Gallery/index';
import { LandingPageTop } from './containers/LandingPageTopSection/index';

const App = () => {
  return (
    <div className="App">
      <LandingPageTop />
      <Gallery />
    </div>
  );
}

export default App;
