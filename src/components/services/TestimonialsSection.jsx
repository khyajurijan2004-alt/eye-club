const testimonials = [
  {
    quote: 'The AI Face Scan is a game changer. I\'ve always struggled to find frames that don\'t slide off my nose. The recommended pair fits like a second skin.',
    name: 'Aaryan Sharma',
    title: 'Creative Director',
    initials: 'AS',
  },
  {
    quote: 'Unparalleled luxury service in Kathmandu. The home visit was professional and very convenient for my busy schedule. Highly recommended.',
    name: 'Reeya Gurung',
    title: 'Business Owner',
    initials: 'RG',
    featured: true,
  },
  {
    quote: 'I bought the membership for the BOGO offer but stayed for the incredible after-sales service. They handle my frames like fine jewelry.',
    name: 'Nikesh Thapa',
    title: 'Tech Lead',
    initials: 'NT',
  },
]

const TestimonialsSection = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 80px' }}>

      <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#0A0A0A', textAlign: 'center', marginBottom: '56px', lineHeight: '1.2' }}>
        The World's Best Eyes<br />Choose Eye Club
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${t.featured ? '#C9A84C' : '#eee'}`,
              padding: '36px 32px',
              position: 'relative',
            }}
          >
            {/* Big quote mark */}
            <div style={{ fontSize: '48px', color: '#C9A84C', lineHeight: '0.8', fontFamily: 'Georgia, serif', marginBottom: '16px', opacity: 0.6 }}>
              99
            </div>

            {/* Stars */}
            <div style={{ color: '#C9A84C', fontSize: '14px', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>

            <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.7', marginBottom: '28px', fontStyle: 'italic' }}>
              "{t.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                backgroundColor: '#0A0A0A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px',
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0A0A0A' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
