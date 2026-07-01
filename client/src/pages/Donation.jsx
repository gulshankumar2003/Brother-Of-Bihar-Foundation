import { useEffect, useState } from 'react';
import { getDonationStats, submitDonation } from '../api/client';
import './Donation.css';

const presetAmounts = [25, 50, 100, 500, 1000];

export default function Donation() {
  const [stats, setStats] = useState({ totalAmount: 0, donorCount: 0 });
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: 50,
    message: '',
    isAnonymous: false,
  });
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDonationStats()
      .then((res) => setStats(res.data))
      .catch(() => {});
  }, [success]);

  function handleAmountSelect(amount) {
    setForm({ ...form, amount });
    setCustomAmount('');
  }

  function handleCustomAmount(e) {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setForm({ ...form, amount: Number(value) });
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await submitDonation(form);
      setSuccess(res.data.message);
      setForm({ name: '', email: '', amount: 50, message: '', isAnonymous: false });
      setCustomAmount('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Donate</h1>
          <p>Your generosity fuels our mission and transforms lives around the world.</p>
        </div>
      </div>

      <section className="section">
        <div className="qr-code-container">
          <image src="/photos/amitqr.jpeg" alt="Donation" className="donation-image" />
        </div>
      </section>
    </>
  );
}
