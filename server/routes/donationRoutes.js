import express from 'express';
import Donation from '../models/Donation.js';
import { addDonation, getDonationStats, isDbConnected } from '../data/fallbackData.js';

const router = express.Router();

router.get('/stats', async (_req, res) => {
  try {
    if (isDbConnected()) {
      const donations = await Donation.find();
      const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
      return res.json({
        totalAmount,
        donorCount: donations.length,
        recentDonations: donations.slice(-5).reverse(),
      });
    }
    res.json(getDonationStats());
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch donation stats', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, amount, message, isAnonymous } = req.body;

    if (!name || !email || !amount) {
      return res.status(400).json({ message: 'Name, email, and amount are required' });
    }

    if (amount < 1) {
      return res.status(400).json({ message: 'Amount must be at least 1' });
    }

    if (isDbConnected()) {
      const donation = await Donation.create({ name, email, amount, message, isAnonymous });
      return res.status(201).json({
        message: 'Thank you for your generous donation!',
        donation,
      });
    }

    const donation = addDonation({ name, email, amount, message, isAnonymous });
    res.status(201).json({
      message: 'Thank you for your generous donation!',
      donation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process donation', error: error.message });
  }
});

export default router;
