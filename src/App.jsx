import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
