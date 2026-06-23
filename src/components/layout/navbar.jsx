const Navbar = () => {
  return (
    <header style={{ width: '100%' }}>

      {/* Announcement Bar */}
      <div style={{ backgroundColor: '#C9A84C', color: '#0A0A0A', textAlign: 'center', fontSize: '12px', padding: '8px', letterSpacing: '2px' }}>
        FREE SHIPPING ON ORDERS NPR 999+
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid #ddd' }}>

        {/* Logo */}
        <div style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold' }}>
          Eye<br />Club
        </div>

        {/* Nav Links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', fontSize: '14px' }}>
          <li style={{ cursor: 'pointer' }}>AI Face Scan ▾</li>
          <li style={{ cursor: 'pointer' }}>Virtual Try-On ▾</li>
          <li style={{ cursor: 'pointer' }}>Membership</li>
          <li style={{ cursor: 'pointer' }}>Appointments</li>
          <li style={{ cursor: 'pointer' }}>Contact</li>
        </ul>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px' }}>
          <input type="text" placeholder="Search boutique..." style={{ border: '1px solid #ccc', padding: '4px 12px', background: 'transparent', outline: 'none' }} />
          <span style={{ cursor: 'pointer' }}>♡</span>
          <span style={{ cursor: 'pointer' }}>👤</span>
          <span style={{ cursor: 'pointer' }}>🛒 Cart (2)</span>
        </div>

      </nav>
    </header>
  )
}

export default Navbar