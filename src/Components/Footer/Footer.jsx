import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001931] py-10 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-white">
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-3">DealCraft</h2>
          <p className="text-sm leading-relaxed">
            The best platform to manage your deals efficiently and grow your
            business faster with smart analytics and automation tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-primary duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-primary duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">
            Subscribe to get updates on new deals and features.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs rounded-lg"
            />
            <button className="btn bg-primary text-white border-none hover:bg-[#e85a4f]/90 w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/80">
        <p>
          © {new Date().getFullYear()} DealCraft — All Rights Reserved | Built
          with ❤️ by Siddikur-dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
