import { useState } from 'react'

const MembershipSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(false)
  const [hoveredBrand, setHoveredBrand] = useState(null)

  const features = [
    { icon: 'BOGO', title: 'Buy One Get One', desc: 'Purchase any luxury frame and get your second pair absolutely free. Share with a friend or double your style.' },
    { icon: '◎', title: 'Unlimited Eye Tests', desc: 'Priority booking for you and your family at any of our boutiques nationwide.' },
    { icon: '✦', title: 'Infinite Repairs', desc: 'Lifetime frame adjustments, spare parts, and ultrasonic rejuvenation.' },
  ]

  const stats = [
    { value: '01', label: 'SUBSCRIPTION YEAR' },
    { value: '10k', label: 'ELITE MEMBERS' },
    { value: '24·7', label: 'CONCIERGE SERVICE' },
    { value: '15%', label: 'ADDITIONAL OFF' },
  ]

  const brands = {
    'MADE IN NEPAL': ['HIMALAYAN OPTIC', 'EVEREST FRAMES', 'ANNAPURNA LENS'],
    'ASIAN MASTERS': ['MASUNAGA', 'EYEVAN', 'GENTLE MONSTER', 'OHMYGLASS'],
    'INTERNATIONAL LUXURY': ['CARTIER', 'GUCCI', 'PRADA', 'RAY-BAN', 'TOM FORD'],
  }

  return (
    <>
      {/* Membership */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 80px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A84C', marginBottom: '16px' }}>
              THE INNER CIRCLE
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '800', color: '#0A0A0A', lineHeight: '1.1', marginBottom: '40px' }}>
              Eye Club<br />Membership
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    backgroundColor: '#C9A84C',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: f.icon === 'BOGO' ? '8px' : '14px',
                    color: '#0A0A0A', fontWeight: '800', letterSpacing: '0.5px',
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#0A0A0A', marginBottom: '6px' }}>{f.title}</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              style={{
                backgroundColor: hoveredBtn ? '#C9A84C' : '#0A0A0A',
                color: '#fff',
                padding: '14px 32px', fontSize: '13px', letterSpacing: '2px',
                border: 'none', cursor: 'pointer', fontWeight: '600',
                transition: 'background-color 0.2s',
              }}
            >
              JOIN THE CLUB
            </button>
          </div>

          {/* Right — Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#ddd5c8' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ backgroundColor: '#F5F0E8', padding: '36px 28px' }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#C9A84C', marginBottom: '8px' }}>{s.value}</div>
                <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#888' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <div style={{ backgroundColor: '#8B6914', padding: '18px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ color: '#C9A84C', fontSize: '16px' }}>◎</span>
          <span style={{ fontSize: '14px', color: '#f0e0b0' }}>Refer a friend and you both get a free luxury accessory kit!</span>
        </div>
        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#f0e0b0', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          REFER & EARN NOW →
        </span>
      </div>

      {/* Brand Portfolio */}
      <section style={{ backgroundColor: '#fff', padding: '72px 80px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#0A0A0A', textAlign: 'center', marginBottom: '56px' }}>
          Our Curated Brand Portfolio
        </h2>
        {Object.entries(brands).map(([group, items]) => (
          <div key={group} style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', justifyContent: 'center' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#eee', maxWidth: '120px' }} />
              <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#aaa' }}>{group}</span>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#eee', maxWidth: '120px' }} />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {items.map((brand, i) => {
                const key = `${group}-${i}`
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredBrand(key)}
                    onMouseLeave={() => setHoveredBrand(null)}
                    style={{
                      padding: '10px 24px',
                      border: `1px solid ${hoveredBrand === key ? '#C9A84C' : '#e5e5e5'}`,
                      fontSize: '12px', letterSpacing: '2px',
                      color: hoveredBrand === key ? '#C9A84C' : '#444',
                      cursor: 'pointer', fontWeight: '600',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                  >
                    {brand}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default MembershipSection