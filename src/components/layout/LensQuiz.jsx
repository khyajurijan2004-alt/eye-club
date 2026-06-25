const LensQuiz = () => {
  const lensTypes = [
    {
      name: 'SINGLE VISION',
      desc: 'Distance or Reading',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
    {
      name: 'PROGRESSIVE',
      desc: 'Multi-focal clarity',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      ),
    },
    {
      name: 'BLUE LIGHT',
      desc: 'Digital protection',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      name: 'TRANSITIONS',
      desc: 'Light intelligent',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="22"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="2" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="22" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{
      backgroundColor: '#EDEAE3',
      padding: '48px 60px 52px',
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      boxSizing: 'border-box',
    }}>

      {/* Left — 58% width so heading has full breathing room */}
      <div style={{
        flex: '0 0 58%',
        paddingRight: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '400',
          fontStyle: 'normal',
          color: '#000000',
          lineHeight: '60px',
          marginBottom: '20px',
          fontFamily: '"Bodoni Moda", serif',
          letterSpacing: '0px',
        }}>
          Unsure which lens<br />is right for you?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#444748',
          lineHeight: '28px',
          marginBottom: '32px',
          fontFamily: '"DM Sans", sans-serif',
          maxWidth: '440px',
        }}>
          Answer 5 simple questions about your lifestyle and vision needs to get your perfect lens recommendation.
        </p>
        <button style={{
          backgroundColor: '#0A0A0A',
          color: '#fff',
          padding: '14px 36px',
          fontSize: '11px',
          letterSpacing: '2.5px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '600',
        }}>
          START THE LENS QUIZ
        </button>
      </div>

      {/* Right — 42% width, compact 2×2 cards */}
      <div style={{
        flex: '0 0 42%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
      }}>
        {lensTypes.map((lens, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              padding: '28px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {lens.icon}
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#0A0A0A',
              fontFamily: '"DM Sans", sans-serif',
              marginTop: '6px',
            }}>
              {lens.name}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              {lens.desc}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default LensQuiz
