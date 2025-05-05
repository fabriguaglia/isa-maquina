import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Carouselprinc from './components/carousel/carouselprinc';
import BarraColores from './components/barracol/barracolores';
import Swal from 'sweetalert2';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carouselprinc />
      <BarraColores />
      <Footer />
    </div>
  );
}

export default App;