import { useEffect, useState } from 'react';
import { getProjects } from '../api/client';
import './Work.css';

const statusLabels = {
  ongoing: 'Ongoing',
  completed: 'Completed',
  planned: 'Planned',
};

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch(() => setError('Unable to load projects. Make sure the server is running.'))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <div className="page-header">
        
          <h1>Our Work</h1>
          <p>Explore the projects and programs making a real difference in communities worldwide.</p>
        
      </div>

      <section className="section">
        <div className="container">
          <div className="work-filters">
            {['all', 'ongoing', 'completed', 'planned'].map((status) => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status)}
              >
                {status === 'all' ? 'All Projects' : statusLabels[status]}
              </button>
            ))}
          </div>

          {loading && <p className="loading">Loading projects...</p>}
          {error && <p className="error-message">{error}</p>}

          {!loading && !error && (
            <div className="grid-2 work-grid">
              {filtered.map((project) => (
                <article key={project._id} className="work-card card">
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="work-image" />
                  )}
                  <div className="work-body">
                    <div className="work-header">
                      <span className="work-category">{project.category}</span>
                      <span className={`badge badge-${project.status}`}>
                        {statusLabels[project.status]}
                      </span>
                    </div>
                    <h2>{project.title}</h2>
                    <p className="work-description">{project.description}</p>
                    <div className="work-details">
                      {project.location && (
                        <span className="work-detail">📍 {project.location}</span>
                      )}
                      {project.impact && (
                        <span className="work-detail">🎯 {project.impact}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <p className="loading">No projects found for this filter.</p>
          )}
        </div>
      </section>
    </>
  );
}
