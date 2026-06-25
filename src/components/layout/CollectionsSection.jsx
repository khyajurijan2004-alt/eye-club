const CollectionsSection = () => {
  const shapes = [
    {
      name: 'ROUND',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" stroke="#2B2B2B" strokeWidth="1.5">
          <circle cx="22" cy="22" r="14" />
        </svg>
      )
    },
    {
      name: 'SQUARE',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" stroke="#2B2B2B" strokeWidth="1.5">
          <rect x="8" y="8" width="28" height="28" rx="2" />
        </svg>
      )
    },
    {
      name: 'AVIATOR',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" stroke="#2B2B2B" strokeWidth="1.5">
          <path d="M4 10 Q22 6 40 10 Q44 22 40 34 Q22 38 4 34 Q0 22 4 10Z" />
        </svg>
      )
    },
    {
      name: 'CAT EYE',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" stroke="#2B2B2B" strokeWidth="1.5">
          <polygon points="22,10 38,34 6,34" />
        </svg>
      )
    },
    {
      name: 'RECTANGLE',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none" stroke="#2B2B2B" strokeWidth="1.5">
          <rect x="4" y="15" width="36" height="14" rx="1" />
        </svg>
      )
    },
    {
      name: 'OVERSIZED',
      icon: (
        <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
          <rect x="2" y="14" width="8" height="16" rx="4" fill="#3D3D3D" />
          <rect x="13" y="10" width="18" height="24" rx="4" fill="none" stroke="#3D3D3D" strokeWidth="2.5" />
          <rect x="34" y="14" width="8" height="16" rx="4" fill="#3D3D3D" />
        </svg>
      )
    }
  ]

  return (
    <section
      style={{
        backgroundColor: '#F3F1EC',
        padding: '42px 0',
        borderBottom: '1px solid #D8D3C8',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '26px',
          fontWeight: '500',
          color: '#0A0A0A',
          marginBottom: '32px',
          fontFamily: '"Bodoni Moda", serif',
        }}
      >
        Collections by Silhouette
      </h2>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'nowrap',
          }}
        >
          {shapes.map((shape, index) => (
            <div
              key={index}
              style={{
                width: '190px',
                height: '110px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #D9D5CC',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                gap: '12px',

                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 6px 18px rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {shape.icon}

              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '2.2px',
                  fontWeight: '600',
                  color: '#111111',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {shape.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsSection