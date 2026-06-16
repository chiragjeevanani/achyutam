import asyncHandler from 'express-async-handler';
import VastuDirection from '../models/VastuDirection.js';
import VastuRoom from '../models/VastuRoom.js';
import VastuMistake from '../models/VastuMistake.js';
import VastuRemedy from '../models/VastuRemedy.js';
import VastuSeason from '../models/VastuSeason.js';
import VastuElement from '../models/VastuElement.js';

// @desc    Get all Vastu tips data in a single dashboard or separately
// @route   GET /api/v1/vastu-tips
// @access  Public
export const getVastuTips = asyncHandler(async (req, res) => {
  const directions = await VastuDirection.find({});
  const rooms = await VastuRoom.find({}).sort({ order: 1 });
  const mistakes = await VastuMistake.find({});
  const remedies = await VastuRemedy.find({});
  const seasons = await VastuSeason.find({});
  const elements = await VastuElement.find({});

  res.json({
    directions,
    rooms,
    mistakes,
    remedies,
    seasons,
    elements,
  });
});

/* ---------------- DIRECTIONS CRUD ---------------- */
export const getDirections = asyncHandler(async (req, res) => {
  const data = await VastuDirection.find({});
  res.json(data);
});

export const updateDirection = asyncHandler(async (req, res) => {
  const { code } = req.params;
  const { name, deity, element, elementColor, elementBg, focus, dos, donts } = req.body;

  const direction = await VastuDirection.findOne({ code });

  if (direction) {
    direction.name = name !== undefined ? name : direction.name;
    direction.deity = deity !== undefined ? deity : direction.deity;
    direction.element = element !== undefined ? element : direction.element;
    direction.elementColor = elementColor !== undefined ? elementColor : direction.elementColor;
    direction.elementBg = elementBg !== undefined ? elementBg : direction.elementBg;
    direction.focus = focus !== undefined ? focus : direction.focus;
    direction.dos = dos !== undefined ? dos : direction.dos;
    direction.donts = donts !== undefined ? donts : direction.donts;

    const updated = await direction.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Direction not found');
  }
});

/* ---------------- ROOMS CRUD ---------------- */
export const getRooms = asyncHandler(async (req, res) => {
  const data = await VastuRoom.find({}).sort({ order: 1 });
  res.json(data);
});

export const createRoom = asyncHandler(async (req, res) => {
  const { title, element, color, bg, border, tips, order } = req.body;

  const room = new VastuRoom({
    title,
    element,
    color,
    bg,
    border,
    tips,
    order,
  });

  const created = await room.save();
  res.status(201).json(created);
});

export const updateRoom = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, element, color, bg, border, tips, order } = req.body;

  const room = await VastuRoom.findById(id);

  if (room) {
    room.title = title !== undefined ? title : room.title;
    room.element = element !== undefined ? element : room.element;
    room.color = color !== undefined ? color : room.color;
    room.bg = bg !== undefined ? bg : room.bg;
    room.border = border !== undefined ? border : room.border;
    room.tips = tips !== undefined ? tips : room.tips;
    room.order = order !== undefined ? order : room.order;

    const updated = await room.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Vastu Room not found');
  }
});

export const deleteRoom = asyncHandler(async (req, res) => {
  const room = await VastuRoom.findById(req.params.id);
  if (room) {
    await VastuRoom.deleteOne({ _id: req.params.id });
    res.json({ message: 'Vastu Room removed' });
  } else {
    res.status(404);
    throw new Error('Vastu Room not found');
  }
});

/* ---------------- MISTAKES CRUD ---------------- */
export const getMistakes = asyncHandler(async (req, res) => {
  const data = await VastuMistake.find({});
  res.json(data);
});

export const createMistake = asyncHandler(async (req, res) => {
  const { mistake, impact, remedy, severity, color } = req.body;

  const item = new VastuMistake({
    mistake,
    impact,
    remedy,
    severity,
    color,
  });

  const created = await item.save();
  res.status(201).json(created);
});

export const updateMistake = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { mistake, impact, remedy, severity, color } = req.body;

  const item = await VastuMistake.findById(id);

  if (item) {
    item.mistake = mistake !== undefined ? mistake : item.mistake;
    item.impact = impact !== undefined ? impact : item.impact;
    item.remedy = remedy !== undefined ? remedy : item.remedy;
    item.severity = severity !== undefined ? severity : item.severity;
    item.color = color !== undefined ? color : item.color;

    const updated = await item.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Vastu Mistake not found');
  }
});

export const deleteMistake = asyncHandler(async (req, res) => {
  const item = await VastuMistake.findById(req.params.id);
  if (item) {
    await VastuMistake.deleteOne({ _id: req.params.id });
    res.json({ message: 'Vastu Mistake removed' });
  } else {
    res.status(404);
    throw new Error('Vastu Mistake not found');
  }
});

/* ---------------- REMEDIES CRUD ---------------- */
export const getRemedies = asyncHandler(async (req, res) => {
  const data = await VastuRemedy.find({});
  res.json(data);
});

export const createRemedy = asyncHandler(async (req, res) => {
  const { title, desc, icon, color, bg, border } = req.body;

  const item = new VastuRemedy({
    title,
    desc,
    icon,
    color,
    bg,
    border,
  });

  const created = await item.save();
  res.status(201).json(created);
});

export const updateRemedy = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, desc, icon, color, bg, border } = req.body;

  const item = await VastuRemedy.findById(id);

  if (item) {
    item.title = title !== undefined ? title : item.title;
    item.desc = desc !== undefined ? desc : item.desc;
    item.icon = icon !== undefined ? icon : item.icon;
    item.color = color !== undefined ? color : item.color;
    item.bg = bg !== undefined ? bg : item.bg;
    item.border = border !== undefined ? border : item.border;

    const updated = await item.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Vastu Remedy not found');
  }
});

export const deleteRemedy = asyncHandler(async (req, res) => {
  const item = await VastuRemedy.findById(req.params.id);
  if (item) {
    await VastuRemedy.deleteOne({ _id: req.params.id });
    res.json({ message: 'Vastu Remedy removed' });
  } else {
    res.status(404);
    throw new Error('Vastu Remedy not found');
  }
});

/* ---------------- SEASONS CRUD ---------------- */
export const getSeasons = asyncHandler(async (req, res) => {
  const data = await VastuSeason.find({});
  res.json(data);
});

export const updateSeason = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { season, months, icon, color, bg, border, tips } = req.body;

  const item = await VastuSeason.findById(id);

  if (item) {
    item.season = season !== undefined ? season : item.season;
    item.months = months !== undefined ? months : item.months;
    item.icon = icon !== undefined ? icon : item.icon;
    item.color = color !== undefined ? color : item.color;
    item.bg = bg !== undefined ? bg : item.bg;
    item.border = border !== undefined ? border : item.border;
    item.tips = tips !== undefined ? tips : item.tips;

    const updated = await item.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Vastu Season not found');
  }
});

/* ---------------- ELEMENTS CRUD ---------------- */
export const getElements = asyncHandler(async (req, res) => {
  const data = await VastuElement.find({});
  res.json(data);
});

export const updateElement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, zone, colorHex, bgCode, iconName, benefit, colors } = req.body;

  const item = await VastuElement.findById(id);

  if (item) {
    item.name = name !== undefined ? name : item.name;
    item.zone = zone !== undefined ? zone : item.zone;
    item.colorHex = colorHex !== undefined ? colorHex : item.colorHex;
    item.bgCode = bgCode !== undefined ? bgCode : item.bgCode;
    item.iconName = iconName !== undefined ? iconName : item.iconName;
    item.benefit = benefit !== undefined ? benefit : item.benefit;
    item.colors = colors !== undefined ? colors : item.colors;

    const updated = await item.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Vastu Element not found');
  }
});

