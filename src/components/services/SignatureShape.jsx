import { useState } from 'react'

const shapes = [
  {
    name: 'ROUND',
    svg: (active) => (
      <rect x="10" y="25" width="80" height="38" rx="19"
        fill={active ? '#F5EDCC' : 'none'}
        stroke={active ? '#8B6914' : '#ccc'}
        strokeWidth="2.5"
      />
    ),
  },
  {
    name: 'SQUARE',
    svg: (active) => (
      <rect x="15" y="18" width="70" height="52" rx="4"
        fill={active ? '#F5EDCC' : '#E8E3DB'}
        stroke={active ? '#8B6914' : '#ccc'}
        strokeWidth="1.5"
      />
    ),
  },
  {
    name: 'AVIATOR',
    svg: () => (
      <line x1="50" y1="15" x2="50" y2="75" stroke="#bbb" strokeWidth="2" strokeLinecap="round"/>
    ),
  },
  {
  name: 'CAT EYE',
  viewBox: '0 0 200 100',
  svg: (active) => (
    <path
      d="M 18 55
         C 40 25, 110 18, 178 22
         L 178 65
         C 170 78, 140 80, 100 76
         C 60 72, 28 78, 18 55 Z"
      fill={active ? '#F5EDCC' : '#D8D4CE'}
      stroke={active ? '#8B6914' : '#BFC0C0'}
      strokeWidth="3"
    />
  ),
},
  {
    name: 'RECTANGLE',
    svg: () => (
      <line x1="50" y1="15" x2="50" y2="75" stroke="#bbb" strokeWidth="2" strokeLinecap="round"/>
    ),
  },
  {
    name: 'OVERSIZED',
    svg: (active) => (
      <rect x="32" y="8" width="36" height="72" rx="3"
        fill={active ? '#F5EDCC' : '#D8D3CB'}
        stroke={active ? '#8B6914' : '#bbb'}
        strokeWidth="1.5"
      />
    ),
  },
  {
    name: 'PANTO',
    svg: (active) => (
      <rect x="25" y="20" width="50" height="48" rx="4"
        fill={active ? '#F5EDCC' : '#E8E3DB'}
        stroke={active ? '#8B6914' : '#ccc'}
        strokeWidth="1.5"
      />
    ),
  },
]

const SignatureShape = () => {
  const [active, setActive] = useState(0)

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px 60px' }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '700',
        color: '#0A0A0A',
        textAlign: 'center',
        marginBottom: '48px',
        fontFamily: '"Bodoni Moda", serif',
      }}>
        Find Your Signature Shape
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}>
        {shapes.map((shape, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: '130px',
              height: '160px',
              border: `1.5px solid ${i === active ? '#8B6914' : '#ddd'}`,
              backgroundColor: '#fff',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 12px 18px',
              transition: 'border-color 0.2s',
            }}
          >
            <svg width="100" height="88" viewBox={shape.viewBox || '0 0 100 88'}>
              {shape.svg(i === active)}
            </svg>
            <span style={{
              fontSize: '10px',
              letterSpacing: '2px',
              fontWeight: '700',
              color: i === active ? '#8B6914' : '#555',
              fontFamily: '"DM Sans", sans-serif',
              textAlign: 'center',
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
