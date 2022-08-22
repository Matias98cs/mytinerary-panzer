import './style/App.css';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Carousel from './components/Carousel';
import WebsiteLayout from './layouts/WebsiteLayout';
import EventsCarousel from './components/EventsCarousel';


function App() {
  return (
    <>
      <EventsCarousel />
      <Welcome/>
      <WebsiteLayout/>
    </>
  );
}

export default App;
