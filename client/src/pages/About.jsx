import './About.css';


const team = [
  {
    name: 'Mr. Ammit Kumar',
    role: 'Founder & CEO',
    image: 'founderi.jpeg',
  },
  {
    name: 'Mrs. Shruti Kumari',
    role: 'Co-Founder',
    image: 'co.jpeg',
  },
];

const values = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and accountability in everything we do.',
  },
  {
    title: 'Community-Led',
    description: 'Local communities guide our programs — we listen, learn, and partner.',
  },
  {
    title: 'Sustainability',
    description: 'We build solutions that last, training locals to maintain and expand projects.',
  },
  {
    title: 'Compassion',
    description: 'Every person deserves dignity, opportunity, and hope for a better future.',
  },
];

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our mission, values, and the dedicated team behind Brother of Bihar Foundation.</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-story">
          <div className="about-story-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Brother of Bihar Foundation was founded in 2010 with a simple belief: every community
              has the potential to thrive when given the right resources and support.
              What started as a small volunteer group delivering supplies to disaster-affected
              areas and planting trees has grown into a global organization serving over 120+ communities.
            </p>
            <p>
              Today, we focus on four core areas — environmental sustainability, education, healthcare, and
              economic empowerment. We work hand-in-hand with local leaders to design programs
              that address real needs and create lasting change.
            </p>
          </div>
          <div className="about-story-image">
            
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These principles guide every decision we make and every project we undertake.
          </p>
          <div className="grid-2">
            {values.map(({ title, description }) => (
              <div key={title} className="value-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the passionate individuals driving our mission forward every day.
          </p>
          <div className="grid-2 team-grid">
            {team.map(({ name, role, bio, image }) => (
              <div key={name} className="team-card card">
                <img src={`/photos/${image}`} alt={name} className="team-photo" />
                <div className="team-info">
                  <h3>{name}</h3>
                  <span className="team-role">{role}</span>
                  <p>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
