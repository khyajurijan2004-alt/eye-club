const CollectionsSection = () => {
  const shapes = [
    { name: 'ROUND', icon: '○' },
    { name: 'SQUARE', icon: '□' },
    { name: 'AVIATOR', icon: '⬡' },
    { name: 'CAT EYE', icon: '◇' },
    { name: 'RECTANGLE', icon: '▭' },
    { name: 'OVERSIZED', icon: '⬭' },
    { name: 'PANTO', icon: '⬮' },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 80px', textAlign: 'center' }}>

      <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#0A0A0A', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
        Collections by Silhouette
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {shapes.map((shape, index) => (
          <div
            key={index}
            style={{
              border: index === 0 ? '1px solid #C9A84C' : '1px solid #e5e5e5',
              backgroundColor: index === 0 ? '#fff' : 'transparent',
              padding: '28px 24px',
              width: '130px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontSize: '30px', color: '#0A0A0A' }}>{shape.icon}</span>
            <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#0A0A0A' }}>{shape.name}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CollectionsSection