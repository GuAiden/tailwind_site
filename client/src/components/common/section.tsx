import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FunctionComponent<SectionProps> = ({
  children,
}: SectionProps) => (
  <>
    <div className="md:py-10 sm:py-4 py-2">{children}</div>
  </>
);

export default Section;
