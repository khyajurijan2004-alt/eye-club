const FeaturesBar = () => {
  const features = [
    { icon: '🚚', title: 'FREE SHIPPING', desc: 'Both ways, no hidden fees.' },
    { icon: '↩', title: '14 DAY RETURNS', desc: 'Easy returns within 14 days.' },
    { icon: '✓', title: '100% AUTHENTIC', desc: 'Genuine products, guaranteed.' },
    { icon: '💬', title: 'EXPERT SUPPORT', desc: 'Our team is here to help.' },
  ]

  return (
    <div style={{ backgroundColor: '#EAE4D9', padding: '48px 40px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '16px', maxWidth: '900px', width: '100%' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>{feature.icon}</span>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#1A1A1A', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>
              {feature.title}
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#555', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesBar
