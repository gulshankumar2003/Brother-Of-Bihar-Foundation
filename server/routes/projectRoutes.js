import express from 'express';
import Project from '../models/Project.js';
import { projects, isDbConnected } from '../data/fallbackData.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    if (isDbConnected()) {
      const dbProjects = await Project.find().sort({ startDate: -1 });
      return res.json(dbProjects);
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    if (isDbConnected()) {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      return res.json(project);
    }

    const project = projects.find((p) => p._id === req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project', error: error.message });
  }
});

export default router;
