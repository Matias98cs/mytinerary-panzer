import './style/App.css';
import Footer from './componets/Footer';
import Welcome from './pages/Welcome';
import Carousel from './componets/Carousel';


function App() {
  return (
    <>
      <Carousel />
      <Welcome/>
      <Footer/>
    </>
  );
}

export default App;
