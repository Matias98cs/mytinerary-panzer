import './style/App.css';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Carousel from './components/Carousel';
import WebsiteLayout from './layouts/WebsiteLayout';
import EventsCarousel from './components/EventsCarousel';
import Cities from './components/Cities';
import NewCityLayout from './layouts/NewCityLayout';


function App() {
  return (
    <>
      {/* <EventsCarousel /> */}
      <Welcome/>
      {/* <Cities /> */}
      <WebsiteLayout />
      {/* <NewCityLayout /> */}
    </>
  );
}

export default App;
