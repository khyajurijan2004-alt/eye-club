const BoutiqueSection = () => {
  const features = [
    {
      title: 'TRUE MIRROR™ REFLECTION',
      desc: 'See how light interacts with gold and acetate finishes.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
    {
      title: '1:1 SIZE ACCURACY',
      desc: 'Calculated dimensions ensure the frame looks exactly as it will on your face.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
    },
    {
      title: '360° MOVEMENT',
      desc: 'Turn your head naturally; the glasses stay anchored with zero latency.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'flex-start',
      minHeight: '700px',
    }}>

      {/* Left Image — no padding, flush to edge */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '20px 20px 20px 20px',
          boxShadow: '4px 0 20px rgba(0,0,0,0.06)',
        }}>
          <div style={{
            width: '480px',
            height: '620px',
            backgroundColor: '#c8c4bc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '13px',
          }}>
            [ Boutique Image ]
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: '32px',
          right: '32px',
          backgroundColor: '#0A0A0A',
          color: '#fff',
          padding: '6px 14px',
          fontSize: '10px',
          letterSpacing: '2px',
          fontWeight: '600',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          LIVE VIEW
        </div>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, padding: '80px 80px 80px 60px' }}>
        <h2 style={{
          fontSize: '80px',
          fontWeight: '400',
          color: '#0A0A0A',
          lineHeight: '1.0',
          marginBottom: '28px',
          fontFamily: '"Bodoni Moda", serif',
          letterSpacing: '-2px',
        }}>
          Hyper-Realistic<br />Virtual Boutique
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#555',
          lineHeight: '1.8',
          marginBottom: '40px',
          maxWidth: '460px',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          Experience frames in stunning detail before you buy. Our augmented reality engine renders light reflection, material texture, and shadow in real-time.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, marginTop: '2px' }}>{feature.icon}</span>
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#0A0A0A',
                  marginBottom: '5px',
                  fontFamily: '"DM Sans", sans-serif',
                }}>
                  {feature.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.7',
                  fontFamily: '"DM Sans", sans-serif',
                }}>
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default BoutiqueSection