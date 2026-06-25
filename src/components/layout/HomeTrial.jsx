const HomeTrial = () => {
  const steps = [
    'Choose 5 frames from our Home-Try-On collection.',
    'Keep them for 5 days. Get opinions from family and friends.',
    'Return them for free using the prepaid label.',
  ]

  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" rx="1"/>
          <path d="M16 8h4l3 5v3h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "SHIPPING'S ON US",
      desc: 'Both ways, no hidden fees.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
      ),
      title: 'ZERO PRE-PAY',
      desc: 'We only charge for what you keep.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="7" y1="14" x2="9" y2="16"/>
          <line x1="9" y1="16" x2="13" y2="12"/>
        </svg>
      ),
      title: '5-DAY TRIAL',
      desc: 'Take your time to decide.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'PROFESSIONAL CARE',
      desc: 'Every trial box is sanitized.',
    },
  ]

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '48px 60px',
    }}>
      <div style={{
        backgroundColor: '#EDEAE3',
        borderRadius: '28px',           /* rounder corners like Figma */
        padding: '64px 60px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '48px',
      }}>

        {/* Left */}
        <div style={{ flex: '0 0 50%' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '2.5px',
            color: '#8B6914',
            fontFamily: '"DM Sans", sans-serif',
            marginBottom: '20px',
          }}>
            LUXURY AT YOUR DOOR
          </p>

          <h2 style={{
            fontSize: '64px',             /* bigger to match Figma */
            fontWeight: '400',
            fontStyle: 'normal',
            color: '#0A0A0A',
            lineHeight: '1.08',
            marginBottom: '40px',
            fontFamily: '"Bodoni Moda", serif',
            letterSpacing: '-0.5px',
          }}>
            Try 5 Frames<br />
            at Home,{' '}
            <span style={{ fontStyle: 'italic', color: '#8B6914' }}>Free.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '44px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1.5px solid #8B6914',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '13px',
                  color: '#8B6914',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: '500',
                }}>
                  {i + 1}
                </div>
                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.6',
                  fontFamily: '"DM Sans", sans-serif',
                  margin: '5px 0 0',
                }}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          <button style={{
            backgroundColor: '#0A0A0A',
            color: '#fff',
            padding: '15px 36px',
            fontSize: '11px',
            letterSpacing: '2.5px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: '600',
          }}>
            ORDER YOUR TRIAL BOX
          </button>
        </div>

        {/* Right — 2×2 taller cards to get squarish proportions */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          alignSelf: 'stretch',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              backgroundColor: '#fff',
              borderRadius: '6px',
              padding: '36px 28px',       /* more vertical padding = squarish */
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {f.icon}
              <p style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                color: '#0A0A0A',
                fontFamily: '"DM Sans", sans-serif',
              }}>
                {f.title}
              </p>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#666',
                fontFamily: '"DM Sans", sans-serif',
                lineHeight: '1.6',
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeTrial
