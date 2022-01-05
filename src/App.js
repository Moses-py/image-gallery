import './App.css';
import { useContext } from 'react';
import { Footer } from './containers/Footer/Footer';
import { Gallery } from './containers/Gallery/index';
import { LandingPageTop } from './containers/LandingPageTopSection/index';
import { ImageModal } from './containers/Modal/ImageModal';
import { ModalContext } from './context/ImageResults';
const App = () => {
  const ctx = useContext(ModalContext)
  return (
    <div className="App">
        {ctx.modal && <ImageModal />}
        <LandingPageTop />
        <Gallery />
        <Footer />
    </div>
  );
}

export default App;
 