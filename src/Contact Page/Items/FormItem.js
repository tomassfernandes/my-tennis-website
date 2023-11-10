import React, { useState } from "react";

export default function ContactForm() {
  const initialFormData = {
    fullName: "",
    email: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Clear the form after submission
    setFormData(initialFormData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="form-inputs"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full name"
        required
      />

      <input
        className="form-inputs"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <textarea
        className="form-inputs"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Comment (optional)"
      />

      <button className="contact-form-btn" type="submit">
        SUBMIT NOW
      </button>
    </form>
  );
}
