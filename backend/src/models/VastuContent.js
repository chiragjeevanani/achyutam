import mongoose from 'mongoose';

const vastuContentSchema = new mongoose.Schema(
  {
    hero: {
      badge: { type: String, default: 'HARMONIZE YOUR ENVIRONMENT' },
      title: { type: String, default: 'Ancient Vastu Shastra Tips' },
      description: { type: String, default: 'Align your home and workplace with the five natural elements — Panchtattva — for lasting health, wealth, and peace. Explore room-by-room guidance, an interactive compass, common Vastu doshas, and simple non-demolition remedies.' }
    }
  },
  {
    timestamps: true
  }
);

const VastuContent = mongoose.model('VastuContent', vastuContentSchema);
export default VastuContent;
