import mongoose from 'mongoose';

const roomTipSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
});

const vastuRoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    element: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    bg: {
      type: String,
      trim: true,
    },
    border: {
      type: String,
      trim: true,
    },
    tips: {
      type: [roomTipSchema],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const VastuRoom = mongoose.model('VastuRoom', vastuRoomSchema);
export default VastuRoom;
