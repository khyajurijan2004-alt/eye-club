const BestSellers = () => {
  const products = [
    { name: 'Zephyr Rimless Gold', material: 'Titanium / Luxury Collection', price: 'NPR 12,500', oldPrice: 'NPR 14,000', badge: '15% OFF' },
    { name: 'Onyx Navigator', material: 'Hand-Cut Acetate', price: 'NPR 18,900', badge: null },
    { name: 'Luna Cat Eye', material: 'Tortoiseshell / Feminine', price: 'NPR 15,200', badge: 'NEW' },
    { name: 'Titan Aviator', material: 'Stainless Steel', price: 'NPR 9,900', badge: null },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#C9A84C' }}>CURATED SELECTION</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#0A0A0A' }}>Bestselling Frames</h2>
        <span style={{ fontSize: '13px', letterSpacing: '2px', color: '#0A0A0A', cursor: 'pointer', borderBottom: '1px solid #0A0A0A' }}>VIEW ALL PRODUCTS</span>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {products.map((product, index) => (
          <div key={index} style={{ cursor: 'pointer' }}>

            {/* Image Placeholder */}
            <div style={{ position: 'relative', backgroundColor: '#F5F0E8', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <span style={{ color: '#aaa', fontSize: '13px' }}>[ Product Image ]</span>
              {product.badge && (
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  backgroundColor: product.badge === 'NEW' ? '#0A0A0A' : '#C9A84C',
                  color: '#fff', padding: '4px 10px', fontSize: '11px', letterSpacing: '1px'
                }}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0A0A0A', marginBottom: '4px' }}>{product.name}</div>
                <div style={{ fontSize: '13px', color: '#888' }}>{product.material}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0A0A0A' }}>{product.price}</div>
                {product.oldPrice && (
                  <div style={{ fontSize: '12px', color: '#aaa', textDecoration: 'line-through' }}>{product.oldPrice}</div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default BestSellers