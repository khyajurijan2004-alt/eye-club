const BoutiqueSection = () => {
  const features = [
    { title: 'TRUE MIRROR™ REFLECTION', desc: 'See how light interacts with gold and acetate finishes.' },
    { title: '1:1 SIZE ACCURACY', desc: 'Calculated dimensions ensure the frame looks exactly as it will on your face.' },
    { title: '360° MOVEMENT', desc: 'Turn your head naturally; the glasses stay anchored with zero latency.' },
  ]

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px', display: 'flex', alignItems: 'center', gap: '80px' }}>

      {/* Left Image */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{ width: '460px', height: '500px', backgroundColor: '#d0ccc4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '14px' }}>
          [ Boutique Image ]
        </div>
        <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#0A0A0A', color: '#fff', padding: '6px 12px', fontSize: '11px', letterSpacing: '2px' }}>
          LIVE VIEW
        </div>
      </div>

      {/* Right Content */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '44px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.2', marginBottom: '20px' }}>
          Hyper-Realistic Virtual Boutique
        </h2>

        <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '36px' }}>
          Experience frames in stunning detail before you buy. Our augmented reality engine renders light reflection, material texture, and shadow in real-time.
        </p>

        {/* Feature List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#C9A84C', fontSize: '18px', marginTop: '2px' }}>✦</span>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#0A0A0A', marginBottom: '4px' }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
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