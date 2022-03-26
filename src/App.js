import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  // This is our root Component
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
