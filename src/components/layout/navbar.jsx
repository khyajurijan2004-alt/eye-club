import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const navLinks = [
    { label: 'AI FACE SCAN', hasDropdown: true },
    { label: 'VIRTUAL TRY-ON', hasDropdown: true },
    { label: 'MEMBERSHIP', hasDropdown: false },
    { label: 'APPOINTMENTS', hasDropdown: false },
    { label: 'CONTACT', hasDropdown: false },
  ]

  return (
    <header style={{ width: '100%' }}>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: '#C9A84C',
        color: '#0A0A0A',
        textAlign: 'center',
        fontSize: '11px',
        padding: '10px',
        letterSpacing: '3px',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: '500',
      }}>
        FREE SHIPPING ON ORDERS NPR 999+
      </div>

      {/* Main Navbar */}
      <nav style={{
        backgroundColor: '#F5F0E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 60px',
        borderBottom: '1px solid #e8e3db',
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
          <div style={{
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: '600',
            fontFamily: 'Bodoni Moda, serif',
            lineHeight: '1.1',
            color: '#0A0A0A',
          }}>
            Eye<br />Club
          </div>
        </Link>

        {/* Nav Links */}
        <ul style={{
          display: 'flex',
          gap: '40px',
          listStyle: 'none',
          fontSize: '12px',
          letterSpacing: '1.5px',
          margin: 0,
          padding: 0,
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '500',
        }}>
          {navLinks.map((link, i) => (
            <li
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: 'pointer',
                color: hoveredIndex === i ? '#C9A84C' : '#0A0A0A',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <span style={{ fontSize: '8px', marginTop: '1px' }}>▾</span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #ddd', padding: '6px 14px', backgroundColor: '#fff' }}>
            <input
              type="text"
              placeholder="Search boutique..."
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '12px',
                color: '#888',
                background: 'transparent',
                width: '140px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </div>

          {/* Heart */}
          <span
            onMouseEnter={() => setHoveredIcon(0)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ cursor: 'pointer', color: hoveredIcon === 0 ? '#C9A84C' : '#0A0A0A', transition: 'color 0.2s' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </span>

          {/* User */}
          <span
            onMouseEnter={() => setHoveredIcon(1)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ cursor: 'pointer', color: hoveredIcon === 1 ? '#C9A84C' : '#0A0A0A', transition: 'color 0.2s' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </span>

          {/* Cart */}
          <span
            onMouseEnter={() => setHoveredIcon(2)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              cursor: 'pointer',
              color: hoveredIcon === 2 ? '#C9A84C' : '#0A0A0A',
              transition: 'color 0.2s',
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Cart (2)
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar