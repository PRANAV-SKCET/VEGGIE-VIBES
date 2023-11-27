import '../styles/about.css'
import { Container } from '@mui/material'

const AboutUs = () => {
//   React.useEffect(() => {
//     document.body.style.background =
//       'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-summer-atmosphere-restaurant-supermarket-vegetable-psd-layered-promotion-background-image_159939.jpg) no-repeat'
//     document.body.style.backgroundSize = 'cover'
//   }, [])
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, marginBottom: '80px',width:'98.5vw' }}>
    <div className="about-us-container">
      <div className="header-section">
        <h1>AboutUs</h1>
        <h1>Welcome to Veggievibes!</h1>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <h3>
          At Fresh Picks, our mission is to provide our customers with the
          highest quality, freshest produce while supporting local farmers and
          promoting healthy living.
        </h3>
      </div>
      <h1>Health and Wellness</h1>

      <h3>
        We are passionate advocates for a balanced and wholesome lifestyle. Our
        commitment lies in fostering healthier habits by promoting the benefits
        of a plant-centric diet. We strive to empower individuals to make
        informed choices about their nutrition, enhancing their overall
        well-being.
      </h3>
      <h1>Integrity and Transparency</h1>
      <h3>
        Transparency is at the heart of everything we do. We believe in
        providing accurate, evidence-based information while maintaining the
        highest ethical standards. Our commitment to integrity extends to the
        relationships we build with our users, partners, and stakeholders,
        ensuring trust and credibility in all interactions.
      </h3>
      <h1>Innovation and Community</h1>
      <h3>
        Innovation drives us. We&apos;re continually exploring new ways to improve
        and enhance the VeggieVibes experience, incorporating cutting-edge
        technology and nutritional expertise into our app. Building a vibrant
        community is fundamental. We aim to foster a supportive and engaging
        space where users can connect, share experiences, and inspire each other
        on their plant-based journeys.
      </h3>
      <div className="values-section">
        <h1>Our Values</h1>
        <ul>
          <li>
            <h3>Freshness Guaranteed</h3>
          </li>
          <li>
            <h3>Community Support</h3>
          </li>
          <li>
            <h3>Healthy Living Advocates</h3>
          </li>
          <li>
            <h3>Sustainability</h3>
          </li>
        </ul>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <h3>Pavithran.G</h3>

          <h3>Nambuajai.N</h3>

          <h3>Pranav.A</h3>

        </div>
      </div>
    </div>
    </Container>
  )
}

export default AboutUs
