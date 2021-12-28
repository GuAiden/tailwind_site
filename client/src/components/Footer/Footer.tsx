import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

type FooterCardProps = {
  title: string;
  children: React.ReactNode;
};

const FooterCard: React.FunctionComponent<FooterCardProps> = ({
  title,
  children,
}: FooterCardProps) => (
  <>
    <div className="flex flex-col">
      <h4 className="font-semibold text-lg dark:text-white">{title}</h4>
      {children}
    </div>
  </>
);

const Footer: React.FunctionComponent = () => (
  <>
    <div className="relative py-2 bottom-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:px-10 justify-center items-center bg-blue-500/20 dark:bg-gray-900">
      <div>
        <Link
          to="/"
          className="flex text-xl text-black my-auto dark:text-white font-MontSerrat font-bold z-50 dark:z-50 nav-text"
        >
          <img
            width="29"
            height="29"
            src="https://asoc.unsw.edu.au/images/header_logo.png"
            className="my-auto z-50 dark:z-50 dark-transition"
          />
          ASOC
        </Link>
      </div>
      <FooterCard title="Learn More">
        <Link to="about" className="footer-text">
          About
        </Link>
        <Link to="team" className="footer-text">
          Team
        </Link>
        <Link to="privacy" className="footer-text">
          Privacy Policy
        </Link>
      </FooterCard>
      <FooterCard title="Other stuff">
        <Link to="downloads" className="footer-text">
          Download
        </Link>
        <Link to="careers" className="footer-text">
          Careers
        </Link>
        <Link to="contact" className="footer-text">
          Contact
        </Link>
      </FooterCard>
      <div className="flex items-center">
        <SocialIcon
          url="https://www.facebook.com/asocunsw/"
          className="footer-icon"
        />
        <SocialIcon
          url="https://twitter.com/asocunsw/"
          className="footer-icon"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/actuarial-society-unsw/"
          className="footer-icon"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCC1GYulg6p4XF3K3TccHgcw"
          className="footer-icon"
        />
        <SocialIcon
          url="https://www.instagram.com/asocunsw/"
          className="footer-icon"
        />
      </div>
    </div>
  </>
);

export default Footer;
