import "./Blog.css";


const blogs = [
  {
    id: 1,
    title: "Tree Distribution Drive in Schools",
    date: "May 28, 2026",
    category: "Environment",
    image: "e16.png",
    description:
      "Our volunteers distributed tree saplings to students and raised awareness about protecting nature and building a greener tomorrow.",
  },
  {
    id: 2,
    title: "Winter Relief Distribution Drive",
    date: "December 25, 2025",
    category: "Community Support",
    image:
      "c4.png",
    description:
      "Our NGO organized a winter relief distribution drive, providing warm blankets to families in need and ensuring support during the cold season.",
  },
  {
    id: 3,
    title: "Empowering Education, Inspiring Futures",
    date: "June 10, 2026",
    category: "Education",
    image:
      "ed1.png",
    description:
      "Our education initiative aims to provide quality learning opportunities and resources to underprivileged children, empowering them to build a better future.",
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Our Stories & Impact</h1>
        <p>
          Discover inspiring stories, updates, and the positive impact we create
          together.
        </p>
      </section>

      <section className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={`/photos/${blog.image}`} alt={blog.title} />
            <div className="blog-content">
              <span className="category">{blog.category}</span>
              <h2>{blog.title}</h2>
              <small>{blog.date}</small>
              <p>{blog.description}</p>
        
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}