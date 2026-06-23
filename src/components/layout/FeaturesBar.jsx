const FeaturesBar = () => {
  const features = [
    { icon: '🚚', text: 'FREE SHIPPING' },
    { icon: '↩', text: '14 DAY RETURNS' },
    { icon: '✓', text: '100% AUTHENTIC' },
    { icon: '💬', text: 'EXPERT SUPPORT' },
  ]

  return (
    <div style={{ backgroundColor: '#C9A84C', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '14px 40px' }}>
      {features.map((feature, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', letterSpacing: '2px', color: '#0A0A0A' }}>
          <span>{feature.icon}</span>
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  )
}

export default FeaturesBar