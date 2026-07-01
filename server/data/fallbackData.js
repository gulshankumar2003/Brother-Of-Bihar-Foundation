import mongoose from 'mongoose';

export const blogPosts = [
  {
    _id: '1',
    title: 'Clean Water Reaches 500 More Families',
    slug: 'clean-water-500-families',
    excerpt: 'Our latest well project in rural communities has brought safe drinking water to hundreds of families.',
    content:
      'After months of planning and community collaboration, Hope Foundation completed three new water wells in underserved villages. Local volunteers were trained to maintain the systems, ensuring long-term sustainability. Families no longer walk miles for water — children can attend school, and health outcomes are already improving.',
    author: 'Sarah Mitchell',
    category: 'Water & Sanitation',
    imageUrl: 'https://images.unsplash.com/photo-1548838547-99d69a4c9c47?w=800&q=80',
    publishedAt: '2025-11-15T00:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Education Program Expands to Three New Schools',
    slug: 'education-program-expansion',
    excerpt: 'Scholarships and learning materials are now reaching 1,200 students across the region.',
    content:
      "Hope Foundation's education initiative has expanded to three additional schools this semester. We provided textbooks, digital learning tools, and teacher training workshops. Early results show improved attendance and test scores among participating students.",
    author: 'James Okonkwo',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1497486751825-1233686d110d?w=800&q=80',
    publishedAt: '2025-10-28T00:00:00.000Z',
  },
  {
    _id: '3',
    title: 'Volunteer Spotlight: Meet Our Community Heroes',
    slug: 'volunteer-spotlight-community-heroes',
    excerpt: 'Every month we celebrate the volunteers who make our mission possible on the ground.',
    content:
      'From organizing food drives to mentoring youth, our volunteers are the heartbeat of Hope Foundation. This month we highlight Maria Chen, who has led health awareness workshops in five communities, and David Torres, who coordinates our youth mentorship program.',
    author: 'Hope Foundation Team',
    category: 'Community',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    publishedAt: '2025-09-12T00:00:00.000Z',
  },
];

export const projects = [
  {
    _id: '1',
    title: 'Rural Clean Water Initiative',
    description:
      'Building sustainable water wells and filtration systems in remote villages to provide safe drinking water for thousands of families.',
    category: 'Water & Sanitation',
    location: 'East Africa',
    impact: '12,000+ people served',
    imageUrl: 'https://images.unsplash.com/photo-1548838547-99d69a4c9c47?w=800&q=80',
    status: 'ongoing',
    startDate: '2024-03-01T00:00:00.000Z',
  },
  {
    _id: '2',
    title: "Children's Education Fund",
    description:
      'Providing scholarships, school supplies, and digital learning resources to children who otherwise could not afford education.',
    category: 'Education',
    location: 'South Asia',
    impact: '3,500 students supported',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    status: 'ongoing',
    startDate: '2023-09-01T00:00:00.000Z',
  },
  {
    _id: '3',
    title: 'Community Health Clinics',
    description:
      'Mobile health clinics delivering essential medical care, vaccinations, and health education to underserved communities.',
    category: 'Healthcare',
    location: 'Central America',
    impact: '8,000+ patients treated',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    status: 'completed',
    startDate: '2022-06-01T00:00:00.000Z',
  },
  {
    _id: '4',
    title: "Women's Empowerment Program",
    description:
      'Skills training, micro-loans, and mentorship programs helping women start small businesses and achieve financial independence.',
    category: 'Empowerment',
    location: 'Southeast Asia',
    impact: '600+ women trained',
    imageUrl: 'https://images.unsplash.com/photo-1488526537941-7bba5777c7b9?w=800&q=80',
    status: 'ongoing',
    startDate: '2024-01-15T00:00:00.000Z',
  },
  {
    _id: '5',
    title: 'Disaster Relief Response',
    description:
      'Rapid deployment of food, shelter, and medical supplies to communities affected by natural disasters.',
    category: 'Emergency Relief',
    location: 'Global',
    impact: '15 relief missions completed',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    status: 'planned',
    startDate: '2026-01-01T00:00:00.000Z',
  },
];

const donations = [];

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

export function getDonations() {
  return donations;
}

export function addDonation(data) {
  const donation = {
    _id: String(donations.length + 1),
    ...data,
    createdAt: new Date().toISOString(),
  };
  donations.push(donation);
  return donation;
}

export function getDonationStats() {
  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
  return {
    totalAmount,
    donorCount: donations.length,
    recentDonations: donations.slice(-5).reverse(),
  };
}
