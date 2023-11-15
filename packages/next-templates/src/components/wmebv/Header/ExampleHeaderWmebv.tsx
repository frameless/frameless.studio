import { Link, PageHeader } from '@utrecht/component-library-react';
import { PopOverButton } from '../../PopOver/PopOverButton';
import { PopOverDialog } from '../../PopOver/PopOverDialog';
import Logo from '../../../app/styling/assets/voorbeeld-header.svg';
import Xbold from '../../../app/styling/assets/x-bold.svg';
import User from '../../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import '@utrecht/component-library-css';
import '../../ExampleHeader/header.scss';
import '../../ExampleHeader/header.css';

interface ExampleHeaderWmebvProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeaderWmebv = ({ ...props }: ExampleHeaderWmebvProps) => (
  <PageHeader className="example--header-home-page">
    <div className="example-page-header__content">
      <PopOverButton
        aria-label="collapse menu navigation"
        className="example--header-burger-menu-button"
        popoverTarget="popovermenu"
      >
        <div className="example--header-burger-bar-container">
          <span className="example--header-bar"></span>
          <span className="example--header-bar"></span>
          <span className="example--header-bar"></span>
        </div>
        Menu
      </PopOverButton>
      <div className="example--logo">
        <Logo />
      </div>
      <div className="example--header-items">
        <div className="example--header-links-container">
          <Link className="example--header-links" href="#">
            <User className="example--header-user-icon" /> Contact
          </Link>
          <Link className="example--header-links" href="#">
            Mijn Omgeving
          </Link>
        </div>
      </div>
      <PopOverDialog
        data-modal="true"
        id="popovermenu"
        className="example--header-popover-menu"
        role="dialog"
        popover="auto"
      >
        <div className="example--header-popover-container-button">
          <PopOverButton
            appearance="subtle-button"
            className="example--popover-close"
            popoverTarget="popovermenu"
            popoverTargetAction="hide"
          >
            <Xbold className="example--header-xlogo" />
            Sluiten
          </PopOverButton>
        </div>
        <div className="example--header-popover-container-links">
          <Link href="#" className="example--header-links">
            Home
          </Link>
          <Link href="#" className="example--header-links">
            About
          </Link>
          <Link href="#" className="example--header-links">
            Services
          </Link>
          <Link href="#" className="example--header-links">
            Portfolio
          </Link>
        </div>
        <div className="example--header-user">
          <Link href="#" className="example--header-links">
            Contact
          </Link>
          <Link href="#" className="example--header-links">
            <User className="example--header-user-icon" /> Mijn omgeving
          </Link>
        </div>
      </PopOverDialog>
    </div>
  </PageHeader>
);

ExampleHeaderWmebv.displayName = 'ExampleHeaderWmebv';