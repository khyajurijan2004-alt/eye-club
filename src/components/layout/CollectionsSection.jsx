const CollectionsSection = () => {
  const shapes = [
    { name: 'ROUND', icon: '○' },
    { name: 'SQUARE', icon: '□' },
    { name: 'AVIATOR', icon: '⬡' },
    { name: 'CAT EYE', icon: '◇' },
    { name: 'RECTANGLE', icon: '▭' },
    { name: 'OVERSIZED', icon: '⬭' },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 80px', textAlign: 'center' }}>

      <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#0A0A0A', marginBottom: '40px' }}>
        Collections by Silhouette
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        {shapes.map((shape, index) => (
          <div key={index} style={{ border: '1px solid #e5e5e5', padding: '28px 24px', width: '140px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '32px', color: '#0A0A0A' }}>{shape.icon}</span>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: '#0A0A0A' }}>{shape.name}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CollectionsSection
