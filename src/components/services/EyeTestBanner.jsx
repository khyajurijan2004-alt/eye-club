const EyeTestBanner = () => {
  return (
    <div style={{
      backgroundColor: '#C9A84C',
      padding: '20px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          backgroundColor: '#0A0A0A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#C9A84C', fontSize: '18px', flexShrink: 0,
        }}>
          +
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '2px', color: '#0A0A0A' }}>
            GET A FREE PROFESSIONAL EYE TEST
          </div>
          <div style={{ fontSize: '13px', color: '#6b5a2a' }}>
            Available at all Eye Club Flagship stores. Valued at NPR 1,500.
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0A0A0A' }}>15+</div>
          <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#6b5a2a' }}>FLAGSHIP STORES</div>
        </div>
        <button style={{
          backgroundColor: '#0A0A0A', color: '#fff',
          padding: '14px 28px', fontSize: '12px', letterSpacing: '2px',
          border: 'none', cursor: 'pointer', fontWeight: '700', whiteSpace: 'nowrap',
        }}>
          FIND NEAREST STORE
        </button>
      </div>
    </div>
  )
}

export default EyeTestBanner
