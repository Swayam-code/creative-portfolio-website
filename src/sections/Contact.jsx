import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        'template_lyqtmil',
        {
          from_name: form.name,
          to_name: 'Swayam Prakash Kar',
          from_email: form.email,
          to_email: 'swayam123code@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="absolute inset-0 bg-gradient-to-b from-black-200 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] bg-center bg-repeat opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto c-space">
        <div className="text-center mb-20">
          <h2 className="head-text mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. Whether it's a website, app, or unique digital experience, I'm here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="contact-info-card">
              <img src="/assets/email.svg" alt="email" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Email Me At</h3>
              <p className="text-gray-400">swayam123code@gmail.com</p>
            </div>
            <div className="contact-info-card">
              <img src="/assets/location.svg" alt="location" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p className="text-gray-400">Angul, India</p>
            </div>
            <div className="contact-info-card">
              <img src="/assets/social.svg" alt="social" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">Social Media</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com/Swayam-code" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/swayam-prakash-kar" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src="/assets/linkedin.svg" alt="linkedin" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-header">
              <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
              <p className="text-gray-400">I'll get back to you as soon as possible</p>
            </div>

            <div className="form-group relative">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input peer"
                placeholder=" "
              />
              <label htmlFor="name" className="form-label-float">Your Name</label>
              <div className="form-input-icon">
                <img src="/assets/user.svg" alt="user" className="w-5 h-5" />
              </div>
            </div>

            <div className="form-group relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input peer"
                placeholder=" "
              />
              <label htmlFor="email" className="form-label-float">Your Email</label>
              <div className="form-input-icon">
                <img src="/assets/email-form.svg" alt="email" className="w-5 h-5" />
              </div>
            </div>

            <div className="form-group relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="form-input peer min-h-[150px] pt-5"
                placeholder=" "
              />
              <label htmlFor="message" className="form-label-float">Your Message</label>
              <div className="form-input-icon">
                <img src="/assets/message.svg" alt="message" className="w-5 h-5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="submit-button group"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
