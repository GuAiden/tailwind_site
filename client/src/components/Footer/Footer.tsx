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
    <div className="relative -skew-y-3 my-8 py-8 content-none h-full overflow-hidden z-50">
      <div className="absolute top-0 h-3/5 right-2/3 w-full content-none py-4 bg-gray-700" />
      <div className="absolute bottom-1 h-3/5 right-3/4 w-full content-none py-1 bg-blue-400/80" />
      <div className="absolute top-0 h-3/5 left-2/3 w-full content-none py-4 bg-gray-700" />
      <div className="absolute bottom-1 h-3/5 left-3/4 w-full content-none py-1 bg-blue-400/80" />
    </div>
    <div className="relative py-2 bottom-0 min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:px-10 justify-center items-center dark:bg-neutral-900">
      <div>
        <Link
          to="/"
          className="flex text-xl w-fit text-black my-auto dark:text-white font-MontSerrat font-bold z-50 dark:z-50 nav-text"
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
      <div className="flex flex-col items-center">
        <p className="font-semibold mb-2 dark-text">Check out our Socials!</p>
        <div>
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
    </div>
  </>
);

export default Footer;
