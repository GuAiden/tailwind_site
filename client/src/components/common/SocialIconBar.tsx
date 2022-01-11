import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIconBar: React.FunctionComponent = () => (
  <div className="my-2">
    <SocialIcon
      url="https://www.facebook.com/asocunsw/"
      className="footer-icon"
    />
    <SocialIcon url="https://twitter.com/asocunsw/" className="footer-icon" />
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
);

export default SocialIconBar;
