import React from 'react';
import Section from '../../components/common/section';
import { PageDivider } from '../../components/common/stripes';
import TeamData from './TeamData.json';

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
};

const TeamCard: React.FunctionComponent<TeamCardProps> = ({
  name,
  role,
  bio,
  photo,
  email,
}: TeamCardProps) => (
  <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-zinc-900/90 dark:highlight-white/5 text-left shadow-lg transition ease-linear duration-200">
    <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
      Lorum ipsum waodnwoandwoandoawd yahadywdywad
    </blockquote>
    <figcaption className="flex items-center space-x-4">
      <img
        src={photo}
        className="flex-none w-14 h-14 rounded-full object-cover"
      />
      <div className="flex-auto dark-text">
        {name}
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </figcaption>
  </figure>
);

const PresidentGrid: React.FunctionComponent = () => {
  const president = TeamData.presidents[0];
  const treasurer = TeamData.treasurer[0];
  return (
    <>
      <div className="w-4/6 flex justify-center flex-col mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="col-start-2">
            <TeamCard
              name={president.name}
              role={president.role}
              bio={president.bio}
              photo={president.photo}
              email={president.email}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 my-5">
          {TeamData.vicePresidents.map((vicePresident, idx) => (
            <TeamCard
              name={vicePresident.name}
              role={vicePresident.role}
              bio={vicePresident.bio}
              photo={vicePresident.photo}
              email={vicePresident.email}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="col-start-2">
            <TeamCard
              name={treasurer.name}
              role={treasurer.role}
              bio={treasurer.bio}
              photo={treasurer.photo}
              email={treasurer.email}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const DirectorGrid: React.FunctionComponent = () => (
  <>
    <div className="w-4/6 flex justify-center flex-col mx-auto text-center">
      <div className="grid md:grid-cols-3 gap-5">
        {TeamData.directors.map((director) => (
          <TeamCard
            name={director.name}
            role={director.role}
            bio={director.bio}
            photo={director.photo}
            email={director.email}
          />
        ))}
      </div>
    </div>
  </>
);

const Team: React.FunctionComponent = () => (
  <>
    <Section>
      <div className="block text-center w-3/5 mx-auto dark-text">
        <h1 className="text-3xl font-medium">The Executive ASOC Team</h1>
        <h3 className="text-xl mt-5">
          Our goal is “To guide and facilitate a{' '}
          <p className="text-blue-600 inline-block">
            supportive, social and actuarial student community
          </p>{' '}
          campus”, a principle that shapes the general running and purpose of
          society.
        </h3>
      </div>
    </Section>
    <Section>
      <PresidentGrid />
    </Section>
    <PageDivider />
    <Section>
      <DirectorGrid />
    </Section>
  </>
);

export default Team;
