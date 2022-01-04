import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyHead from './components/headCart';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/protfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
      <MyHead />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
    );
}

export default App;
