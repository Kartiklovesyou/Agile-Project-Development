import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">About TMS</h3>
            <p className="text-gray-300 text-sm">
              Transportation Management System (TMS) helps you optimize your logistics operations, streamline routes, and provide real-time tracking for better service and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-300 hover:text-yellow-300 text-sm">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-300 hover:text-yellow-300 text-sm">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Transportation Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
