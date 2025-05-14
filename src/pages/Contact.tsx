import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_hdwuak2",
        "template_1gk8bgi",
        templateParams,
        "Hz48BF9n43mE7wOZ0"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Your story has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus({
            type: "error",
            message: "There was an error sending your story. Please try again.",
          });
        }
      );
  };

  return (
    <div className="text-center">
      {/* Top Message */}
      <div className="mb-5">
        <h2 className="fw-bold" style={{ color: "#1f3f6e" }}>Be a Part of the Movement</h2>
        <p style={{ color: "#1f3f6e" }}>
          This is your story as much as ours. Want to share it? Collaborate with us? Or simply join a platform that respects the heart of hospitality? Let’s build it together.
        </p>
      </div>

      {/* Status Message */}
      {status && (
        <div
          className={`alert alert-${status.type === "success" ? "success" : "danger"} alert-dismissible fade show`}
          role="alert"
        >
          {status.type === "success" ? (
            <FaCheckCircle style={{ color: "green" }} />
          ) : (
            <FaTimesCircle style={{ color: "red" }} />
          )}
          <strong>{status.type === "success" ? "Success!" : "Error!"}</strong> {status.message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={sendEmail}>
        <div className="mb-3 text-start">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows={3}
            placeholder="Your message or story"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>

    {/* Contact Info */}
<div className="mt-5">
  <h3 className="fw-bold mb-3" style={{ color: "#1f3f6e" }}>Contact Information</h3>
  <p style={{ color: "#1f3f6e", marginBottom: "0.5rem" }}>
    <strong>Email:</strong> humansofhospitality@outlook.com
  </p>
  <p style={{ color: "#1f3f6e" }}>
    <strong>Instagram:</strong> @wearehumansofhospitality
  </p>
</div>
    </div>
  );
}
