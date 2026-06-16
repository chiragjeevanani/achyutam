import mongoose from 'mongoose';
import dotenv from 'dotenv';
import VastuElement from './src/models/VastuElement.js';

dotenv.config();

const elementsData = [
  { name: 'Water (Jal)', zone: 'North & Northeast', colorHex: '#60A5FA', bgCode: 'rgba(59,130,246,0.12)', iconName: 'Droplets', benefit: 'Wealth, career flow, new opportunities, mental calm', colors: 'Blue, Cyan, Indigo, Silver' },
  { name: 'Fire (Agni)', zone: 'Southeast & South', colorHex: '#FF3333', bgCode: 'rgba(255,51,51,0.12)', iconName: 'Zap', benefit: 'Cash flow, vital force, passion, digestion, recognition', colors: 'Red, Orange, Pink, Coral' },
  { name: 'Earth (Prithvi)', zone: 'Southwest & Center', colorHex: '#F59E0B', bgCode: 'rgba(251,191,36,0.12)', iconName: 'Mountain', benefit: 'Stability, longevity, relationships, physical strength', colors: 'Yellow, Beige, Clay, Brown' },
  { name: 'Air (Vayu)', zone: 'East & Northwest', colorHex: '#34D399', bgCode: 'rgba(16,185,129,0.12)', iconName: 'Wind', benefit: 'Networking, social trust, growth, mental clarity, travel', colors: 'Green, Light Brown, White' },
  { name: 'Space (Akash)', zone: 'West & Center', colorHex: '#A78BFA', bgCode: 'rgba(167,139,250,0.12)', iconName: 'Star', benefit: 'Mental expansiveness, intuition, spiritual clarity', colors: 'White, Grey, Silver, Violet' }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/achyutam')
  .then(async () => {
    console.log('MongoDB connected.');
    await VastuElement.deleteMany({});
    await VastuElement.insertMany(elementsData);
    console.log('Inserted elements.');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
