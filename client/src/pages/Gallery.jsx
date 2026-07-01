import { useState, useEffect } from 'react';
import './Gallery.css';

const galleryData = [
  { id: 1, filename: 'ed1.png', title: 'Education Program', category: 'Education' },
  { id: 2, filename: 'n1.jpeg', title: 'News', category: 'News' },
  { id: 3, filename: 'n2.jpeg', title: 'News', category: 'News' },
  { id: 4, filename: 'n3.jpeg', title: 'News', category: 'News' },
  { id: 5, filename: 'n4.jpeg', title: 'News', category: 'News' },
  { id: 6, filename: 'n5.jpeg', title: 'News', category: 'News' },
  { id: 7, filename: 'n6.jpeg', title: 'News', category: 'News' },
  { id: 8, filename: 'a1.jpeg', title: 'Achivement', category: 'Achivement' },
  { id: 9, filename: 'e1.png', title: 'Distribution of Trees Among Students', category: 'Environment' },
  { id: 10, filename: 'e2.png', title: 'Community Garden', category: 'Environment' },
  { id: 11, filename: 'e3.png', title: 'Tree Planting Event', category: 'Environment' },
  { id: 13, filename: 'a2.jpeg', title: 'Achivement', category: 'Achivement' },
  { id: 14, filename: 'v1.png', title: 'Team work', category: 'Volunteers' },
  { id: 15, filename: 'e4.png', title: 'Environment ', category: 'Environment' },
  { id: 16, filename: 'e5.png', title: 'Environment', category: 'Environment' },
  { id: 17, filename: 'c1.png', title: 'Community Support', category: 'Community Support' },
  { id: 18, filename: 'c2.png', title: 'Community Support', category: 'Community Support' },
  { id: 19, filename: 'e6.png', title: 'Tree Plantation at School', category: 'Environment' },
  { id: 20, filename: 'e7.png', title: 'Distributing Trees in School', category: 'Environment' },
  { id: 21, filename: 'e8.png', title: 'Tree Distribution in School', category: 'Environment' },
  { id: 22, filename: 'e9.png', title: 'Distributing Trees to Teachers', category: 'Environment' },
  { id: 23, filename: 'e10.png', title: 'Tree Distribution to Students', category: 'Environment' },
  { id: 24, filename: 'v2.png', title: 'Volunteer Work', category: 'Volunteers' },
  { id: 25, filename: 'v3.png', title: 'Volunteer Support', category: 'Volunteers' },
  { id: 26, filename: 'v4.png', title: 'Volunteer Event', category: 'Volunteers' },
  { id: 28, filename: 'e11.png', title: 'Tree Planting Event', category: 'Environment' },
  { id: 29, filename: 'e12.png', title: 'Tree Planting', category: 'Environment' },
  { id: 30, filename: 'e13.png', title: 'Planting trees today for a healthier future.', category: 'Environment' },
  { id: 32, filename: 'ed2.jpeg', title: 'Gift Distribution', category: 'Education' },
  { id: 33, filename: 'e14.png', title: 'Tree Planting', category: 'Environment' },
  { id: 34, filename: 'e15.png', title: 'Tree Awareness', category: 'Environment' },
  { id: 35, filename: 'e16.png', title: 'Tree Awareness', category: 'Environment' },
  { id: 36, filename: 'e17.png', title: 'Environment Awareness', category: 'Environment' },
  { id: 37, filename: 'e18.png', title: 'Tree Planting By Students', category: 'Environment' },
  { id: 38, filename: 'c3.png', title: 'Distribution of Blankets', category: 'Community Support' },
  { id: 39, filename: 'v5.png', title: 'Volunteer Work', category: 'Volunteers' },
  { id: 40, filename: 'c4.png', title: 'Community Support', category: 'Community Support' },
  { id: 41, filename: 'v6.png', title: 'Volunteer Work', category: 'Volunteers' },
  { id: 42, filename: 'a3.jpeg', title: 'Achivement', category: 'Achivement' },
  { id: 43, filename: 'c5.png', title: 'Community Support', category: 'Community Support' },
  { id: 44, filename: 'e19.png', title: 'Tree Care', category: 'Environment' },
  { id: 45, filename: 'e20.png', title: 'Environment Awareness', category: 'Environment' },
  { id: 46, filename: 'n7.png', title: 'News', category: 'News' },
  { id: 47, filename: 'e21.png', title: 'Environment Education', category: 'Environment' },
  { id: 48, filename: 'e22.png', title: 'Environment Education', category: 'Environment' },
  { id: 49, filename: 'e23.png', title: 'Environment Care', category: 'Environment' },
  { id: 50, filename: 'e24.png', title: 'Tree Distribution', category: 'Environment' },
  { id: 51, filename: 'n8.png', title: 'News', category: 'News' },

  
];

const categories = ['All', 'Achivement', 'Education', 'Environment', 'News', 'Community Support', 'Volunteers'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryData);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Update filtered images when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredImages(galleryData);
    } else {
      setFilteredImages(galleryData.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>A glimpse into our programs, volunteer activities, and the lives we touch together.</p>
        </div>
      </div>

      <section className="section gallery-section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item card"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="gallery-img-container">
                  <img
                    src={`/photos/${image.filename}`}
                    alt={image.title}
                    loading="lazy"
                    className="gallery-img"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-badge">{image.category}</span>
                    <h3 className="gallery-item-title">{image.title}</h3>
                    <span className="gallery-zoom-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-images">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
            &times;
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/photos/${filteredImages[lightboxIndex].filename}`}
              alt={filteredImages[lightboxIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span className="lightbox-category">{filteredImages[lightboxIndex].category}</span>
              <h3>{filteredImages[lightboxIndex].title}</h3>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
