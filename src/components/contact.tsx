'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to submit the form');
    }
    return response.json();
    })
    .then((data) => {
      console.log('Form successfully submitted:', data);
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', body: '' });
    })
    .catch((error) => {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your message. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-4 bg-[#111111] border-[0.2] border-gray-700 p-6 rounded-md mt-4">
      <div className="flex gap-4">
      <div className="flex flex-col">
      <label htmlFor="name" className="text-lg font-medium text-white">Name:</label>
      <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="Enter your name"
      className="text-lg rounded-md p-2 outline-1 outline-gray-500 placeholder-gray-400"
      />
      </div>
      <div className="flex flex-col">
      <label htmlFor="email" className="text-lg font-medium text-white">Email:</label>
      <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
      required
      className="text-lg rounded-md p-2 outline-1 outline-gray-500 placeholder-gray-400"
      />
      </div>
      </div>
      <div className="flex flex-col">
      <label htmlFor="body" className="text-lg font-medium text-white">Message:</label>
      <textarea
        id="body"
        name="body"
        value={formData.body}
        placeholder="Enter your message"
        onChange={handleChange}
        required
        className="text-lg rounded-md p-2 outline-1 outline-gray-500 placeholder-gray-400"
      />
      </div>
      <Button variant="outline" className="mt-4">
        <div className="flex items-center text-white py-2 rounded-m text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L11 13"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L15 22L11 13L2 9L22 2Z"
            />
          </svg>
          <span>Submit</span>
        </div>
      </Button>
    </form>
  );
};

export default ContactForm;