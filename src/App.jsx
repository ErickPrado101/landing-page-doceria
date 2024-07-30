import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import Kit from './components/Kit/Kit';
import Contato from './components/Contato/Contato';



const App = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="produtos">
        <Info />
      </div>
      <div id="Kit">
        <Kit />
      </div>
      <div id="contatos">
        <Contato />
      </div>
    </>
  );
}

export default App;