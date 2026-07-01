import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPost } from '../api/client';
import './Blog.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getBlogPost(slug)
      .then((res) => setPost(res.data))
      .catch(() => setError('Post not found or server unavailable.'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!post) return null;

  return (
    <article className="blog-detail">
      {post.imageUrl && (
        <div className="blog-detail-hero">
          <img src={post.imageUrl} alt={post.title} />
        </div>
      )}
      <div className="container blog-detail-content">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        <span className="blog-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span>{post.author}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="blog-content">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
