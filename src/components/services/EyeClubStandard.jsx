const EyeClubStandard = () => {
  const pillars = [
    { icon: '◎', label: 'AUTHENTIC QUALITY', desc: 'Every frame is sourced directly from certified manufacturers.' },
    { icon: '✦', label: 'JAPANESE PRECISION', desc: 'Lenses are cut with robotic accuracy to match your prescription.' },
    { icon: '◈', label: 'LIFETIME SERVICE', desc: 'Free adjustments and deep-cleaning for as long as you own the frame.' },
    { icon: '◇', label: '1 YEAR WARRANTY', desc: 'Comprehensive protection against manufacturing defects.' },
  ]

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '60px 80px', borderTop: '1px solid #eee' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0A0A0A', textAlign: 'center', marginBottom: '56px', fontFamily: 'Georgia, serif' }}>
        The Eye Club Standard
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
        {pillars.map((p, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '0 32px',
            borderRight: i < 3 ? '1px solid #ddd' : 'none',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              border: '1px solid #C9A84C',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '18px', color: '#C9A84C',
            }}>
              {p.icon}
            </div>
            <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', color: '#0A0A0A', marginBottom: '12px' }}>
              {p.label}
            </div>
            <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EyeClubStandard