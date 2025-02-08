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

      <div className="relative z-10 max-w-[90%] mx-auto c-space">
        <div className="text-center mb-20">
          <h2 className="head-text mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's create something amazing together. Whether it's a website, app, or unique digital experience, I'm here to help bring your vision to life.
          </p>
        </div>

        <div className="w-full mx-auto px-4">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form bg-[#1c1c1c] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm border border-white/5">
            {/* Background Design Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-3">Send Message</h3>
                <p className="text-gray-400 text-lg">I'll get back to you as soon as possible</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-group">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="w-full bg-[#2a2a2a]/50 text-white px-6 py-4 rounded-xl border-2 border-[#3a3a3a] focus:border-purple-500 outline-none transition-all duration-300 backdrop-blur-sm group-hover:border-purple-500/50"
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-gray-400 left-6 top-4 transition-all duration-300 pointer-events-none"
                      style={{
                        transform: form.name ? 'translateY(-170%) scale(0.85)' : 'translateY(0) scale(1)',
                        transformOrigin: 'left'
                      }}
                    >
                      Your Name
                    </label>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-80">
                      <img src="/assets/user.svg" alt="user" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="w-full bg-[#2a2a2a]/50 text-white px-6 py-4 rounded-xl border-2 border-[#3a3a3a] focus:border-purple-500 outline-none transition-all duration-300 backdrop-blur-sm group-hover:border-purple-500/50"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-gray-400 left-6 top-4 transition-all duration-300 pointer-events-none"
                      style={{
                        transform: form.email ? 'translateY(-170%) scale(0.85)' : 'translateY(0) scale(1)',
                        transformOrigin: 'left'
                      }}
                    >
                      Your Email
                    </label>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-80">
                      <img src="/assets/email-form.svg" alt="email" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group mt-8">
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows="10"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full bg-[#2a2a2a]/50 text-white px-6 py-4 rounded-xl border-2 border-[#3a3a3a] focus:border-purple-500 outline-none transition-all duration-300 resize-none min-h-[300px] backdrop-blur-sm group-hover:border-purple-500/50"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute text-gray-400 left-6 top-4 transition-all duration-300 pointer-events-none"
                    style={{
                      transform: form.message ? 'translateY(-170%) scale(0.85)' : 'translateY(0) scale(1)',
                      transformOrigin: 'left'
                    }}
                  >
                    Your Message
                  </label>
                  <div className="absolute right-6 top-6 transition-opacity duration-300 group-hover:opacity-80">
                    <img src="/assets/message.svg" alt="message" className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg 
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
