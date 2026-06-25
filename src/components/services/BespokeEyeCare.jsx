const BespokeEyeCare = () => {
  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="16" cy="16" rx="13" ry="8" stroke="#8B6914" strokeWidth="1.5" fill="none"/>
          <circle cx="16" cy="16" r="4" stroke="#8B6914" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: 'Eye Test',
      description: 'Comprehensive vision check using advanced Zeiss technology.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3L3 12v17h8v-7h6v7h8V12L16 3z" stroke="#8B6914" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: 'Home Visit',
      description: 'Professional optometrist consultation at your residence.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="24" height="22" rx="2" stroke="#8B6914" strokeWidth="1.5" fill="none"/>
          <path d="M4 12h24" stroke="#8B6914" strokeWidth="1.5"/>
          <path d="M10 3v4M22 3v4" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 19l2 2-2 2" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Frame Styling',
      description: 'Personal styling session with our luxury eyewear experts.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 6a5 5 0 0 0-7 7l-12 12a2 2 0 0 0 3 3l12-12a5 5 0 0 0 7-7l-3 3-2-1-1-2 3-3z" stroke="#8B6914" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: 'Repair Clinic',
      description: 'Ultrasonic cleaning and alignment services for your frames.',
    },
  ]

  return (
    <section style={{
      backgroundColor: '#F5F0E8',
      padding: '80px 60px 100px',
    }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{
          fontFamily: '"Bodoni Moda", serif',
          fontSize: '68px',
          fontWeight: '800',
          color: '#0A0A0A',
          margin: 0,
          lineHeight: '1.05',
          letterSpacing: '-1px',
        }}>
          Bespoke Eye Care
        </h2>
        <div style={{
          fontFamily: '"Bodoni Moda", serif',
          fontSize: '68px',
          fontWeight: '500',
          fontStyle: 'italic',
          color: '#8B6914',
          lineHeight: '1.15',
          marginTop: '0px',
        }}>
          Services
        </div>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {services.map((service, index) => (
          <div key={index}>
            {/* Gold line above card */}
            <div style={{
              height: '1.5px',
              backgroundColor: '#8B6914',
              marginBottom: '0',
            }} />

            {/* Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '40px 28px 36px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Icon */}
              <div style={{ marginBottom: '28px' }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Bodoni Moda", serif',
                fontSize: '30px',
                fontWeight: '400',
                color: '#0A0A0A',
                margin: '0 0 16px 0',
                lineHeight: '1.2',
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.65',
                margin: '0 0 40px 0',
                flexGrow: 1,
              }}>
                {service.description}
              </p>

              {/* Book Now */}
              <div style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#8B6914',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                BOOK NOW <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BespokeEyeCare
