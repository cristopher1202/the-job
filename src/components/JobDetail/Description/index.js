/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const JobDescription = ({ job }) => {
  const {
    id,
    image,
    title,
    company,
    ago,
    about,
    location,
    type,
    salary,
    hours,
    experience,
    certificate,
  } = job;
  const currentUser = JSON.parse(localStorage.getItem('THE_JOB_APP'));

  const history = useHistory();

  const handleClick = current => {
    if (current === null) {
      alert('You must register first');
      history.push('/register');
    }
  };

  return (
    <div className="container">
      <div className="header-detail">
        <img className="logo" src={image} alt="google Logo" />
        <div className="hgroup">
          <h1>{title}</h1>
          <h3>
            <a href="/">{company}</a>
          </h3>
        </div>
        <time>{ago}</time>
        <hr />
        <p className="lead">{about}</p>

        <ul className="details cols-3">
          <li>
            <i className="fa fa-map-marker" />
            <span>{location}</span>
          </li>

          <li>
            <i className="fa fa-briefcase" />
            <span>{type}</span>
          </li>

          <li>
            <i className="fa fa-money" />
            <span>{salary}</span>
          </li>

          <li>
            <i className="fa fa-clock-o" />
            <span>{hours}</span>
          </li>

          <li>
            <i className="fa fa-flask" />
            <span>{experience}</span>
          </li>

          <li>
            <i className="fa fa-certificate" />
            <a href="/">{certificate}</a>
          </li>
        </ul>

        <div className="button-group">
          <ul className="social-icons">
            <li className="title">Share on</li>
            <li>
              <a className="facebook" href="/">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="google-plus" href="/">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a className="twitter" href="/">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>

          <div className="action-buttons">
            <Link className="btn btn-primary" to="/">
              Apply with linkedin
            </Link>
            <Link
              className="btn btn-success"
              onClick={handleClick(currentUser)}
              to={`/jobs/apply/${id}`}
            >
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
