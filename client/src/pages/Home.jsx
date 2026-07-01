import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '50K+', label: 'Lives Impacted' },
  { value: '120+', label: 'Communities Served' },
  { value: '15', label: 'Active Projects' },
  { value: '20,000+', label: 'Volunteers' },
];

const focusAreas = [
  {
    icon: '🌳',
    title: 'Tree Plantation',
    description: 'Growing a greener future by planting trees and protecting the environment for generations to come.',
  },
  {
    icon: '📚',
    title: 'Education',
    description: 'Scholarships and learning resources so every child can access quality education.',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    description: 'Mobile clinics and health education programs for underserved populations.',
  },
 
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-tag">Non-Profit Organization</span>
          <h1>Building Hope, Changing Lives</h1>
          <p>
            Brother of Bihar Foundation works hand in hand with communities to create lasting change through education,environmental conservation, healthcare, empowerment, and sustainable development.
          </p>
          <div className="hero-actions">
            <Link to="/donation" className="btn btn-accent">
              Make a Donation
            </Link>
            <Link to="/gallery" className="btn btn-outline hero-outline">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Our programs address the root causes of poverty and inequality, creating
            sustainable solutions that communities can maintain for generations.
          </p>
          <div className="grid-2 focus-grid">
            {focusAreas.map(({ icon, title, description }) => (
              <div key={title} className="focus-card">
                <span className="focus-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Your Support Makes a Difference</h2>
          <p>
            Every donation helps us reach more communities, train more volunteers, and
            launch more life-changing projects. Join us in creating a world where everyone
            has the opportunity to thrive.
          </p>
          <Link to="/donation" className="btn btn-accent">
            Donate Today
          </Link>
        </div>
      </section>
    </>
  );
}
