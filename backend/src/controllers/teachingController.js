import asyncHandler from 'express-async-handler';
import TeachingApplication from '../models/TeachingApplication.js';

// @desc    Submit a teaching application
// @route   POST /api/v1/teaching/apply
// @access  Public
export const applyToTeach = asyncHandler(async (req, res) => {
  const { name, email, phone, experience, message } = req.body;

  if (!name || !email || !phone || !experience || !message) {
    res.status(400);
    throw new Error('Please fill in all required fields (name, email, phone, experience, message)');
  }

  const application = new TeachingApplication({
    name,
    email,
    phone,
    experience,
    message,
  });

  const createdApplication = await application.save();
  res.status(201).json(createdApplication);
});

// @desc    Get all teaching applications
// @route   GET /api/v1/teaching/applications
// @access  Private (Admin)
export const getTeachingApplications = asyncHandler(async (req, res) => {
  const applications = await TeachingApplication.find({}).sort({ createdAt: -1 });
  res.json(applications);
});

// @desc    Update teaching application status
// @route   PATCH /api/v1/teaching/applications/:id/status
// @access  Private (Admin)
export const updateApplicationStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!status || !['new', 'reviewed', 'contacted', 'accepted', 'rejected'].includes(status)) {
    res.status(400);
    throw new Error('Invalid status value');
  }

  const application = await TeachingApplication.findById(req.params.id);

  if (application) {
    application.status = status;
    const updatedApplication = await application.save();
    res.json(updatedApplication);
  } else {
    res.status(404);
    throw new Error('Teaching application not found');
  }
});

// @desc    Delete teaching application
// @route   DELETE /api/v1/teaching/applications/:id
// @access  Private (Admin)
export const deleteApplication = asyncHandler(async (req, res) => {
  const application = await TeachingApplication.findById(req.params.id);

  if (application) {
    await TeachingApplication.deleteOne({ _id: req.params.id });
    res.json({ message: 'Teaching application removed successfully' });
  } else {
    res.status(404);
    throw new Error('Teaching application not found');
  }
});
