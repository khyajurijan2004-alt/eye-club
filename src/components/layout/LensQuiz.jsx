const LensQuiz = () => {
  const lensTypes = [
    { icon: '👁', name: 'SINGLE VISION', desc: 'Distance or Reading' },
    { icon: '⊕', name: 'PROGRESSIVE', desc: 'Multi-focal clarity' },
    { icon: '🖥', name: 'BLUE LIGHT', desc: 'Digital protection' },
    { icon: '☀', name: 'TRANSITIONS', desc: 'Light intelligent' },
  ]

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px', display: 'flex', alignItems: 'center', gap: '80px' }}>

      {/* Left */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#0A0A0A', lineHeight: '1.2', marginBottom: '20px' }}>
          Unsure which lens is right for you?
        </h2>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '32px' }}>
          Answer 5 simple questions about your lifestyle and vision needs to get your perfect lens recommendation.
        </p>
        <button style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '14px 28px', fontSize: '13px', letterSpacing: '2px', border: 'none', cursor: 'pointer' }}>
          START THE LENS QUIZ
        </button>
      </div>

      {/* Right - Lens Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1 }}>
        {lensTypes.map((lens, index) => (
          <div key={index} style={{ backgroundColor: '#fff', padding: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px', color: '#C9A84C' }}>{lens.icon}</span>
            <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', color: '#0A0A0A' }}>{lens.name}</div>
            <div style={{ fontSize: '13px', color: '#888' }}>{lens.desc}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default LensQuiz