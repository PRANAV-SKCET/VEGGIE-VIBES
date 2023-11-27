import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import '../styles/contact.css'
import { Box, Container } from '@mui/material'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '98vw',
      }}
    >
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <PhoneIcon />
              Phone: +044 4345 4332
            </li>
            <li>
              <EmailIcon />
              Email: support@veggievibes.in
            </li>
            <li>
              <InstagramIcon />
              Instagram: @veggievibes
            </li>
            <li>
              <LanguageIcon />
              Website: www.support.veggievibes.in
            </li>
          </ul>
        </div>

        <Box
          component={'form'}
          className="contact-form"
          onSubmit={handleSubmit}
          style={{ marginLeft: '20px' }}
        >
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns, please feel free to contact
            us using the form below.
          </p>

          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Message:
            <textarea name="message" rows="4" required></textarea>
          </label>

          <button type="submit">Submit</button>
        </Box>
      </div>
    </Container>
  )
}

export default Contact
