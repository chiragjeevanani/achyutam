import nodemailer from 'nodemailer';

// Helper to check if SMTP settings are configured
const isSmtpConfigured = () => {
  return (
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_HOST
  );
};

// Create reusable transporter object using the default SMTP transport
const getTransporter = () => {
  if (isSmtpConfigured()) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
};

/**
 * Send Booking Confirmation Email
 * @param {Object} booking 
 */
export const sendBookingConfirmation = async (booking) => {
  const mailOptions = {
    from: `"Achyutam Maestro" <${process.env.SMTP_USER || 'noreply@achyutam.com'}>`,
    to: booking.customer.email,
    subject: `Booking Confirmed: ${booking.service.title} - Achyutam Maestro`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #c5a880; text-align: center;">Booking Confirmed!</h2>
        <p>Dear ${booking.customer.name},</p>
        <p>Thank you for choosing <strong>Achyutam Maestro</strong>. Your appointment has been successfully booked.</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        
        <h3 style="color: #333;">Appointment Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Service:</strong></td>
            <td style="padding: 8px 0; color: #333;">${booking.service.title} (${booking.service.category})</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Date:</strong></td>
            <td style="padding: 8px 0; color: #333;">${new Date(booking.appointmentDate).toDateString()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Time Slot:</strong></td>
            <td style="padding: 8px 0; color: #333;">${booking.timeSlot}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Amount Paid:</strong></td>
            <td style="padding: 8px 0; color: #333;">₹${booking.service.price}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Payment Status:</strong></td>
            <td style="padding: 8px 0; color: #333; font-weight: bold; color: green;">${booking.paymentStatus.toUpperCase()}</td>
          </tr>
        </table>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        
        <p>If you have any questions, please feel free to reply to this email or contact us at +91 9999999999.</p>
        <p>Warm regards,<br><strong>Uppasna Ji</strong><br>Achyutam Maestro Team</p>
      </div>
    `,
  };

  const transporter = getTransporter();
  if (transporter) {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Booking confirmation email sent: ${info.messageId}`);
      return true;
    } catch (error) {
      console.error(`Error sending booking confirmation email: ${error.message}`);
      return false;
    }
  } else {
    console.log(`[SMTP Not Configured] Booking confirmation email log:`);
    console.log(`To: ${mailOptions.to}`);
    console.log(`Subject: ${mailOptions.subject}`);
    console.log(`Body: ${mailOptions.html}`);
    return true;
  }
};

/**
 * Send Contact Inquiry Acknowledgment Email
 * @param {Object} contact 
 */
export const sendContactAcknowledgment = async (contact) => {
  const mailOptions = {
    from: `"Achyutam Maestro" <${process.env.SMTP_USER || 'noreply@achyutam.com'}>`,
    to: contact.email,
    subject: `We have received your message - Achyutam Maestro`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #c5a880; text-align: center;">Message Received!</h2>
        <p>Dear ${contact.name},</p>
        <p>Thank you for reaching out to <strong>Achyutam Maestro</strong>. We have received your inquiry regarding <strong>${contact.service || 'our consulting services'}</strong>.</p>
        <p>Our team (or Uppasna Ji) will review your query and get back to you shortly, usually within 24-48 hours.</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        
        <h3 style="color: #333;">Your Message Details:</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #555; font-style: italic;">
          "${contact.message}"
        </p>
        
        <p>Preferred Contact Time: ${contact.preferredTime || 'Anytime'}</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        
        <p>Warm regards,<br><strong>Uppasna Ji</strong><br>Achyutam Maestro Team</p>
      </div>
    `,
  };

  const transporter = getTransporter();
  if (transporter) {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Contact acknowledgment email sent: ${info.messageId}`);
      return true;
    } catch (error) {
      console.error(`Error sending contact acknowledgment email: ${error.message}`);
      return false;
    }
  } else {
    console.log(`[SMTP Not Configured] Contact acknowledgment email log:`);
    console.log(`To: ${mailOptions.to}`);
    console.log(`Subject: ${mailOptions.subject}`);
    console.log(`Body: ${mailOptions.html}`);
    return true;
  }
};
