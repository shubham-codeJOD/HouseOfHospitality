import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer py-4">
      <div className="container custom-footer-inner">
        <div className="footer-content d-flex justify-content-between align-items-center">
          <div className="mx-auto text-center">
            <p className="rights-text mb-0">&copy; 2025 Humans Of Hospitality. All rights reserved.</p>
          </div>
          <div className="footer-social d-flex justify-content-end">
            <a
              href="https://facebook.com"
              className="social-link mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-link mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-link mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="social-link mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
