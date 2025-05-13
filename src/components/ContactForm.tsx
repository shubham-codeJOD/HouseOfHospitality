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

    const templateParams = { name, email, message };

    emailjs
      .send("service_hdwuak2", "template_1gk8bgi", templateParams, "Hz48BF9n43mE7wOZ0")
      .then(
        () => {
          setStatus({ type: "success", message: "Your story has been sent successfully!" });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Email sending error:", error);
          setStatus({ type: "error", message: "There was an error sending your story. Please try again." });
        }
      );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "40%" }}>
        {status && (
          <div
            className={`alert alert-${status.type === "success" ? "success" : "danger"} alert-dismissible fade show`}
            role="alert"
          >
            {status.type === "success" ? (
              <FaCheckCircle style={{ color: "green" }} />
            ) : (
              <FaTimesCircle style={{ color: "red" }} />
            )}{" "}
            <strong>{status.type === "success" ? "Success!" : "Error!"}</strong> {status.message}
          </div>
        )}

        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-start w-100">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-start w-100">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label text-start w-100">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
