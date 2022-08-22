import './style/App.css';
import Footer from './componets/Footer';
import Welcome from './pages/Welcome';
import Carousel from './componets/Carousel';
import WebsiteLayout from './layouts/WebsiteLayout';
import EventsCarousel from './componets/EventsCarousel';


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
