import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#FBF1EF] text-base-content p-10">
      
      {/* Brand */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800">
          CleanZone Report
        </h2>
        <p className="font-medium text-gray-600 mt-2 max-w-xl">
          CleanZone Report is a simple community platform to report issues,
          support clean-up efforts, and promote a cleaner, healthier environment.
        </p>
      </div>

      {/* Social Links */}
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://www.linkedin.com/in/rakibul-hasan-rakib-dev/"
            aria-label="Linkedin"
            className="hover:text-orange-500 transition"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>

          <a
            href="https://www.youtube.com/"
            aria-label="YouTube"
            className="hover:text-orange-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/rakibulhasan.rakib.927758/"
            aria-label="Facebook"
            className="hover:text-orange-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CleanZone Report — Developed by{" "}
          <span className="font-semibold text-gray-700">
            Rakibul Hasan
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
