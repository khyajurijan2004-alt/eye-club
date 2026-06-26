import boutiqueTablet from '../../assets/images/boutique.png'

const BoutiqueSection = () => {
  const features = [
    {
      title: 'TRUE MIRROR™ REFLECTION',
      desc: 'See how light interacts with gold and acetate finishes.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <path d="M12 3L13.5 8h5l-4 3 1.5 5L12 13l-4 3 1.5-5-4-3h5z"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
    },
    {
      title: '1:1 SIZE ACCURACY',
      desc: 'Calculated dimensions ensure the frame looks exactly as it will on your face.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
    },
    {
      title: '360° MOVEMENT',
      desc: 'Turn your head naturally; the glasses stay anchored with zero latency.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  minHeight: '700px',
  padding: '80px 80px 80px 120px',
  gap: '80px',
}}>

      {/* Left Image */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '24px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
          borderRadius: '4px',
        }}>
          <div style={{ width: '440px', height: '560px', overflow: 'hidden' }}>
            <img
              src={boutiqueTablet}
              alt="Virtual Try-On"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>
        {/* LIVE VIEW badge */}
        <div style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
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
      <div style={{ flex: 1, paddingLeft: '60px' }}>
        <h2 style={{
          fontSize: '72px',
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
          marginBottom: '48px',
          maxWidth: '460px',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          Experience frames in stunning detail before you buy. Our augmented reality engine renders light reflection, material texture, and shadow in real-time.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, marginTop: '2px' }}>{feature.icon}</span>
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#0A0A0A',
                  marginBottom: '6px',
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