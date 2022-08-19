import './style/App.css';
import Footer from './componets/Footer';
import Welcome from './pages/Welcome';
import Carousel from './componets/Carousel';
import WebsiteLayout from './layouts/WebsiteLayout';


function App() {
  return (
    <>
      <Carousel />
      <Welcome/>
      <WebsiteLayout />
      {/* <Footer/> */}
    </>
  );
}

export default App;
