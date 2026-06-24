const LensQuiz = () => {
  const lensTypes = [
    {
      name: 'SINGLE VISION',
      desc: 'Distance or Reading',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9"/>
        </svg>
      ),
    },
    {
      name: 'PROGRESSIVE',
      desc: 'Multi-focal clarity',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>
        </svg>
      ),
    },
    {
      name: 'BLUE LIGHT',
      desc: 'Digital protection',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      name: 'TRANSITIONS',
      desc: 'Light intelligent',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{ backgroundColor: '#EDEAE3', padding: '80px', display: 'flex', alignItems: 'center', gap: '80px' }}>

      {/* Left */}
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '400',
          color: '#0A0A0A',
          lineHeight: '1.15',
          marginBottom: '20px',
          fontFamily: '"Bodoni Moda", serif',
        }}>
          Unsure which lens<br />is right for you?
        </h2>
        <p style={{
          fontSize: '15px',
          color: '#666',
          lineHeight: '1.7',
          marginBottom: '32px',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          Answer 5 simple questions about your lifestyle and vision needs to get your perfect lens recommendation.
        </p>
        <button style={{
          backgroundColor: '#0A0A0A',
          color: '#fff',
          padding: '14px 28px',
          fontSize: '12px',
          letterSpacing: '2px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '600',
        }}>
          START THE LENS QUIZ
        </button>
      </div>

      {/* Right - Lens Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
        {lensTypes.map((lens, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '36px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}>
            <span>{lens.icon}</span>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#0A0A0A',
              fontFamily: '"DM Sans", sans-serif',
            }}>{lens.name}</div>
            <div style={{
              fontSize: '13px',
              color: '#888',
              fontFamily: '"DM Sans", sans-serif',
            }}>{lens.desc}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default LensQuiz