import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Carouselprinc from './components/carousel/carouselprinc';
import BarraColores from './components/barracol/barracolores';
import Swal from 'sweetalert2';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    Swal.fire({
      title: 'Atención',
      html: '<div style="font-size:16px">La página aún se encuentra en construcción<br><b>Colegio Santa Ana</b></div>',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#198754',
      buttonsStyling: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
      backdrop: true
    });
  }, []);

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