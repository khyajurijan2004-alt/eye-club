import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [cartCount] = useState(2)

  return (
    <>
      {/* Announcement bar */}
      <div style={{
        backgroundColor: '#F5F0E8',
        padding: '10px 60px',
        textAlign: 'center',
        fontSize: '11px',
        letterSpacing: '2.5px',
        color: '#0A0A0A',
        fontFamily: '"DM Sans", sans-serif',
        fontWeight: '600',
      }}>
        FREE SHIPPING ON ORDERS NPR 999+
      </div>

      {/* Main navbar */}
      <nav style={{
        backgroundColor: '#fff',
        padding: '0 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        borderBottom: '1px solid #f0ece4',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontFamily: '"Bodoni Moda", serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#0A0A0A',
            lineHeight: '1.1',
          }}>
            Eye<br />Club
          </div>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {[
            { label: 'AI FACE SCAN', to: '/', hasArrow: true },
            { label: 'VIRTUAL TRY-ON', to: '/try-on', hasArrow: true },
            { label: 'MEMBERSHIP', to: '/services', hasArrow: false },
            { label: 'APPOINTMENTS', to: '/services', hasArrow: false },
            { label: 'CONTACT', to: '/services', hasArrow: false },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                color: '#0A0A0A',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {item.label}
              {item.hasArrow && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #e8e3db',
            padding: '7px 14px',
            fontSize: '12px',
            color: '#999',
            fontFamily: '"DM Sans", sans-serif',
            cursor: 'text',
          }}>
            Search boutique...
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>

          {/* Wishlist */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" style={{ cursor: 'pointer' }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>

          {/* Account */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" style={{ cursor: 'pointer' }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>

          {/* Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span style={{ fontSize: '12px', fontFamily: '"DM Sans", sans-serif', fontWeight: '600' }}>
              Cart ({cartCount})
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar