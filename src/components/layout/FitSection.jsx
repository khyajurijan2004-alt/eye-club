const FitSection = () => {
  const steps = [
    {
      number: '01.',
      title: 'Scan',
      desc: 'Turn your camera on. Our AI captures your facial topography in less than 10 seconds.'
    },
    {
      number: '02.',
      title: 'Detect',
      desc: 'We calculate inter-pupillary distance, cheekbone height, and facial width with 99.8% accuracy.'
    },
    {
      number: '03.',
      title: 'Recommend',
      desc: 'Receive a curated gallery of frames that fit you like a bespoke suit.'
    },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 80px', textAlign: 'center' }}>

      {/* Badge */}
      <div style={{ display: 'inline-block', backgroundColor: '#f0ede8', padding: '6px 16px', fontSize: '11px', letterSpacing: '3px', marginBottom: '24px', color: '#888' }}>
        POWERED BY AI
      </div>

      {/* Title */}
      <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#0A0A0A', marginBottom: '16px', lineHeight: '1.2' }}>
        The Perfect Fit,{' '}
        <span style={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
          Guaranteed.
        </span>
      </h2>

      <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6' }}>
        Our proprietary AI scans 30,000 mapping points on your face to recommend the exact frame shape and size that complements your unique features.
      </p>

      {/* 3 Cards */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '48px' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ flex: 1, maxWidth: '320px', border: '1px solid #e5e5e5', padding: '40px 32px', textAlign: 'left' }}>
            <div style={{ fontSize: '24px', color: '#C9A84C', marginBottom: '16px' }}>◫</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#0A0A0A' }}>
              {step.number} {step.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button style={{ backgroundColor: '#0A0A0A', color: '#fff', padding: '16px 36px', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        TRY AI FACE SCAN NOW →
      </button>

    </section>
  )
}

export default FitSection