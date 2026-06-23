import { useState } from 'react'

const contactCards = [
  { icon: '☎', label: 'CALL US', value: '+977 1 4422XXX' },
  { icon: '✉', label: 'WHATSAPP', value: '+977 9801XXXXXX' },
  { icon: '◎', label: 'EMAIL', value: 'boutique@eyeclub.com' },
  { icon: '◉', label: 'STORES', value: 'Durbar Marg & Pulchowk' },
]

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    fontSize: '13px',
    border: '1px solid #ddd',
    outline: 'none',
    color: '#0A0A0A',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }

  return (
    <section style={{ backgroundColor: '#F5F0E8', padding: '80px 80px' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left — Contact cards */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {contactCards.map((card, i) => (
              <div key={i} style={{ backgroundColor: '#fff', padding: '28px 24px', border: '1px solid #e8e3db' }}>
                <div style={{ fontSize: '20px', color: '#C9A84C', marginBottom: '12px' }}>{card.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', color: '#888', marginBottom: '6px' }}>{card.label}</div>
                <div style={{ fontSize: '15px', color: '#0A0A0A', fontWeight: '500' }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0A0A0A', marginBottom: '32px' }}>
            Send an Inquiry
          </h2>

          {sent ? (
            <div style={{ padding: '40px', backgroundColor: '#fff', textAlign: 'center', border: '1px solid #e8e3db' }}>
              <div style={{ fontSize: '28px', color: '#C9A84C', marginBottom: '12px' }}>✓</div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#0A0A0A', marginBottom: '8px' }}>Message sent!</div>
              <div style={{ fontSize: '14px', color: '#666' }}>We'll be in touch within one business day.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" style={inputStyle} />
              </div>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                style={{ ...inputStyle, color: form.interest ? '#0A0A0A' : '#aaa' }}
              >
                <option value="" disabled>Interested in...</option>
                <option value="eye-test">Eye Test</option>
                <option value="home-visit">Home Visit</option>
                <option value="membership">Membership</option>
                <option value="frame-styling">Frame Styling</option>
                <option value="repair">Repair Clinic</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
              />
              <button
                onClick={() => { if (form.name && form.email && form.message) setSent(true) }}
                style={{
                  backgroundColor: '#0A0A0A', color: '#fff',
                  padding: '14px', fontSize: '12px', letterSpacing: '2px',
                  border: 'none', cursor: 'pointer', fontWeight: '700',
                  opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                }}
              >
                SEND MESSAGE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
