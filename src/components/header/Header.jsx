import Navbar from '../navbar/Navbar.jsx';

function Header() {
 
  return (
  <header className="sticky-top bg-body-tertiary h-10">
    <p className='title p-3 fs-1 fw-semibold'>Gregory Quinn Roth</p>
    <Navbar />
  </header>
  );
}

export default Header;