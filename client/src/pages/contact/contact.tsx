import React from 'react';
import Section from '../../components/common/section';
import './contact.css';

type ContactCardProps = {
  title: string;
  body: string;
  email: string;
};

const ContactCard: React.FunctionComponent<ContactCardProps> = ({
  title,
  body,
  email,
}: ContactCardProps) => (
  <div className="contact-card group">
    <div className="text-center mx-auto">
      <div className="text-xl font-middle">{title}</div>
      <div className="text-left mx-auto my-5 text-gray-600">{body}</div>
    </div>
    <div className="flex flex-row items-center">
      <div className="text-left text-sky-500 group-hover:text-black dark:group-hover:text-white transition duration-200 ease-linear">
        Email: {email}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-10 transiiton-all duration-200 group-hover:translate-x-3 text-sky-500 group-hover:text-black dark:group-hover:text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
);

const ContactPage: React.FunctionComponent = () => (
  <>
    <Section>
      <div className="block text-center md:w-2/6 mx-auto dark-text mt-12 text-4xl leading-[3.5rem] font-medium tracking-tight">
        Contact us
      </div>
      <div className="block text-center mx-auto dark-text mt-5 text-xl text-gray-500">
        Get in touch with us and let us know how we might be able to help
      </div>
    </Section>
    <Section>
      <div className="grid grid-cols-3 md:w-4/6 mx-auto gap-x-10">
        <ContactCard
          title="General"
          body="Meet up with us in person at Room 653, Level 6 East Wing
                UNSW Business School, Sydney NSW 2052"
          email="mail@asoc.unsw.edu.au"
        />
        <ContactCard
          title="Sponsorship"
          body="Contact our VPE for sponsorship interests"
          email="mail@asoc.unsw.edu.au"
        />
        <ContactCard
          title="Technical"
          body="For any IT issues, contact our technical department"
          email="it@asoc.unsw.edu.au"
        />
      </div>
    </Section>
  </>
);

export default ContactPage;
