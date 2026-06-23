import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = ['AI Face Scan ▾', 'Virtual Try-On ▾', 'Membership', 'Appointments', 'Contact']

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)

  return (
    <header style={{ width: '100%' }}>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: '#C9A84C', color: '#0A0A0A', textAlign: 'center', fontSize: '12px', padding: '8px', letterSpacing: '2px' }}>
        FREE SHIPPING ON ORDERS NPR 999+
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid #ddd' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold', transition: 'color 0.2s' }}>
            Eye<br />Club
          </div>
        </Link>

        {/* Nav Links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', fontSize: '14px', margin: 0, padding: 0 }}>
          {navLinks.map((link, i) => (
            <li
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: 'pointer',
                color: hoveredIndex === i ? '#C9A84C' : '#0A0A0A',
                borderBottom: hoveredIndex === i ? '1px solid #C9A84C' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {link}
            </li>
          ))}
          <li>
            <Link
              to="/services"
              onMouseEnter={() => setHoveredIndex(99)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: hoveredIndex === 99 ? '#C9A84C' : '#0A0A0A',
                borderBottom: hoveredIndex === 99 ? '1px solid #C9A84C' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              Services
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px' }}>
          <input
            type="text"
            placeholder="Search boutique..."
            style={{ border: '1px solid #ccc', padding: '4px 12px', background: 'transparent', outline: 'none' }}
          />
          {['♡', '👤', '🛒 Cart (2)'].map((icon, i) => (
            <span
              key={i}
              onMouseEnter={() => setHoveredIcon(i)}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                cursor: 'pointer',
                color: hoveredIcon === i ? '#C9A84C' : '#0A0A0A',
                transition: 'color 0.2s',
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar