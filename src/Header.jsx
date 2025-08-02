function Header() {
  return (
    <header style={{
      width: '100%',
      height: '20vh',
      backgroundColor: '#ea900aff',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      position: 'relative'
    }}>
      {/* Left corner */}
      <div style={{ fontSize: '0.9rem', marginTop:"8px" }}>
        Designed & Developed by <strong>Kartikeya Shetti</strong>
      </div>

      {/* Center */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 'bold',
        fontSize: '3.8rem'
      }}>
        Live3Droom
      </div>

      {/* Right corner */}
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
        <a href="mailto:kartikeyashetti@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>Email</a>
        <a href="https://linkedin.com/in/kartikeya-shetti-2b736a10b/?originalSubdomain=in" style={{ color: 'white', textDecoration: 'none' }} target="_blank">LinkedIn</a>
        <a href="https://your-3d-portfolio.com" style={{ color: 'white', textDecoration: 'none' }} target="_blank">3D Portfolio</a>
        <a href="https://instagram.com//kartikeyashetti/?hl=en" style={{ color: 'white', textDecoration: 'none' }} target="_blank">Instagram</a>
      </div>
    </header>
  );
}

export default Header;
