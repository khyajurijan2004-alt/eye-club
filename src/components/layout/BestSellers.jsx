import { useState } from 'react'

const BestSellers = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const products = [
    {
      name: 'Zephyr Rimless Gold',
      material: 'Titanium / Luxury Collection',
      price: 'NPR 12,500',
      oldPrice: 'NPR 14,000',
      badge: '15% OFF',
      // Rimless/thin gold frames on light background
      img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&q=80&fit=crop',
    },
    {
      name: 'Onyx Navigator',
      material: 'Hand-Cut Acetate',
      price: 'NPR 18,900',
      badge: null,
      // Bold black square acetate frames
      img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=80&fit=crop',
    },
    {
      name: 'Luna Cat Eye',
      material: 'Tortoiseshell / Feminine',
      price: 'NPR 15,200',
      badge: 'NEW',
      // Cat eye tortoiseshell sunglasses
      img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80&fit=crop',
    },
    {
      name: 'Titan Aviator',
      material: 'Stainless Steel',
      price: 'NPR 9,900',
      badge: null,
      // Classic aviator sunglasses
      img: 'https://images.unsplash.com/photo-1567473810954-507d59716c25?w=600&q=80&fit=crop',
    },
  ]

  return (
    <section style={{ backgroundColor: '#fff', padding: '48px 60px 72px' }}>

      <div style={{ marginBottom: '6px' }}>
        <span style={{
          fontSize: '11px',
          letterSpacing: '2.5px',
          color: '#8B6914',
          fontWeight: '600',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          CURATED SELECTION
        </span>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '40px',
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '400',
          color: '#0A0A0A',
          margin: 0,
          fontFamily: '"Bodoni Moda", serif',
          letterSpacing: '-0.3px',
        }}>
          Bestselling Frames
        </h2>
        <span style={{
          fontSize: '11px',
          letterSpacing: '2px',
          color: '#0A0A0A',
          cursor: 'pointer',
          borderBottom: '1px solid #0A0A0A',
          paddingBottom: '2px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '600',
        }}>
          VIEW ALL PRODUCTS
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {products.map((product, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              cursor: 'pointer',
              transform: hoveredCard === index ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'transform 0.2s ease',
            }}
          >
            <div style={{
              position: 'relative',
              height: '320px',
              marginBottom: '16px',
              overflow: 'hidden',
              backgroundColor: '#F0EDE6',
            }}>
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                  transform: hoveredCard === index ? 'scale(1.04)' : 'scale(1)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />

              {product.badge && (
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: product.badge === 'NEW' ? '#8B6914' : '#C9A84C',
                  color: product.badge === 'NEW' ? '#fff' : '#0A0A0A',
                  padding: '5px 14px',
                  fontSize: '10px',
                  letterSpacing: '1.5px',
                  fontWeight: '700',
                  fontFamily: '"DM Sans", sans-serif',
                  borderRadius: '20px',
                }}>
                  {product.badge}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#0A0A0A',
                  marginBottom: '4px',
                  fontFamily: '"DM Sans", sans-serif',
                  borderBottom: hoveredCard === index ? '1px solid #8B6914' : '1px solid transparent',
                  transition: 'border-color 0.2s',
                  display: 'inline-block',
                }}>
                  {product.name}
                </div>
                <div style={{ fontSize: '13px', color: '#999', fontFamily: '"DM Sans", sans-serif' }}>
                  {product.material}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#0A0A0A', fontFamily: '"DM Sans", sans-serif' }}>
                  {product.price}
                </div>
                {product.oldPrice && (
                  <div style={{ fontSize: '12px', color: '#bbb', textDecoration: 'line-through', fontFamily: '"DM Sans", sans-serif' }}>
                    {product.oldPrice}
                  </div>
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
