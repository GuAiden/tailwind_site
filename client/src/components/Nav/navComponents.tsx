import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';

type NavItemProps = {
  path: string;
  text: string;
};

export const NavItem: React.FunctionComponent<NavItemProps> = ({
  path,
  text,
}: NavItemProps) => (
  <Link to={path} className="nav-text">
    {text}
  </Link>
);

export const NavButton: React.FunctionComponent<NavItemProps> = ({
  path,
  text,
}: NavItemProps) => (
  <Link to={path} className="nav-text">
    <button className="nav-button">{text}</button>
  </Link>
);

type NavDropdownProps = {
  title: string;
  options: NavItemProps[];
};

export const NavDropdown: React.FunctionComponent<NavDropdownProps> = ({
  title,
  options,
}: NavDropdownProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  });

  return (
    <>
      <Popover className="relative my-auto">
        <Popover.Button className="nav-text" ref={setReferenceElement}>
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100 shadow-2xl"
          leave="transition duration-200 ease-out"
          leaveFrom="opacity-100 shadow-2xl"
          leaveTo="opacity-0 shadow-none"
        >
          <Popover.Panel
            className="absolute z-50 w-96 mt-5 shadow-2xl bg-neutral-200 rounded"
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="flex">
              <div className="grid grid-cols-2 gap-x-10 mx-auto">
                {options.map((option) => (
                  <div className="block">
                    <div className="w-fit group">
                      <Link to={option.path}>
                        <span className="dropdown-text">{option.text}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 my-auto inline-block opacity-0 group-hover:opacity-100 transition ease-linear duration-200 scale-75 group-hover:scale-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};
