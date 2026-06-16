import asyncHandler from 'express-async-handler';
import Contact from '../models/Contact.js';
import { sendContactAcknowledgment } from '../utils/emailService.js';

// @desc    Get all contact submissions
// @route   GET /api/v1/contacts
// @access  Private (Admin)
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
});

// @desc    Submit contact form
// @route   POST /api/v1/contacts
// @access  Public
export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, service, message, preferredTime } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400);
    throw new Error('Please fill in all required fields (name, email, phone, message)');
  }

  const contact = new Contact({
    name,
    email,
    phone,
    service,
    message,
    preferredTime,
  });

  const createdContact = await contact.save();

  // Send acknowledgment email
  await sendContactAcknowledgment(createdContact);

  res.status(201).json(createdContact);
});

// @desc    Update contact status (read / resolved)
// @route   PATCH /api/v1/contacts/:id/status
// @access  Private (Admin)
export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!status || !['new', 'read', 'resolved'].includes(status)) {
    res.status(400);
    throw new Error('Invalid status value');
  }

  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.status = status;
    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error('Contact message not found');
  }
});

// @desc    Delete contact message
// @route   DELETE /api/v1/contacts/:id
// @access  Private (Admin)
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await Contact.deleteOne({ _id: req.params.id });
    res.json({ message: 'Contact message removed successfully' });
  } else {
    res.status(404);
    throw new Error('Contact message not found');
  }
});
