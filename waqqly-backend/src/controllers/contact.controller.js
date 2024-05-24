const nodemailer = require('nodemailer');

exports.sendContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Set up Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services such as Yahoo, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app password
    },
  });

  // Set up email options
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email address
    subject: `Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'There was an error sending your message.' });
  }
};
