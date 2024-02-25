import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I rent a GPU from your service?',
      answer: 'To rent a GPU, simply navigate to our GPU rental page, select the GPU you need, choose your rental duration, and complete the checkout process. You will receive an email with instructions on how to access your rented GPU.',
    },
    {
      question: 'What are the payment options available?',
      answer: 'We accept various payment methods including credit cards, PayPal, and cryptocurrency payments. All payments are securely processed and must be completed before accessing the rental service.',
    },
    {
      question: 'Can I extend my GPU rental period?',
      answer: 'Yes, you can extend your rental period at any time before your current rental expires. Just go to your account dashboard, select the active rental, and choose the extend option. Additional charges will apply based on the extended duration.',
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="faq-container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {faq.question}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
