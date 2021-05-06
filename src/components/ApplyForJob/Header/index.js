/* eslint-disable*/

import React from 'react';

const Header = ({ job }) => {
  const { title, company, location, ago, image } = job;

  return (
    <header
      className="page-header bg-img size-lg"
      style={{ backgroundImage: 'url(/img/bg-banner1.jpg)' }}
    >
      <div className="container no-shadow">
        <h1 className="text-center">Apply for the job</h1>
        <p className="lead text-center">
          Apply with your online resume, create new resume for the job, or make
          a custom application.
        </p>

        <hr />
        <a className="item-block item-block-flat" href="job-detail.html">
          <header>
            <img src={image} alt="Logo" />
            <div className="hgroup">
              <h4>{title}</h4>
              <h5>{company}</h5>
            </div>
            <div className="header-meta">
              <span className="location">{location}</span>
              <time>{ago}</time>
            </div>
          </header>
        </a>

        <div className="button-group">
          <div className="action-buttons">
            <a className="btn btn-primary" href="#sec-resume">
              Apply now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
