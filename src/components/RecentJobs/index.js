/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecentJobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/api/jobs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {data.map(jobs => (
            <div className="col-xs-12" key={jobs.id}>
              <Link className="item-block" to={`/jobs/detail/${jobs.id}`}>
                <header>
                  <img src={jobs.image} alt="" />
                  <div className="hgroup">
                    <h4>{jobs.title}</h4>
                    <h5>{jobs.company}</h5>
                  </div>
                  <div className="header-meta">
                    <span className="location">{jobs.location}</span>
                    <span className="label label-success">{jobs.type}</span>
                  </div>
                </header>
              </Link>
            </div>
          ))}
        </div>

        <br />
        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  );
};
export default RecentJobs;
