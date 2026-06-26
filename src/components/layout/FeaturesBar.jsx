const FeaturesBar = () => {
  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      label: 'FREE SHIPPING'
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
        </svg>
      ),
      label: '14 DAY RETURNS'
    },
  {
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {/* Wavy/Starburst Badge Outline */}
      <path d="M12 2l3.09 1.79L18.5 3l.6 3.5 3.1 1.78-1.19 3.4 1.19 3.4-3.1 1.78-.6 3.5-3.41-.79L12 22l-3.09-1.79L5.5 21l-.6-3.5-3.1-1.78 1.19-3.4L1.7 8.92l3.1-1.78.6-3.5 3.41.79L12 2z" />
      {/* Checkmark inside */}
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  label: '100% AUTHENTIC'
},
{
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {/* Outer Headset Arch */}
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round"/>
      
      {/* Left and Right Blocky Ear Pads */}
      <rect x="1.5" y="10.5" width="2.5" height="5.5" rx="1" fill="#0A0A0A"/>
      <rect x="20" y="10.5" width="2.5" height="5.5" rx="1" fill="#0A0A0A"/>
      
      {/* Figma Hair Elements (Bangs) */}
      <path d="M5.5 10C6.5 7.5 9 6.5 11.5 7.5C11.5 7.5 8.5 9.5 5.5 10Z" fill="#0A0A0A"/>
      <path d="M18.5 10C17.5 7.5 15 6.5 12.5 7.5C12.5 7.5 15.5 9.5 18.5 10Z" fill="#0A0A0A"/>
      
      {/* The Two Solid Circle Eyes */}
      <circle cx="9" cy="12.5" r="1.2" fill="#0A0A0A"/>
      <circle cx="15" cy="12.5" r="1.2" fill="#0A0A0A"/>
      
      {/* Straight L-Shaped Figma Microphone Bar */}
      <path d="M21 15V18.5H12" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter"/>
    </svg>
  ),
  label: 'EXPERT SUPPORT'
}
  ]

  return (
    <div style={{
      backgroundColor: '#E8C96B',
      padding: '16px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {features.map((feature, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          {feature.icon}
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '2px',
            color: '#0A0A0A',
            fontFamily: '"DM Sans", sans-serif',
          }}>
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default FeaturesBar