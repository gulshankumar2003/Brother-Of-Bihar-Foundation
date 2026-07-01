import express from 'express';
import Blog from '../models/Blog.js';
import { blogPosts, isDbConnected } from '../data/fallbackData.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    if (isDbConnected()) {
      const posts = await Blog.find().sort({ publishedAt: -1 });
      return res.json(posts);
    }
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blog posts', error: error.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    if (isDbConnected()) {
      const post = await Blog.findOne({ slug: req.params.slug });
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      return res.json(post);
    }

    const post = blogPosts.find((p) => p.slug === req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blog post', error: error.message });
  }
});

export default router;
