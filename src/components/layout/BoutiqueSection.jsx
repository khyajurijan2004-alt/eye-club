const BoutiqueSection = () => {
  const features = [
    { title: 'TRUE MIRROR™ REFLECTION', desc: 'See how light interacts with gold and acetate finishes.' },
    { title: '1:1 SIZE ACCURACY', desc: 'Calculated dimensions ensure the frame looks exactly as it will on your face.' },
    { title: '360° MOVEMENT', desc: 'Turn your head naturally; the glasses stay anchored with zero latency.' },
  ]

  return (
    <section style={{ backgroundColor: '#EDEAE3', padding: '80px', display: 'flex', alignItems: 'center', gap: '80px', minHeight: '600px' }}>

      {/* Left Image */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{ width: '540px', height: '580px', backgroundColor: '#c8c4bc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '14px' }}>
          [ Boutique Image ]
        </div>
        <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#0A0A0A', color: '#fff', padding: '6px 14px', fontSize: '11px', letterSpacing: '2px' }}>
          LIVE VIEW
        </div>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1, maxWidth: '480px' }}>
        <h2 style={{ fontSize: '52px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.15', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
          Hyper-Realistic Virtual Boutique
        </h2>

        <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8', marginBottom: '40px' }}>
          Experience frames in stunning detail before you buy. Our augmented reality engine renders light reflection, material texture, and shadow in real-time.
        </p>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ color: '#C9A84C', fontSize: '16px', marginTop: '3px', flexShrink: 0 }}>✦</span>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', color: '#0A0A0A', marginBottom: '6px' }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
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