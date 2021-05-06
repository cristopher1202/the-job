import React, { useEffect, useState } from 'react';
import { getJob } from '../../../services/jobs.service';
import { useParams } from 'react-router-dom';

import Navigation from './../../../components/Navigation';
import Header from './../../../components/Header';
import JobDetail from './../../../components/JobDetail';
import Description from './../../../components/JobDetail/Description';
import Footer from './../../../components/Footer';

const DetailJob = () => {
  const [jobData, setJobData] = useState(null);
  const { id } = useParams();

  const getJobDetails = async () => {
    const job = await getJob(id);

    setJobData(job);
  };
  useEffect(() => {
    getJobDetails();
  }, [id]);

  return (
    <div className="nav-on-header smart-nav bg-alt">
      <Navigation />

      <Header
        className="page-header bg-img size-lg"
        backgroundImage="url(/img/bg-banner2.jpg)"
      >
        {jobData ? <Description job={jobData} /> : null}
      </Header>

      <main>{jobData ? <JobDetail job={jobData} /> : null}</main>

      <Footer />
    </div>
  );
};

export default DetailJob;
