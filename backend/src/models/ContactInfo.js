import mongoose from 'mongoose';

const contactInfoSchema = new mongoose.Schema(
  {
    header: {
      badge: { type: String, default: 'CONNECT' },
      title: { type: String, default: 'Book Consultation' },
      description: { type: String, default: 'Schedule a custom directional or numerological assessment session with Upasana Ji. Feel free to reach out to our Mumbai headquarters.' }
    },
    location: {
      title: { type: String, default: 'Our Headquarters' },
      label: { type: String, default: 'Office Location' },
      addressLines: [{ type: String }]
    },
    whatsapp: {
      label: { type: String, default: 'WhatsApp Number' },
      number: { type: String, default: '+91 95590 96656' },
      link: { type: String, default: 'https://wa.me/919559096656' }
    },
    slots: [{ type: String }]
  },
  {
    timestamps: true
  }
);

const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema);
export default ContactInfo;
