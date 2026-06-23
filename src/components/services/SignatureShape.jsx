import { useState } from 'react'

const shapes = [
  { name: 'ROUND',     svg: <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="currentColor" strokeWidth="3"/> },
  { name: 'SQUARE',    svg: <rect x="20" y="30" width="60" height="40" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/> },
  { name: 'AVIATOR',   svg: <><path d="M20 35 Q50 20 80 35" fill="none" stroke="currentColor" strokeWidth="3"/><ellipse cx="35" cy="52" rx="15" ry="12" fill="none" stroke="currentColor" strokeWidth="3"/><ellipse cx="65" cy="52" rx="15" ry="12" fill="none" stroke="currentColor" strokeWidth="3"/></> },
  { name: 'CAT EYE',   svg: <path d="M15 55 Q30 30 50 35 Q70 30 85 45 Q70 65 50 60 Q30 65 15 55Z" fill="none" stroke="currentColor" strokeWidth="3"/> },
  { name: 'RECTANGLE', svg: <rect x="15" y="35" width="70" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/> },
  { name: 'OVERSIZED', svg: <ellipse cx="50" cy="50" rx="36" ry="22" fill="none" stroke="currentColor" strokeWidth="3"/> },
  { name: 'PANTO',     svg: <path d="M50 25 Q75 25 75 50 Q75 72 50 72 Q25 72 25 50 Q25 25 50 25Z" fill="none" stroke="currentColor" strokeWidth="3"/> },
]

const SignatureShape = () => {
  const [active, setActive] = useState(0)

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px 80px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0A0A0A', textAlign: 'center', marginBottom: '48px' }}>
        Find Your Signature Shape
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {shapes.map((shape, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: '120px',
              padding: '24px 16px 16px',
              border: `1px solid ${i === active ? '#C9A84C' : '#ddd'}`,
              backgroundColor: i === active ? '#fff' : '#F5F0E8',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="60" height="40" viewBox="0 0 100 80" style={{ color: i === active ? '#C9A84C' : '#0A0A0A' }}>
              {shape.svg}
            </svg>
            <span style={{
              fontSize: '10px', letterSpacing: '2px', fontWeight: '700',
              color: i === active ? '#C9A84C' : '#888',
            }}>
              {shape.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SignatureShape
