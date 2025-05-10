import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import success and error icons

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ type: string; message: string } | null>(
    null
  ); // To manage success/failure status

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_hdwuak2", // Replace with your service ID
        "template_1gk8bgi", // Replace with your template ID
        templateParams,
        "Hz48BF9n43mE7wOZ0" // Replace with your public key
      )
      .then(
        () => {
          // On success
          setStatus({
            type: "success",
            message: "Your story has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          // Log error for debugging
          console.error("Email sending error:", error);
          // On error
          setStatus({
            type: "error",
            message: "There was an error sending your story. Please try again.",
          });
        }
      );
  };

  return (
    <div>
      {/* Success or Error Message */}
      {status && (
        <div
          className={`alert alert-${status.type === "success" ? "success" : "danger"} alert-dismissible fade show`}
          role="alert"
        >
          {status.type === "success" ? (
            <FaCheckCircle style={{ color: "green" }} /> // Success Icon
          ) : (
            <FaTimesCircle style={{ color: "red" }} /> // Error Icon
          )}
          <strong>{status.type === "success" ? "Success!" : "Error!"}</strong> {status.message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
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

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
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

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
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

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
