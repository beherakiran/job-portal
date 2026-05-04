import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left */}
        <p className="text-sm text-gray-600">
          JobHunt © 2026 All rights reserved
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1877F2"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.88-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.79-1.68 1.6V12h2.85l-.46 2.88h-2.39v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1DA1F2"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.15 12.15 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.72 4.22 4.22 0 0 1-1.94-.54v.05a4.29 4.29 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22 5.92z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0A66C2"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.16h.07c.67-1.27 2.3-2.6 4.73-2.6C21.42 7.56 24 10.06 24 14.5V24h-5v-8.5c0-2.03-.04-4.65-2.84-4.65-2.84 0-3.28 2.22-3.28 4.5V24h-5V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
