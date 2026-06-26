import boutiqueTablet from '../../assets/images/boutique.png'

const BoutiqueSection = () => {
  const features = [
    {
      title: 'TRUE MIRROR™ REFLECTION',
      desc: 'See how light interacts with gold and acetate finishes.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="2" x2="12" y2="4" strokeLinecap="round"/>
          <line x1="12" y1="20" x2="12" y2="22" strokeLinecap="round"/>
          <line x1="2" y1="12" x2="4" y2="12" strokeLinecap="round"/>
          <line x1="20" y1="12" x2="22" y2="12" strokeLinecap="round"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: '1:1 SIZE ACCURACY',
      desc: 'Calculated dimensions ensure the frame looks exactly as it will on your face.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <polyline points="7 4 7 8 2 8" fill="none"/>
          <polyline points="17 20 17 16 22 16" fill="none"/>
        </svg>
      ),
    },
    {
      title: '360° MOVEMENT',
      desc: 'Turn your head naturally; the glasses stay anchored with zero latency.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
          <path d="M12 2a10 10 0 0 1 7.07 17.07" strokeLinecap="round"/>
          <path d="M12 22a10 10 0 0 1-7.07-17.07" strokeLinecap="round"/>
          <polyline points="16 6 19 3 22 6"/>
          <polyline points="8 18 5 21 2 18"/>
          <text x="12" y="14" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#C9A84C" stroke="none" fontFamily="DM Sans, sans-serif">3D</text>
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
                  color: '#0A0A0A',
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
