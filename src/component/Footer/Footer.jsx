import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 border-b-1">
        <nav>
          <h3 className="footer-title">CS — Ticket System</h3>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard dummy text <br /> ever since the 1500s, when an unknown
            printer took <br /> a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">
            <i class="fa-brands fa-square-x-twitter"></i> @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-brands fa-linkedin"></i> @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-brands fa-facebook"></i> @CS — Ticket System
          </a>
          <a className="link link-hover">
            <i class="fa-solid fa-envelope"></i> support@cst.com
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-white p-4">
        <aside>
          <p>
            © {new Date().getFullYear()} CS — Ticket System. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
