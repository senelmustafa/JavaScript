import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider/slider';
import About from './components/about/about';
import Quote from './components/quote/quote';

function App() {
  return (
    <>
   <Header/>
   <Slider/>
   <About/>
   <Quote/>
    </>
  );
}

export default App;
