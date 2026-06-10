import React, { useState } from 'react';
import { Sparkles, Sun, Star, Compass, Heart, Eye, Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, CreditCard, Receipt, Printer, ArrowRight } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  
  // State for selections
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    vastuAddress: ''
  });

  // Simulation states
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const servicesList = [
    {
      id: 'vastu',
      title: 'Vastu Consultation',
      category: 'Vastu',
      sub: 'Directions, Placements & Energy Corrections',
      price: 5100,
      duration: '90 Mins',
      icon: <Sun size={20} style={{ color: 'var(--color-gold)' }} />
    },
    {
      id: 'numerology',
      title: 'Numerology Consultation',
      category: 'Numerology',
      sub: 'Vibrational Frequency & Lo Shu Grid',
      price: 3100,
      duration: '60 Mins',
      icon: <Sparkles size={20} style={{ color: 'var(--color-gold)' }} />
    },
    {
      id: 'astrology',
      title: 'Astrology Consultation',
      category: 'Astrology',
      sub: 'Kundli Readings & Planetary Cures',
      price: 4100,
      duration: '75 Mins',
      icon: <Compass size={20} style={{ color: 'var(--color-gold)' }} />
    },
    {
      id: 'tarot',
      title: 'Tarot Reading',
      category: 'Tarot',
      sub: 'Intuitive Insight & Future Paths',
      price: 2100,
      duration: '45 Mins',
      icon: <Eye size={20} style={{ color: 'var(--color-gold)' }} />
    },
    {
      id: 'counselling',
      title: 'Relationship Counselling',
      category: 'Counselling',
      sub: 'Mutual Understanding & Connection',
      price: 3500,
      duration: '60 Mins',
      icon: <Heart size={20} style={{ color: 'var(--color-gold)' }} />
    }
  ];

  const categories = ['ALL', 'Vastu', 'Numerology', 'Astrology', 'Tarot', 'Counselling'];

  const filteredServices = selectedCategory === 'ALL' 
    ? servicesList 
    : servicesList.filter(s => s.category === selectedCategory);

  // Interactive Monthly Calendar Logic
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  
  const viewYear = currentMonth.getFullYear();
  const viewMonth = currentMonth.getMonth();
  const daysCount = getDaysInMonth(viewYear, viewMonth);
  const firstDayIndex = getFirstDayOfMonth(viewYear, viewMonth);
  
  const handlePrevMonth = () => {
    const today = new Date();
    if (viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth())) {
      setCurrentMonth(new Date(viewYear, viewMonth - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(viewYear, viewMonth + 1, 1));
  };

  const timeSlots = [
    { label: 'Morning slots', slots: ['10:00 AM', '11:15 AM', '11:30 AM'] },
    { label: 'Afternoon slots', slots: ['02:00 PM', '03:15 PM', '04:30 PM'] },
    { label: 'Evening slots', slots: ['05:45 PM', '06:00 PM', '07:15 PM'] }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate Razorpay secure payment checkout flow
  const triggerRazorpayCheckout = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email, and Phone to proceed.");
      return;
    }
    
    setIsProcessingPayment(true);
    
    // Simulate Razorpay Gateway Opening & Loading
    setTimeout(() => {
      // Create random Txn ID
      const fakeTxnId = 'pay_' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setTransactionId(fakeTxnId);
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      setStep(4);
    }, 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const today = new Date();
  today.setHours(0,0,0,0);

  // Render month days array
  const monthDays = [];
  // padding empty items
  for (let i = 0; i < firstDayIndex; i++) {
    monthDays.push(null);
  }
  // normal active items
  for (let d = 1; d <= daysCount; d++) {
    monthDays.push(new Date(viewYear, viewMonth, d));
  }

  return (
    <div style={{ padding: '45px 20px 60px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Title */}
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ color: 'var(--color-gold)', letterSpacing: '0.25em', fontSize: '0.75rem', fontWeight: 'bold' }}>SECURE SCHEDULING</span>
        <h1 style={{ fontSize: '2.3rem', marginTop: '8px', marginBottom: '8px' }} className="gold-gradient-text">Book An Appointment</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Align your vibrations in just a few intuitive steps.</p>
      </section>

      {/* Booking Steps Progress Indicator */}
      <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 24px', borderRadius: '12px', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        {[
          { number: 1, label: 'Select Service', icon: <Sparkles size={14} /> },
          { number: 2, label: 'Date & Time', icon: <Calendar size={14} /> },
          { number: 3, label: 'Basic Details', icon: <User size={14} /> },
          { number: 4, label: 'Payment & Receipt', icon: <CreditCard size={14} /> }
        ].map((s) => {
          const isActive = step === s.number;
          const isCompleted = step > s.number;
          return (
            <div key={s.number} style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: isActive || isCompleted ? 1 : 0.4 }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: isActive ? 'var(--color-gold)' : isCompleted ? '#22c55e' : 'var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isActive || isCompleted ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                boxShadow: isActive ? '0 0 10px rgba(16, 185, 129, 0.4)' : 'none'
              }}>
                {isCompleted ? <CheckCircle2 size={16} style={{ color: '#ffffff' }} /> : s.number}
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: isActive ? '600' : '400', color: isActive ? 'var(--color-gold)' : 'var(--text-primary)' }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Step Contents */}
      <div className="glass-panel" style={{ padding: '24px 30px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>Choose a Spiritual Service</h2>
            
            {/* Category selection tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? 'var(--color-gold)' : 'var(--bg-dark)',
                    border: '1px solid var(--border-glass)',
                    color: selectedCategory === cat ? '#000000' : 'var(--text-primary)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services List Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {filteredServices.map((service) => {
                const isSelected = selectedService?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px',
                      borderRadius: '16px',
                      background: isSelected ? 'rgba(16, 185, 129,0.05)' : 'var(--bg-dark)',
                      border: isSelected ? '2px solid var(--color-gold)' : '1px solid var(--border-glass)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(16, 185, 129,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{service.title}</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{service.sub}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.2rem', display: 'block' }}>
                          ₹{service.price}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {service.duration}
                        </span>
                      </div>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '2px solid var(--color-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isSelected ? 'var(--color-gold)' : 'transparent'
                      }}>
                        {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000' }} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button
                disabled={!selectedService}
                onClick={() => setStep(2)}
                className="cosmic-button"
                style={{ opacity: selectedService ? 1 : 0.5, cursor: selectedService ? 'pointer' : 'not-allowed' }}
              >
                Choose Date & Time <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>Select Date & Energy Time Alignment</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
              
              {/* Entire Month Custom Grid Calendar */}
              <div>
                {/* Monthly switcher header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h4 style={{ color: 'var(--color-gold)', letterSpacing: '0.05em', margin: 0 }}>Choose Date</h4>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button 
                      onClick={handlePrevMonth}
                      style={{
                        background: 'var(--bg-dark)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        color: 'var(--color-gold)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s'
                      }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    <span style={{ fontSize: '0.95rem', fontWeight: 'bold', minWidth: '90px', textAlign: 'center' }}>
                      {currentMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                    </span>

                    <button 
                      onClick={handleNextMonth}
                      style={{
                        background: 'var(--bg-dark)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        color: 'var(--color-gold)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s'
                      }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Day Labels */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '10px', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-gold)', opacity: 0.8 }}>
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>

                {/* Day Grid Matrix */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                  {monthDays.map((date, idx) => {
                    if (!date) {
                      return <div key={`empty-${idx}`} />
                    }

                    const isPast = date < today;
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    
                    return (
                      <button
                        key={idx}
                        disabled={isPast}
                        onClick={() => setSelectedDate(date)}
                        style={{
                          background: isSelected 
                            ? 'var(--color-gold)' 
                            : 'var(--bg-dark)',
                          border: isSelected 
                            ? '1px solid var(--color-gold)' 
                            : '1px solid var(--border-glass)',
                          color: isSelected 
                            ? '#000000' 
                            : isPast ? 'var(--text-muted)' : 'var(--text-primary)',
                          borderRadius: '8px',
                          aspectRatio: '1/1',
                          cursor: isPast ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          fontWeight: isSelected || !isPast ? 'bold' : 'normal',
                          transition: 'all 0.3s'
                        }}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div>
                <h4 style={{ color: 'var(--color-gold)', marginBottom: '15px', letterSpacing: '0.05em' }}>Available Energy Slots</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {timeSlots.map((group, gIdx) => (
                    <div key={gIdx}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                        {group.label}
                      </span>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {group.slots.map((slot) => {
                          const isSelected = selectedTimeSlot === slot;
                          return (
                            <button
                              key={slot}
                              onClick={() => setSelectedTimeSlot(slot)}
                              style={{
                                background: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-dark)',
                                border: isSelected ? '1px solid var(--color-gold)' : '1px solid var(--border-glass)',
                                color: isSelected ? 'var(--color-gold)' : 'var(--text-primary)',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                transition: 'all 0.3s'
                              }}
                            >
                              <Clock size={12} style={{ marginRight: '5px', verticalAlign: 'middle', display: 'inline' }} />
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
              <button
                onClick={() => setStep(1)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button
                disabled={!selectedDate || !selectedTimeSlot}
                onClick={() => setStep(3)}
                className="cosmic-button"
                style={{ opacity: selectedDate && selectedTimeSlot ? 1 : 0.5, cursor: selectedDate && selectedTimeSlot ? 'pointer' : 'not-allowed' }}
              >
                Add Your Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Add Details & Customer Form */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>Divine Consultation Particulars</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              
              {/* Form columns */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '6px' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@domain.com"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter 10 digit phone number"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              {/* Dynamic inputs based on service category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {(selectedService?.category === 'Astrology' || selectedService?.category === 'Numerology' || selectedService?.category === 'Tarot') && (
                  <>
                    <h5 style={{ color: 'var(--color-gold)', margin: '0 0 5px' }}>Birth Alignment Data (Highly Recommended)</h5>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Birth Date</label>
                        <input
                          type="date"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Birth Time</label>
                        <input
                          type="time"
                          name="birthTime"
                          value={formData.birthTime}
                          onChange={handleInputChange}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Birth Place</label>
                      <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        placeholder="City, State, Country"
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                      />
                    </div>
                  </>
                )}

                {selectedService?.category === 'Vastu' && (
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '6px' }}>Site Address for Vastu</label>
                    <textarea
                      name="vastuAddress"
                      value={formData.vastuAddress}
                      onChange={handleInputChange}
                      placeholder="Enter the full address of residential or office plot"
                      rows={3}
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '6px' }}>Energy Focus or Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us what you would like to focus on during the reading..."
                    rows={formData.vastuAddress ? 2 : 4}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
              <button
                onClick={() => setStep(2)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ChevronLeft size={16} /> Back
              </button>
              <button
                disabled={!formData.name || !formData.email || !formData.phone}
                onClick={triggerRazorpayCheckout}
                className="gold-button"
                style={{ opacity: formData.name && formData.email && formData.phone ? 1 : 0.5 }}
              >
                Secure Razorpay Checkout <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Razorpay Receipt & Download (Printed Step) */}
        {step === 4 && paymentSuccess && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', animation: 'fadeInContent 0.8s ease forwards' }}>
            
            {/* Success Card Header */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '3px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22c55e',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#22c55e', margin: 0 }}>
                Consultation Confirmed!
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem' }}>
                Your celestial appointment has been locked with Uppasna Keshwani. A link to join the meeting has been sent to your email inbox.
              </p>
            </div>

            {/* Printable Digital Receipt Card */}
            <div id="receipt-card" style={{
              background: 'var(--bg-card)',
              border: '2px dashed var(--color-gold)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              color: 'var(--text-primary)'
            }}>
              
              {/* Receipt Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129,0.15)', paddingBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="https://achyutammaestro.com/wp-content/uploads/2026/01/achyutham-logo.jpeg" 
                    alt="Logo" 
                    style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid var(--color-gold)' }} 
                  />
                  <div>
                    <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>ACHYUTAM MAESTRO</h3>
                    <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.05em' }}>VASTU, ASTROLOGY & NUMEROLOGY</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>TRANSACTION ID</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', fontFamily: 'monospace', color: 'var(--color-gold)' }}>{transactionId}</span>
                </div>
              </div>

              {/* Booking & Personal parameters */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '4px' }}>CLIENT DETAILS</span>
                  <span style={{ display: 'block', fontWeight: '600' }}>{formData.name}</span>
                  <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>{formData.email}</span>
                  <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>{formData.phone}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '4px' }}>ENERGY APPOINTMENT</span>
                  <span style={{ display: 'block', fontWeight: '600' }}>{selectedService?.title}</span>
                  <span style={{ display: 'block', color: 'var(--text-muted)' }}>
                    <Calendar size={12} style={{ marginRight: '5px', display: 'inline', verticalAlign: 'middle' }} />
                    {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span style={{ display: 'block', color: 'var(--text-muted)' }}>
                    <Clock size={12} style={{ marginRight: '5px', display: 'inline', verticalAlign: 'middle' }} />
                    {selectedTimeSlot} ({selectedService?.duration})
                  </span>
                </div>
              </div>

              {/* Specific metadata details */}
              {(formData.birthDate || formData.vastuAddress) && (
                <div style={{ background: 'var(--bg-dark)', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-glass)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '6px' }}>SUBMITTED PARTICULARS</span>
                  {formData.birthDate && (
                    <div style={{ marginBottom: '5px' }}>
                      <strong>Birth Parameters:</strong> {formData.birthDate} at {formData.birthTime || 'N/A'} in {formData.birthPlace || 'N/A'}
                    </div>
                  )}
                  {formData.vastuAddress && (
                    <div>
                      <strong>Site Address:</strong> {formData.vastuAddress}
                    </div>
                  )}
                </div>
              )}

              {/* Pricing item list */}
              <div style={{ borderTop: '1px solid rgba(16, 185, 129,0.15)', paddingTop: '15px', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <span>{selectedService?.title} Consultation (1)</span>
                  <span>₹{selectedService?.price.toLocaleString('en-IN')}.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <span>Razorpay Gateway Charges & GST</span>
                  <span style={{ color: '#22c55e' }}>FREE / INCLUDED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-glass)', paddingTop: '10px', marginTop: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'var(--color-gold)' }}>TOTAL ENERGY EXCHANGE PAID</span>
                  <span style={{ color: 'var(--color-gold)' }}>₹{selectedService?.price.toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              {/* Receipt Footer stamp */}
              <div style={{ textAlign: 'center', borderTop: '1px solid rgba(16, 185, 129,0.15)', paddingTop: '15px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>Securely Processed via Razorpay standard SDK. This is a system-generated receipt. No signature required.</span>
              </div>
            </div>

            {/* Print / Done actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button onClick={handlePrint} className="gold-button">
                <Printer size={16} /> Print Receipt
              </button>
              <button onClick={() => {
                setStep(1);
                setSelectedService(null);
                setSelectedDate(null);
                setSelectedTimeSlot(null);
              }} className="cosmic-button">
                Book Another Session
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Embedded Razorpay simulator secure modal */}
      {isProcessingPayment && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            width: '100%',
            maxWidth: '420px',
            color: '#1a1a2e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            textAlign: 'center'
          }}>
            {/* Razorpay branding header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #e2e8f0', width: '100%', paddingBottom: '15px', justifyContent: 'center' }}>
              <span style={{ fontWeight: '900', fontSize: '1.4rem', color: '#002970', fontFamily: 'sans-serif' }}>Razorpay</span>
              <span style={{ background: '#002970', color: 'white', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SECURE</span>
            </div>

            {/* Rotating load ring */}
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
              <div style={{
                width: '100%',
                height: '100%',
                border: '4px solid #e2e8f0',
                borderTop: '4px solid #3399cc',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#3399cc',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}>
                SDK 2.0
              </div>
            </div>

            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem', color: '#1a1a2e' }}>Opening Secure Payment Gateway</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>
                Connecting to bank servers to initialize energy exchange of <strong>₹{selectedService?.price.toLocaleString('en-IN')}.00</strong>
              </p>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#a0aec0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#48bb78' }} />
              PCI-DSS Compliant 256-bit SSL encryption active
            </div>
          </div>
        </div>
      )}

      {/* Simple animations injection */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt-card, #receipt-card * {
            visibility: visible;
          }
          #receipt-card {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none;
            box-shadow: none;
            background: white !important;
            color: black !important;
            padding: 0;
          }
          #receipt-card span, #receipt-card h3, #receipt-card h4, #receipt-card div {
            color: black !important;
          }
        }
      `}</style>

    </div>
  );
}
