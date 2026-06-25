const EyeClubStandard = () => {
  const pillars = [
    {
      label: 'AUTHENTIC QUALITY',
      desc: 'Every frame is sourced directly from certified manufacturers.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="11" r="7" stroke="#8B6914" strokeWidth="1.5"/>
          <path d="M14 7.5l1.2 2.4 2.6.4-1.9 1.8.4 2.6L14 13.5l-2.3 1.2.4-2.6L10.2 10.3l2.6-.4z" fill="#8B6914"/>
          <path d="M9.5 16.5L7 25l7-2.5 7 2.5-2.5-8.5" stroke="#8B6914" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'JAPANESE PRECISION',
      desc: 'Lenses are cut with robotic accuracy to match your prescription.',
     icon: (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base plate */}
    <rect x="2" y="24" width="13" height="2.5" rx="1" fill="#8B6914"/>
    {/* Left leg */}
    <line x1="4.5" y1="24" x2="8" y2="17" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
    {/* Right leg */}
    <line x1="13" y1="24" x2="8" y2="17" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
    {/* Top of triangle to pivot */}
    <line x1="8" y1="17" x2="14" y2="17" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
    {/* Pivot joint */}
    <circle cx="14" cy="17" r="1.8" fill="#8B6914"/>
    {/* Arm */}
    <line x1="14" y1="17" x2="21" y2="10" stroke="#8B6914" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Gripper joint */}
    <circle cx="21" cy="10" r="1.8" fill="#8B6914"/>
    {/* Gripper top jaw */}
    <line x1="21" y1="10" x2="26" y2="7" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
    {/* Gripper bottom jaw */}
    <line x1="21" y1="10" x2="26" y2="13" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
  </svg>
),
    },
    {
      label: 'LIFETIME SERVICE',
      desc: 'Free adjustments and deep-cleaning for as long as you own the frame.',
    icon: (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outline tag */}
    <path d="M5 5h8l10 10-8 8L5 13V5z" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinejoin="round"/>
    {/* Hole */}
    <circle cx="9" cy="9" r="1.5" fill="#8B6914"/>
    {/* Gold heart - centered in tag */}
    <path d="M12 15.8c0-1.2.9-2.1 2.1-2.1.6 0 1.1.3 1.4.7.3-.4.8-.7 1.4-.7 1.2 0 2.1.9 2.1 2.1 0 1.7-2.1 3.2-3.5 3.8C14.1 18.9 12 17.4 12 15.8z" fill="#8B6914"/>
  </svg>
),
    },
    {
      label: '1 YEAR WARRANTY',
      desc: 'Comprehensive protection against manufacturing defects.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z" stroke="#8B6914" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <path d="M9 14l3 3 6-6" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '72px 60px', borderTop: '1px solid #e8e3db' }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '700',
        color: '#0A0A0A',
        textAlign: 'center',
        marginBottom: '64px',
        fontFamily: '"Bodoni Moda", serif',
      }}>
        The Eye Club Standard
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
        {pillars.map((p, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '0 40px',
            borderRight: i < 3 ? '1px solid #ddd' : 'none',
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: '#F0ECE4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              {p.icon}
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2.5px',
              color: '#0A0A0A',
              marginBottom: '14px',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              {p.label}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.7',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EyeClubStandard